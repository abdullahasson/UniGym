// Components
import Overview from "@/components/Overview";

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 flex-1 gap-4 w-full">
                <Overview
                    text="عدد الاعبين الذكور"
                    percentage={2.3}
                    value="550"
                />

                <Overview
                    text="عدد الاعبين الأناث"
                    percentage={2.3}
                    value="220"
                />

                <Overview
                    text="عدد المدربين"
                    percentage={2.3}
                    value="10"
                />
            </div>

            <div className="flex-1"></div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
        </>
    )
} 