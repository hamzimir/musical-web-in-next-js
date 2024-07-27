import FeaturedCourses from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestinonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen  items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        {/* <h1 className="text-center text-3xl font-bold text-white">
          Musical Compony Website
        </h1> */}
        <Herosection /> 
        <FeaturedCourses />
        <WhyChooseUs />
        <TestinonialCards />
        <UpcomingWebinars />
        <Instructors />
        <Footer />
      </main>
    </>
  );
}
