// Next
import Image from "next/image"
// Components
// import Clock from "./Clock";
import { Input } from "./ui/input"
import { 
    Avatar,
    AvatarFallback,
    AvatarImage,
 } from "./ui/avatar"
//  Logo
import Logo from "../../public/images/black_placeholder.svg"

const Header = () => {
    return (
        <div className="flex bg-gray-800 h-20 max-[768px]:hidden w-full shadow-lg">
            <div className="content flex flex-row justify-between items-center py-5 px-8 m-0 w-full text-[#94b9e7]">

                <div className="flex flex-row justify-between items-center gap-[22px]">
                    <Image src={Logo} alt="logo" className="w-24" />

                    {/* <Clock /> */}
                </div>


                <Input placeholder="بحث" className="w-96 rounded-full p-5 shadow-sm" />



                <div className="flex flex-row justify-between items-center gap-[30px]">
                    {/* <Theme /> */}

                    <div className="flex justify-between items-center gap-[22px]">
                        {/* <Messages /> */}

                        {/* <Notifications /> */}
                    </div>

                    <div className="flex flex-row items-center gap-3 text-base">

                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div>
                            <p className="text-sm font-semibold m-0">كريم العرنجي</p>
                            <span className="text-xs text-[#546881]">karemalaranji.com@</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;