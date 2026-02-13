import { ReactNode } from "react"
import { Button } from "./ui/button";

interface SectionProps {
    children: ReactNode;
    title: string;
}

export default function Section({children, title}: SectionProps) {
  return (
    <section>
        <div className="flex items-center">
            <h2>{title}</h2>
            <Button>すべて表示</Button>
        </div>
    </section>
  )
}
