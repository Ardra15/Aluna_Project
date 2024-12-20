"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import JOURNALING from "../assets/journaling.jpg";
import COUNSELING from "../assets/counseling.jpg";
import CHATBOT from "../assets/chat-bot.jpg";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";

export default function ServicesOption() {
  const router = useRouter();
  const { user } = useAuth();

  // Get the display name or email, or "Guest" if neither is available
  const userName = user?.displayName || user?.email?.split('@')[0] || "Guest";

  const services = [
    {
      title: "Mental Counseling",
      description: "Schedule a session with a licensed therapist to discuss your mental health concerns.",
      buttonText: "Access Now",
      imageUrl: COUNSELING.src,
      onClick: () => {
        router.push('/counseling');
      },
    },
    {
      title: "Journaling",
      description: "Write about your thoughts, feelings, and experiences to improve your mental health.",
      buttonText: "Access Now",
      imageUrl: JOURNALING.src,
      onClick: () => {
        router.push('/journal');
      },
    },
    {
      title: "Aluna Bot",
      description: "Chat with Aluna, a chatbot that can help you with your mental health.",
      buttonText: "Access Now",
      imageUrl: CHATBOT.src,
      onClick: () => {
        router.push('/chatbot');
      },
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-sm font-medium mb-2">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Hi, {userName}, Let's get started!
        </h2>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative bg-black/90 text-white overflow-hidden w-full max-w-[300px] h-[300px]"
            >
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Button onClick={service.onClick} variant="destructive" className="bg-orange-500 hover:bg-orange-600">
                    {service.buttonText}
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}