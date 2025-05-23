// Icons
import { Dumbbell, Apple, ChartBar } from 'lucide-react';

export default function Benefits() {
    return (
        <section className="py-[120px] px-[5%] border-b-4 border-[#C5A47E] grid md:grid-cols-2 gap-16 items-center">
            <h2 className="title">انضم إلى برنامج النخبة</h2>
            <div className="backdrop-blur-lg">
                <div className="space-y-6">
                    <div className="flex items-center gap-4 rounded-sm p-4 text-[#C5A47E] bg-[rgba(197,164,126,0.05)] border-r-4 border-[#C5A47E]">
                        <Dumbbell />
                        <div>
                            <h3 className="text-xl font-semibold">خطط تدريب شخصية</h3>
                            <p className="text-sm">تصميم حسب قياساتك الجسدية وأهدافك</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-sm p-4 text-[#C5A47E] bg-[rgba(197,164,126,0.05)] border-r-4 border-[#C5A47E]">
                        <Apple />
                        <div>
                            <h3 className="text-xl font-semibold">نظام غذائي</h3>
                            <p className="text-sm">نظام غذائي مرن يتناسب مع أهدافك</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-sm p-4 text-[#C5A47E] bg-[rgba(197,164,126,0.05)] border-r-4 border-[#C5A47E]">
                        <ChartBar />
                        <div>
                            <h3 className="text-xl font-semibold">تقييم أسبوعي</h3>
                            <p className="text-sm">متابعة دقيقة لتقدمك مع تقارير مفصلة</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}