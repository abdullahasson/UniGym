// Components
import ExercisesCard from "@/components/exercises-card";
// Fake data
import { clearExercises } from "@/constants/exercises"

export default function ClearExercises() {
    return (
        <section className="unified-section">
            <div className="flex items-center justify-center flex-1">
                <ExercisesCard key={clearExercises[0].id} {...clearExercises[0]} />
            </div>

            <div className="flex flex-col">
                <h2 className="title">تمارين الكترونية واضحة</h2>
                <p className="text-lg text-[var(--gold)] font-semibold">استمتع ببرامج تدريب مُفصَّلة خطوة بخطوة، مع فيديوهات توضيحية وتحديثات تلقائية تواكب تقدمك. كل تمرين مصمم لتحقيق نتائج ملموسة دون الحاجة إلى صالة رياضية!</p>
            </div>
        </section>
    )
}