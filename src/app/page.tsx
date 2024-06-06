import "./index.scss";

import Hero from "@/components/hero/Hero";
import {
  GradientOne,
  GradientThree,
  GradientTwo,
} from "@/components/layout/Gradients";
import {
  Shape01,
  Shape02,
  Shape03,
  Shape04,
  Shape05,
  Shape06,
  Shape07,
  Shape08,
} from "@/components/shapes/Shapes";

export default function Home() {
  return (
    <main className="min-h-[200vh]">
      <GradientOne />
      {/* <Shape01 className="w-[70px]" />
      <Shape02 className="w-[150px]" />
      <Shape03 className="w-[200px]" />
      <Shape04 />
      <Shape05 />
      <Shape06 />
      <Shape07 />
      <Shape08 /> */}
      <Hero className="z-[990]" />
      <GradientTwo />
      <GradientThree />
    </main>
  );
}
