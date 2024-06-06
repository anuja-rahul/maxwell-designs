"use client";

import clsx from "clsx";
import {
  Shape01,
  Shape02,
  Shape03,
  Shape04,
  Shape05,
  Shape06,
  Shape07,
  Shape08,
  Shape09,
  Shape10,
} from "./shapes/Shapes";
import { motion } from "framer-motion";

interface AnimatedTitleProps {
  letterArray: string[];
  length: number;
  className?: string;
}

const shapeArray = [
  <Shape01 key={0} className="w-[80px] bg-transparent" />,
  <Shape02 key={1} className="mt-4 w-[80px] bg-transparent" />,
  <Shape03 key={2} className="w-[80px] bg-transparent" />,
  <Shape04 key={3} className="w-[80px] bg-transparent" />,
  <Shape05 key={4} className="mt-12 w-[80px] bg-transparent" />,
  <Shape06 key={5} className="w-[80px] bg-transparent" />,
  <Shape07 key={6} className="w-[80px] bg-transparent" />,
  <Shape08 key={7} className="w-[80px] bg-transparent" />,
  <Shape09 key={8} className="w-[80px] bg-transparent" />,
  <Shape10 key={9} className="w-[80px] bg-transparent" />,
];

// export function GetRandomItemsFromArray(arr: number[], count: number) {
//   const shuffledArray = arr.sort(() => Math.random() - 0.5);
//   const selectedItems = shuffledArray.slice(0, count);
//   return selectedItems;
// }

// function generateNumbers(end: number): number[] {
//   const result: number[] = [];
//   for (let i = 0; i < end; i++) {
//     result.push(i);
//   }
//   return result;
// }

export default function AnimatedTile({
  letterArray,
  length,
  className,
}: AnimatedTitleProps) {
  // const generatedArray = generateNumbers(9)
  // const shapesIdx = GetRandomItemsFromArray(generatedArray, length);

  return (
    <div
      className={clsx(
        className,
        "flex flex-row flex-wrap text-balance bg-transparent text-[12rem] font-extrabold leading-[14rem]",
      )}
    >
      {letterArray.map((letter, idx) => (
        <h1
          key={idx}
          className={`title-letter__${idx} z-[6] bg-transparent text-info/90`}
        >
          <motion.span
            className="relative bg-transparent"
            // variants={{
            //   initialLetter: {
            //     rotateX: "0deg",
            //   },
            //   flip: {
            //     rotateX: "180deg",
            //   },
            // }}
            // initial="initialLetter"
            // whileHover="flip"
          >
            {letter}
          </motion.span>
          <motion.div
            className={`title-shape__${idx} absolute top-16 z-[1] flex w-auto bg-transparent`}
            variants={{
              initial: {
                opacity: 0,
                scale: 1,
              },
              appear: {
                opacity: 1,
                scale: 1.5,
                y: 0,
              },
              jump: {
                y: -40,
                rotateZ: "90deg",
              },
            }}
            initial="initial"
            whileHover="appear"
            whileTap="jump"
          >
            {shapeArray[idx]}
          </motion.div>
        </h1>
      ))}
    </div>
  );
}
