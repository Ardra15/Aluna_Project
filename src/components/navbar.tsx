"use client"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/assets/logokecil.png"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { auth } from "@/lib/firebaseConfig"
import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import { Toaster, toast } from 'sonner'

export function Navbar() {
  const { user } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      toast.success("Successfully logged out!")
      router.push("/")
    } catch (error) {
      console.error("Error logging out:", error)
      toast.error("Failed to log out")
    }
  }

  const handleServicesClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault()
      toast.error("You need to log in first to access the services")
      setTimeout(() => {
        router.push("/sign-in")
      }, 2000)
    }
  }

  return (
    <>
      <Toaster />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-20">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex justify-center items-center">
              <Image
                src={Logo}
                alt="Aluna Logo"
                width={32}
                height={32}
                className="text-emerald-600"
              />
            </div>
            <Link href="/" className="text-xl font-semibold">
              Aluna
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-md font-medium hover:text-[#EC744A]">
              Home
            </Link>
            <Link href="/about" className="text-md font-medium hover:text-[#EC744A]">
              About
            </Link>
            <Link 
              href={user ? "/services" : "/sign-in"} 
              onClick={handleServicesClick}
              className="text-md font-medium hover:text-[#EC744A]"
            >
              Services
            </Link>
            <Link href="/daily-quotes" className="text-md font-medium hover:text-[#EC744A]">
              DailyQuotes
            </Link>
          </nav>
          {user ? (
            <Button 
              onClick={handleLogout} 
              className="bg-[#EC744A] hover:bg-black"
            >
              Logout
            </Button>
          ) : (
            <Link href="/sign-in">
              <Button className="bg-[#EC744A] hover:bg-black">Sign In</Button>
            </Link>
          )}
        </div>
      </header>
    </>
  )
}

