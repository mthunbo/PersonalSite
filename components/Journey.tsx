"use client"
import { useState } from "react"
import { SectionLayout } from "./SectionLayout"
import TimelineCard from "./TimelineCard"

const journeyData = [
  {
    date: "1995",
    title: "Birth of a great one",
    description: "In the year of the lord 1995, during a blizzard of untold horrors, the great one was born",
  },
  {
    date: "2018",
    title: "Forging Foundations",
    description: "Long before the first line of code, my journey began with 9 years in retail, building a strong foundation in responsibility, customer-focused problem-solving, and team leadership.",
  },
  {
    date: "2017",
    title: "First Contact: C++ & The Command Line",
    description: "My first formal foray into the digital world. I began my engineering studies, engaging with foundational languages like C, C++, and C# and learning the structured logic that underpins modern technology.",
  },
  {
    date: "2020",
    title: "Course Correction",
    description: "I realized my true passion was not in theoretical engineering, but in the hands-on craft of programming. I made the deliberate choice to pivot and find a path more aligned with building and creating.",
  },
  {
    date: "2024 - Present",
    title: "The Citadel's Architect",
    description: "Finding my calling as a Data Technician. This path combines my love for structured problem-solving with the creative freedom of building full-stack applications, from REST APIs to mobile apps.",
  },
]

export default function Journey() {
    const [openCardId, setOpenCardId] = useState<string | null>(null)
    
    const handleCardClick = (cardId: string) => {
        setOpenCardId(openCardId === cardId ? null : cardId)
    }

    return (
        <SectionLayout
            id="Journey"
            title="My Journey"
            subtitle="A Timeline of Growth"
            fromColorClass="from-background"
            toColorClass="to-surface"
        >
        <div className="relative container mx-auto px-16 py-16">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary rounded-full"></div>
            <div className="space-y-16">
                {journeyData.map((item, index) => (
                    <div key={item.title} className="relative">
                        <div className="absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-highlight border-2 border-surface"></div>
                        <TimelineCard
                            date={item.date}
                            title={item.title}
                            description={item.description}
                            direction={index % 2 === 0 ? "right" : "left"}
                            isOpen={openCardId === item.title}
                            onCardClick={() => handleCardClick(item.title)}
                            />
                    </div>
                ))}
            </div>
        </div>
    </SectionLayout>
  );
}