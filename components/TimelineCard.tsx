// type TimelineCardProps = {
//   date: string;
//   title: string;
//   description: string;
//   direction?: "left" | "right";
// };

// export default function TimelineCard({
//   date,
//   title,
//   description,
//   direction = "right",
// }: TimelineCardProps) {
//   const isLeft = direction === "left";

//   return (
//     <div className={`w-full md:w-1/2 ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
//       {/* The Connector */}
//       <div className={`absolute top-1 h-3 w-3 rounded-full bg-highlight ${isLeft ? "-right-1.5" : "-left-1.5"}`}></div>

//       {/* The Card */}
//       <div className="relative rounded-lg border border-border bg-surface p-6">
//         <div className={`absolute top-0 h-4 w-4 rotate-45 border-border bg-surface ${isLeft ? "-right-2 border-t border-r" : "-left-2 border-b border-l"}`}></div>

//         <p className="font-orbitron text-sm text-highlight">{date}</p>
//         <h3 className="mt-2 font-heading text-xl text-text">{title}</h3>
//         <p className="mt-4 font-body text-text-muted">{description}</p>
//       </div>
//     </div>
//   );
// }
type TimelineProps = {
    date: string
    title: string
    description: string
    direction?: "left" | "right"
}

export default function TimelineCard({
    date,
    title,
    description,
    direction= "right"
}: TimelineProps) {
    const isLeft = direction === "left"
    return (
        <div className={`relative w-full md:w-1/2 ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
            <div className="relative bg-primary rounded-lg p-6 border-highlight border-2">
                <div className={`absolute top-0 h-4 w-4 rotate-45 border-highlight bg-primary ${isLeft ? "-right-2 border-t-2 border-r-2" : "-left-2 border-b-2 border-l-2"}`}></div>
                
                <p className="font-heading text-sm text-highlight">{date}</p>
                <h3 className="mt-2 font-heading text-xl text-text">{title}</h3>
                <p className="mt-4 font-body text-text-muted">{description}</p>
            </div>
        </div>
    )
}