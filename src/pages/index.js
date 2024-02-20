import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";

export default function Home() {
  return (
    <div className="w-full min-h-screen text-black">
      <Hero />
      <Intro />
    </div>
  );
}
