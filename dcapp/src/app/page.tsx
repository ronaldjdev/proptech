import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowWork } from "@/components/sections/HowWork";
import { Team } from "@/components/sections/Team";
import { Testimonial } from "@/components/sections/Testimonial";
import { Welcome } from "@/components/sections/Welcome";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-3">
        <div className="flex flex-col items-center max-w-[1970px]">

        <Hero />
        <Welcome />
        <HowWork />
        <Team />
        <Testimonial />
        <Contact />
        </div>
      </main>
    </>
  );
}
