import { SectionLayout } from "./SectionLayout"
import TimelineCard from "./TimelineCard"

const journeyData = [
    {
        date: "1995",
        title: "Birth of the great one",
        description: "On a snowy morning in the lords year 1995, the great one was born",
    },
    {
        date: "2021",
        title: "A Spark of Curiosity",
        description: "Began my self-taught journey into programming, starting with the fundamentals of Python and web development.",
    },
    {
        date: "2023",
        title: "University & Deeper Learning",
        description: "Enrolled in university, diving deep into computer science principles, data structures, and algorithms.",
    },
    {
        date: "Present",
        title: "Building the Future",
        description: "Actively developing projects, exploring AI and game development, and turning complex ideas into tangible solutions.",
    },
]

export default function Journey() {
  return (
    <SectionLayout
      id="Journey"
      title="My Journey"
      subtitle="A Timeline of Growth"
      fromColorClass="from-background"
      toColorClass="to-surface"
    >
      <div className="relative container mx-auto px-4 py-16">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border rounded-full"></div>
        <div className="space-y-16">
          {journeyData.map((item, index) => (
            <div key={item.title} className="relative">
              <TimelineCard
                date={item.date}
                title={item.title}
                description={item.description}
                direction={index % 2 === 0 ? "right" : "left"}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}