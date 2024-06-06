import clsx from "clsx";
import AnimatedTile from "../AnimatedTitle";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  const letterArray: string[] = [
    "D",
    "e",
    "s",
    "i",
    "g",
    "n",
    " ",
    "a",
    "n",
    "y",
    "t",
    "h",
    "i",
    "n",
    "g",
  ];
  const letterArrayOne: string[] = ["D", "e", "s", "i", "g", "n"];
  const letterArrayTwo: string[] = ["a", "n", "y", "t", "h", "i", "n", "g"];

  return (
    <section
      className={clsx(
        className,
        "flex h-screen min-h-screen flex-col flex-wrap items-center justify-center",
      )}
    >
      <AnimatedTile
        letterArray={letterArrayOne}
        length={6}
        start={0}
        className="absolute left-[10%] top-[20%] bg-transparent p-0"
      />
      <AnimatedTile
        letterArray={letterArrayTwo}
        length={8}
        start={7}
        className="absolute left-[30%] top-[55%] ml-40 bg-transparent p-0"
      />
    </section>
  );
}
