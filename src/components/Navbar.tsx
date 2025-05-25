// Next
import Link from "next/link"
// Icons
import { AArrowDown } from "lucide-react"

export default function Navbar() {
    
    const navLinks = [
        {
            name: "الرئيسية",
            href: "/",
            icon: <AArrowDown />
        },
        {
            name: "المدربين",
            href: "coach",
            icon: <AArrowDown />
        },
        {
            name: "الاعبين",
            href: "trainees",
            icon: <AArrowDown />
        },
        {
            name: "جداول التمارين",
            href: "/dashboard/schedules",
            icon: <AArrowDown />
        },
        {
            name: "الإحصائيات",
            href: "statistics",
            icon: <AArrowDown />
        },
        {
            name: "الاشتراكات",
            href: "subscriptions",
            icon: <AArrowDown />
        },
        {
            name: "المنتجات",
            href: "application-interface",
            icon: <AArrowDown />
        },
        {
            name: "الكاميرات",
            href: "products",
            icon: <AArrowDown />
        },
        {
            name: "مركز المساعدة",
            href: "marketing-tools",
            icon: <AArrowDown />
        },
        {
            name: "الأعدادات",
            href: "settings",
            icon: <AArrowDown />
        },
    ]

    return (
        <div dir="rtl" className="flex-1 relative responsive-navbar bg-gray-800 text-white" >
            <div className="py-4 bg-transparant">
                <ul>
                    {
                        navLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        href={`${link.href}`}
                                        className="nav-link cursor-pointer"
                                    >

                                        <div className="flex justify-end font-semibold items-center gap-4">
                                            {link.icon}
                                            {link.name}
                                        </div>

                                    </Link>
                                </li>
                            )
                        })
                    }
                    <li>
                        <div className="nav-link cursor-pointer">
                            <div className="flex justify-end font-semibold items-center gap-4 ml-auto">
                                <AArrowDown />
                                تسجيل الخروج

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}