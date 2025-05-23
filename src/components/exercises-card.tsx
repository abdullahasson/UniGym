// Image
import Image from "next/image"
// Types
import { ExercisesCardProps } from "@/types/props"

export default function ExercisesCard({ 
    equipment , 
    gifUrl , 
    name , 
    target , 
    secondaryMuscles , 
    instructions 
} : ExercisesCardProps) {
    return (
        <div className="w-[450px] rotate-[5deg] border border-[var(--gold)] transition-all rounded-xl bg-[var(--ivory)] overflow-hidden">
            <div className="card-header p-4 text-white">
                <h1 className="text-[var(--ivory)] font-semibold mb-1.5 text-2xl">{name}</h1>
                <p className="exercise-target">{target}</p>
            </div>
            <div className="p-4 text-[var(--dark-charcoal)]">
                <div className="w-full h-80 rounded-2xl overflow-hidden mb-4 border-2 border-[var(--gold)]">
                    <Image src={gifUrl} alt="gif" className="w-full h-full object-cover" />
                </div>
                <div className="muscles-section">
                    <h3 className="text-[var(--burgundy)] text-sm mb-2 font-semibold border-b border-[var(--gold)] pb-1.5">العضلات المستخدمة</h3>
                    <ul className="list-none mb-4 flex flex-wrap gap-1.5">
                        {secondaryMuscles.map((muscle: string) => (
                            <li className="bg-[var(--deep-navy)] text-[var(--gold)] px-4 py-2 rounded-full text-sm" key={muscle}>
                                {muscle}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="instructions-section">
                    <h3 className="text-[var(--burgundy)] text-sm mb-2 font-semibold border-b border-[var(--gold)] pb-1.5">الخطوات</h3>
                    <ol className="list-none pr-0 text-sm leading-5">
                        {instructions.map((instruction: string) => (
                            <li key={instruction}>
                                {instruction}
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="bg-[var(--deep-navy)] text-[var(--gold)] py-2 px-2.5 rounded-2xl text-sm inline-block mt-2 border border-[var(--gold)]">
                    {equipment}
                </div>
            </div>
        </div>
    )
}