// Next 
import Image from "next/image";
// Components
import { OverviewProps } from "@/types/props";
// Icons
import { ArrowBigDown , ArrowBigUp } from "lucide-react";
// Image
import imagee from "../../public/images/black_placeholder.svg";

const Overview = ({ text, percentage, value } : OverviewProps) => {
    return (
        <div className="col-span-1 bg-white px-4 py-2 flex items-center justify-center flex-row rounded-md shadow-md">
            <div className="flex-1 h-full">
                <h3 className="text-lg mb-2 font-medium text-[#7E84A3]">
                    {text}
                </h3>

                <h1 className="text-2xl font-bold">
                    {value}
                </h1>

                <p className="text-sm text-end text-[#7E84A3] flex items-center justify-start gap-2 w-full">
                    <span>من العام الماضي</span>
                    {" "}
                    <span className={`font-bold flex items-center justify-center gap-[2px] ${percentage >= 2 ? "text-[#3DD598]" : "text-[#F0142F]"}`}>
                        {percentage >= 2 ? (<ArrowBigUp />) : (<ArrowBigDown />)}
                        {percentage}%
                    </span>
                </p>
            </div>
            <div className="flex-1 items-end flex justify-end">
                <div>
                    <Image src={imagee} className="w-24 h-24 rounded-full" alt="coach" />
                </div>
            </div>
        </div>
    )
}

export default Overview;