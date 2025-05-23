import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Join() {
    return (
        <section className="py-[120px] px-[5%] border-b-4 border-[#C5A47E] grid md:grid-cols-2 gap-16 items-center">
            <form className="mt-8">
                <input type="text" placeholder="الاسم الكامل" className="w-full px-4 py-4 mb-6 bg-[rgba(244,240,236,0.1)] border border-[rgba(197,164,126,0.3)] text-[#F4F0EC]" />
                <input type="email" placeholder="البريد الإلكتروني" className="w-full px-4 py-4 mb-6 bg-[rgba(244,240,236,0.1)] border border-[rgba(197,164,126,0.3)] text-[#F4F0EC]" />
                <Select>
                    <SelectTrigger dir="rtl" className="w-full px-4 py-4 mb-6 bg-[rgba(244,240,236,0.1)] rounded-none border border-[rgba(197,164,126,0.3)] text-[#F4F0EC]">
                        <SelectValue placeholder="اختر المستوى" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <button type="submit" className="w-full py-4 bg-[#C5A47E] text-[#0A1A2F] font-bold transition duration-300">
                    ابدأ رحلتك الآن
                </button>
            </form>

            <h2 className="title">رحلتك تبدأ من هنا</h2>
        </section>
    )
}