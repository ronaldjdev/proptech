import { Hero } from "@/components/sections/Hero";
import { HowWork } from "@/components/sections/HowWork";
import { Team } from "@/components/sections/Team";
import { Testimonial } from "@/components/sections/Testimonial";
import { Welcome } from "@/components/sections/Welcome";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-3">
        <Hero />
        <Welcome />
        <HowWork />
        <Team />
        <Testimonial/>
      </main>
    </>
  );
}
