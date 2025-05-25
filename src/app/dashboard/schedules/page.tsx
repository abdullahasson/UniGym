// Next
import Link from "next/link"
// Shadcn/ui
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table"
// Mock Data
import { player } from "@/constants/mock"

export default function Requests() {
    return (
        <div>
            <div className="flex flex-col gap-3 mb-2">
                <div className="flex">
                    <h4>طلبات</h4>
                </div>
            </div>

            <Table>
                <TableHeader className="bg-gray-600/5 text-center">
                    <TableRow>
                        <TableHead className="font-bold text-center">اسم الاعب</TableHead>
                        <TableHead className="font-bold text-center">العمر</TableHead>
                        <TableHead className="font-bold text-center">المستوى</TableHead>
                        <TableHead className="font-bold text-center">الأشتراك</TableHead>
                        <TableHead className="font-bold text-center">خيارات التفاعل</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        player.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="text-center">{item.name}</TableCell>
                                <TableCell className="text-center">{item.bodyInfo.age}</TableCell>
                                <TableCell className="text-center">{item.bodyInfo.level}</TableCell>
                                <TableCell className="text-center">{item.subscriptions.receipt.operator ? <span className="text-green-600">مدفوع</span> : <span className="text-red-600">غير مدفوع</span>}</TableCell>
                                <TableCell className="text-center">
                                    <Link href={`grant/${item.id}`}>ايفاء</Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}