"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Background from "@/assets/auth-background.png"
import { auth } from "@/lib/firebaseConfig"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "next/navigation"
import { Toaster, toast } from 'sonner'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password || !username) {
      setError("Please fill in all fields")
      return
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toast.success("Registration successful! Redirecting to login...")
      setTimeout(() => {
        router.push("/sign-in")
      }, 2000)
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already in use')
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters')
      } else {
        setError('An error occurred during registration')
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.push("/dashboard") // or wherever you want to redirect after successful sign-in
    } catch (error: any) {
      setError(error.message)
    }
  }

  return (
    <>
      <Toaster />
      <div className="h-screen bg-gradient-to-br from-emerald-400 to-teal-600">
        <main className="container mx-auto px-4 py-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl h-fit md:h-[700px] md:mx-11 lg:mx-40">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[300px] md:h-[700px]">
                <Image
                  src={Background}
                  alt="Lighthouse and boat in calm waters"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-2 left-2 text-xs text-white/70">
                  Photo by Alexandr Podvalny
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mx-auto max-w-sm space-y-6 w-4/5 lg:w-5/6">
                  <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                      Welcome
                    </h1>
                    <p className="text-sm text-muted-foreground">Register</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter username"
                          type="text"
                          required
                          className="bg-gray-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email"
                          type="email"
                          required
                          className="bg-gray-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            required
                            className="bg-gray-50"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-[#f47458] hover:bg-[#f47458]/90">
                        Sign up
                      </Button>
                    </div>
                  </form>
                  <Button
                    variant="outline"
                    className="w-full border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
                  >
                    <Image
                      src="/google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Or sign in with Google
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Already have account?{" "}
                    <Link href="/sign-in" className="text-[#f47458] hover:underline">
                      Sign in now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}