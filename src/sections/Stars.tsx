// Next
import Image from "next/image"
// Images
import Image1 from "../../public/images/placeholder.svg"

export default function Stars() {
    return (
        <section className="py-20 px-[5%] border-b-4 border-[#C5A47E]">
            <h2 className="title mx-auto">نجوم النخبة</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* بطاقة نجاح */}
                <div className="group relative overflow-hidden rounded-lg border-2 border-[#C5A47E] hover:border-[#F4F0EC] transition-all">
                    <Image src={Image1} alt="kk" className="h-96 w-full object-cover grayscale group-hover:grayscale-0 transition" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] p-6 flex flex-col justify-end">
                        <h3 className="text-2xl text-[#C5A47E]">محمد السليمي</h3>
                        <p className="text-[#F4F0EC]">+15kg عضلات خلال 8 أشهر</p>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border-2 border-[#C5A47E] hover:border-[#F4F0EC] transition-all">
                    <Image src={Image1} alt="kk" className="h-96 w-full object-cover grayscale group-hover:grayscale-0 transition" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] p-6 flex flex-col justify-end">
                        <h3 className="text-2xl text-[#C5A47E]">علي قاسم</h3>
                        <p className="text-[#F4F0EC]">+1kg عضلات خلال 3 أشهر</p>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border-2 border-[#C5A47E] hover:border-[#F4F0EC] transition-all">
                    <Image src={Image1} alt="kk" className="h-96 w-full object-cover grayscale group-hover:grayscale-0 transition" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] p-6 flex flex-col justify-end">
                        <h3 className="text-2xl text-[#C5A47E]">فراس محمد</h3>
                        <p className="text-[#F4F0EC]">+15kg عضلات خلال 8 أشهر</p>
                    </div>
                </div>
                {/* المزيد من البطاقات */}
            </div>
        </section>
    )
}