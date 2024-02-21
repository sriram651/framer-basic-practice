import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import StaggerList from "@/components/StaggerList/StaggerList";

export default function Home() {
  return (
    <div className="w-full min-h-screen text-black">
      <Hero />
      <Intro />
      <StaggerList />
    </div>
  );
}
