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
                <p className="text-lg text-[var(--gold)] font-semibold">أدوات ذكية لمراقبة كل تفصيل: من معدل الحرق إلى تطور القوة والتحمل. تقارير مفصَّلة تساعدك أنت ومدربك على ضبط الخطة لتحقيق أقصى استفادة.</p>
            </div>
        </section>
    )
}