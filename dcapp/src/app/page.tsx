import { Hero } from "@/components/Hero";
import { HowWork } from "@/components/HowWork";
import { Team } from "@/components/Team";
import { Welcome } from "@/components/Welcome";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-3">
        <Hero />
        <Welcome />
        <HowWork />
        <Team />
      </main>
    </>
  );
}
