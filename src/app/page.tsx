// Next
// import Link from "next/link"
// Sections
import Hero from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import ClearExercises from "@/sections/ClearExercises";
import DietPlan from "@/sections/DietPlan";
import Measurements from "@/sections/Measurements";
import Join from "@/sections/Join"
import Stars from "@/sections/Stars";
// Components
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <ClearExercises />
      <DietPlan />
      <Measurements />
      <Stars />
      <Join />
      <Footer />



      {/* هذا القسم يوجد فقط عن عرض المنتج و يتم حذف اثناء التخصيص للزبون */}
      {/* <section className="unified-section">
        <h2 className="title">انتهى قسم الموقع يمكنك الاطلاع على لوحة التحكم</h2>
        <div className="flex items-center justify-end">
          <Link href="/dashboard" className="cta-luxury">
            لوحة التحكم
          </Link>
        </div>
      </section> */}
    </div>
  );
}
