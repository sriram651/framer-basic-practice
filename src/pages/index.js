import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import Lenis from '@studio-freight/lenis'
import ScrollMotion from "@/components/ScrollMotion/ScrollMotion";
import StaggerList from "@/components/StaggerList/StaggerList";
import { useEffect } from "react";
import AnimatedBox from "@/components/AnimatedBox/AnimatedBox";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoResize: true,
      duration: 2.5,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return (
    <div className="w-full min-h-screen text-black">
      <Hero />
      <Intro />
      <StaggerList />
      <ScrollMotion />
      <AnimatedBox />
    </div>
  );
}
