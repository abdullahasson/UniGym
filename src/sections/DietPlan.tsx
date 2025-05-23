// Components
import DietCard from "@/components/diet-card"

export default function DietPlan() {
    return (
        <section className="unified-section">
            <div className="flex flex-col">
                <h2 className="title">نظام غذائي مرن</h2>
                <p className="text-lg text-[var(--gold)] font-semibold">سأقوم بالاطلاع على المعلومات التي تحتاجها لتنظيم نظام غذائي مرن وتوفير الأدوات المناسبة للتدريب والحصول على مساعدة في تحسين النظام الخاص بك.</p>
            </div>
            <div className="exercise-card flex-1 border border-[var(--gold)] transition-all rounded-xl overflow-hidden">
                <DietCard />
            </div>
        </section>
    )
}