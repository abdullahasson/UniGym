// Components
import BodyCalculator from "@/components/body-calculator";

export default function Measurements() {
    return (
        <section className="unified-section">
            <div className="flex-1 border border-[var(--gold)] transition-all rounded-xl overflow-hidden">
                <BodyCalculator />
            </div>

            <div className="flex flex-col">
                <h2 className="title">معلومات دقيقة </h2>
                <p className="text-lg text-[var(--gold)] font-semibold">سأقوم بالاطلاع على المعلومات التي تحتاجها لتنظيم نظام غذائي مرن وتوفير الأدوات المناسبة للتدريب والحصول على مساعدة في تحسين النظام الخاص بك.</p>
            </div>
        </section>
    )
}