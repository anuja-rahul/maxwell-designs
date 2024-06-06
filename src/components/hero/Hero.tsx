import AnimatedTile from "../AnimatedTitle";

export default function Hero() {
  const letterArrayOne: string[] = ["D", "e", "s", "i", "g", "n"];
  const letterArrayTwo: string[] = ["a", "n", "y", "t", "h", "i", "n", "g"];

  return (
    <section className="flex min-h-screen flex-col flex-wrap items-center justify-center h-screen">
      <AnimatedTile letterArray={letterArrayOne} length={6} className="bg-transparent absolute left-[10%] top-[20%] p-0"/>
      <AnimatedTile letterArray={letterArrayTwo} length={8} className="ml-40 bg-transparent absolute left-[30%] top-[55%] p-0" />
    </section>
  );
}
