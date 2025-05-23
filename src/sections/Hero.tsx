// Next
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react"
// Images
import Image1 from "../../public/images/placeholder.svg";


export default function Hero() {
    return (
        <section className="border-b-4 border-[#C5A47E] py-20 px-[5%]">
            <div className="min-h-screen grid md:grid-cols-2 items-center gap-16">
                <div className="relative max-w-[550px] perspective-1000">
                    <Image src={Image1} alt="[اسمك]" className="w-full h-[650px] rounded-sm object-cover border-4 border-[#C5A47E] shadow-[0_30px_50px_rgba(0,0,0,0.3)] luxury-image transition-transform duration-500" />
                </div>
                <div className="text-[#F4F0EC] flex flex-col items-start gap-9">
                    <h1 className="title">
                        [اسم المدرب]
                    </h1>
                    <p className="text-[#C5A47E] text-xl leading-relaxed max-w-[600px]">
                        مدرب النخبة المعتمد دوليًا،<br />
                        مختص في تحويل الأجسام إلى مستويات بطولية<br />
                        مع نهج فريد يجمع بين العلم والفن في التدريب
                    </p>
                    <div className="flex gap-6">
                        <div className="bg-[rgba(197,164,126,0.1)] px-8 py-4 rounded-sm border border-[#C5A47E] backdrop-blur-sm transition duration-300 text-[#C5A47E] hover:bg-[rgba(197,164,126,0.2)] hover:-translate-y-1">
                            <i className="fas fa-gem" /> IFBB PRO
                        </div>
                        <div className="bg-[rgba(197,164,126,0.1)] px-8 py-4 rounded-sm border border-[#C5A47E] backdrop-blur-sm transition duration-300 text-[#C5A47E] hover:bg-[rgba(197,164,126,0.2)] hover:-translate-y-1">
                            <i className="fas fa-trophy" /> 10+ جوائز
                        </div>
                        <div className="bg-[rgba(197,164,126,0.1)] px-8 py-4 rounded-sm border border-[#C5A47E] backdrop-blur-sm transition duration-300 text-[#C5A47E] hover:bg-[rgba(197,164,126,0.2)] hover:-translate-y-1">
                            <i className="fas fa-star" /> نخبة المدربين
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="text-2xl text-[#C5A47E] transition duration-300 border border-[#C5A47E] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#C5A47E] hover:text-[#0A1A2F]">
                            <Facebook />
                        </a>
                        <a href="#" className="text-2xl text-[#C5A47E] transition duration-300 border border-[#C5A47E] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#C5A47E] hover:text-[#0A1A2F]">
                            <Instagram />
                        </a>
                        <a href="#" className="text-2xl text-[#C5A47E] transition duration-300 border border-[#C5A47E] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#C5A47E] hover:text-[#0A1A2F]">
                            <Linkedin />
                        </a>
                    </div>
                    <button className="bg-gradient-to-r from-[#C5A47E] to-[#B08F6E] text-[#0A1A2F] px-12 py-4 font-bold uppercase tracking-wider rounded-sm border border-[#C5A47E] relative overflow-hidden shine-effect">
                        اشترك VIP
                    </button>
                </div>
            </div>
        </section>
    )
}