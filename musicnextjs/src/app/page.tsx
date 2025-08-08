import HeroSection from "@/components/HeroSection";
import FeaturedCourse from '@/components/FeaturedCourse'

export default function Home() {
  return(
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <h1 className="text-2xl text-center">chai with code</h1>
      <HeroSection/>
      <FeaturedCourse/>
    </main>
  )
}