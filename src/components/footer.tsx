import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-b-4 border-[#C5A47E]">
            <div className="max-w-7xl mx-auto py-12 px-[5%]">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                    {/* الشعار والمعلومات */}
                    <div className="text-center md:text-right">
                        <h3 className="text-2xl font-bold text-[#C5A47E] mb-2">UniGym</h3>
                        <p className="text-[#C5A47E] opacity-90 text-sm">صناعة الأجساد الرائدة منذ 2015</p>
                    </div>
                    {/* حقوق النشر */}
                    <div className="text-center">
                        <p className="text-[#C5A47E] opacity-75 text-sm">
                            © 2024 UniGym<br />
                            <span className="text-xs">جميع الحقوق محفوظة</span>
                        </p>
                    </div>
                    {/* روابط التواصل */}
                    <div className="flex gap-4">
                        <a href="#" className="social-icon-luxury">
                            <Facebook />
                        </a>
                        <a href="#" className="social-icon-luxury">
                            <Instagram />
                        </a>
                        <a href="#" className="social-icon-luxury">
                            <Linkedin />
                        </a>
                    </div>
                </div>
                {/* فاصل زخرفي */}
                <div className="border-t border-[rgba(197,164,126,0.2)] mt-8 pt-8 text-center">
                    <p className="text-[#C5A47E] opacity-75 text-xs">
                        تطوير: <a href="https://abdullahasson.vercel.app/ar" className="hover:text-[#F4F0EC] transition duration-300" target="_blank">
                            عبدالله حسون
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}