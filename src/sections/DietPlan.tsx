// Components
import DietCard from "@/components/diet-card"

export default function DietPlan() {
    return (
        <section className="unified-section">
            <div className="flex flex-col">
                <h2 className="title">نظام غذائي مرن</h2>
                <p className="text-lg text-[var(--gold)] font-semibold">لا مزيد من الأنظمة القاسية! صمم خطة غذائية تتكيف مع ذوقك وأهدافك، بدعم من مدربين خبراء. واجباتك المفضلة وأطباق جديدة شهية—وكلها تحقق نتائجَ استثنائية.</p>
            </div>
            <div className="exercise-card flex-1 border border-[var(--gold)] transition-all rounded-xl overflow-hidden">
                <DietCard />
            </div>
        </section>
    )
}