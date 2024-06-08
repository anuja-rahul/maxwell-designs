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
  Shape82,
  Shape109,
  Shape68,
  Shape48,
  Shape52,
  Custom01
} from "./shapes/Shapes";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface AnimatedTitleProps {
  letterArray: string[];
  length: number;
  className?: string;
  start: number;
}

const shapeArray = [
  <Shape01 key={0} className="w-[80px] bg-transparent" />,
  <Shape02 key={1} className="mt-4 w-[80px] bg-transparent" />,
  <Shape03 key={2} className="w-[80px] bg-transparent" />,
  <Shape04 key={3} className="mb-6 w-[80px] bg-transparent" />,
  <Shape05 key={4} className="mt-12 w-[80px] bg-transparent" />,
  <Shape06 key={5} className="w-[80px] bg-transparent" />,
  <Shape07 key={6} className="mb-6 w-[80px] bg-transparent" />,
  <Shape08 key={7} className=" mt-4w-[80px] bg-transparent" />,
  <Shape09 key={8} className="w-[80px] bg-transparent" />,
  <Shape10 key={9} className="w-[80px] bg-transparent" />,
  <Shape82 key={82} className="w-[80px] bg-transparent" />,
  <Shape109 key={109} className="w-[60px] bg-transparent" />,
  <Shape68 key={68} className="w-[70px] bg-transparent" />,
  <Shape48 key={48} className="w-[80px] bg-transparent" />,
  <Shape52 key={52} className="w-[90px] bg-transparent" />,
  <Custom01 key={130} className="w-[90px] bg-transparent" />,
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
  start,
  className,
}: AnimatedTitleProps) {
  // const generatedArray = generateNumbers(9)
  // const shapesIdx = GetRandomItemsFromArray(generatedArray, length);

  useGSAP(() => {
    const tl = gsap.timeline();
    const shapeTLThree = gsap.timeline();
    const secondRow = gsap.timeline();
    const shapeTLTwo = gsap.timeline({ repeat: -1, delay: 0.7 });
    const tlI = gsap.timeline({ repeat: -1 });

    gsap.fromTo(
      ".shape__2",
      {
        opacity: 0,
        x: -300,
        rotateZ: 360,
      },
      { opacity: 1, rotateZ: 0, x: 0, duration: 0.6 },
    );

    gsap.to(".shape__2", {
      delay: 0.6,
      y: -100,
      duration: 0.5,
      ease: "power2.inOut",
    });

    shapeTLTwo.to(".shape__2", {
      rotateZ: "90deg",
      duration: 0.3,
      delay: 0.8,
      ease: "power2.inOut",
    });
    shapeTLTwo.to(".shape__2", {
      rotateZ: "180deg",
      duration: 0.3,
      delay: 1,
      ease: "power2.inOut",
    });

    shapeTLThree.fromTo(
      ".shape__3",
      {
        x: -150,
        rotateZ: "-180deg",
        opacity: 1,
      },
      {
        x: 0,
        rotateZ: "0deg",
        duration: 1.2,
        ease: "power2.inOut",
      },
    );

    // shapeTLThree.fromTo(
    //   ".shape__3",
    //   { opacity: 1, scale: 1 },
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     duration: 0.7,
    //     delay: 0,
    //     rotateZ: "180deg",
    //     ease: "power2.inOut",
    //   },
    // );
    shapeTLThree.to(".shape__3", {
      opacity: 0,
      duration: 0.8,
      y: 100,
      rotateZ: "180deg",
      ease: "power2.inOut",
    });

    tl.fromTo(
      ".title-letter__0",
      { scale: 1, opacity: 0, rotateY: "-90deg" },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        delay: 0,
        rotateY: "0deg",
        ease: "power2.inOut",
      },
    ),
      tl.fromTo(
        ".title-letter__1",
        { opacity: 0, y: 100 },
        { opacity: 1, duration: 0.8, delay: 0, y: 0, ease: "power2.inOut" },
      ),
      tl.fromTo(
        ".title-letter__2",
        { opacity: 0, y: -100 },
        { opacity: 1, delay: 0, duration: 0.8, y: 0, ease: "power2.inOut" },
      ),
      tl.fromTo(
        ".title-letter__5",
        { opacity: 1, x: -170 },
        { opacity: 1, delay: 0, duration: 0.6, x: 0, ease: "power2.inOut" },
      ),
      gsap.fromTo(
        ".title-letter__3",
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          delay: 2.4,
          duration: 0.8,
          x: 0,

          ease: "power2.inOut",
        },
      ),
      gsap.fromTo(
        ".title-letter__4",
        { opacity: 0, y: -150 },
        {
          opacity: 1,
          delay: 2.5,
          duration: 0.8,
          y: 0,

          ease: "power2.inOut",
        },
      ),
      tlI.fromTo(
        ".title-letter__3",
        { rotateX: "-360deg" },
        {
          delay: 5,
          opacity: 1,
          duration: 1,
          rotateX: "0deg",
          ease: "power2.inOut",
        },
      ),
      secondRow.fromTo(
        ".title-letter__7",
        { opacity: 0, scale: 0, rotateZ: "-180deg" },
        {
          opacity: 1,
          scale: 1,
          delay: 1,
          duration: 0.8,
          rotateZ: "0deg",
          ease: "power2.inOut",
        },
      ),
      secondRow.fromTo(
        ".title-letter__8",
        { opacity: 0, scale: 0, rotateZ: "-180deg" },
        {
          opacity: 1,
          scale: 1,
          
          duration: 0.8,
          rotateZ: "0deg",
          ease: "power2.inOut",
        },
      ),
      gsap.fromTo(
        ".shape__7",
        { opacity: 1, rotateZ: "-180deg" },
        { opacity: 0, scale: 0, delay: 0.4, duration: 0.8, rotateZ: "180deg" },
      );
  }, []);

  return (
    <div
      className={clsx(
        className,
        "animated-title flex flex-row flex-wrap text-balance bg-transparent p-0 text-[12rem] font-semibold leading-[14rem]",
      )}
    >
      {letterArray.map((letter, idx) => (
        <div key={idx}>
          <div>
            {idx + start == 2 ? (
              <Shape06 className={`shape__3 absolute top-16 bg-transparent`} />
            ) : (
              ""
            )}

            {idx + start == 1 ? (
              <Custom01 className={`shape__2 absolute top-16 bg-transparent`} />
            ) : (
              ""
            )}
            {idx + start == 7 && (
              <Shape52 className={`shape__7 absolute top-16 bg-transparent`} />
            )}
          </div>

          <h1
            key={idx}
            className={`title-letter__${idx + start} opacity-1 z-[6] bg-transparent text-info/90 opacity-0`}
          >
            <motion.span
              className="relative overflow-hidden bg-transparent"
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
              className={`title-shape__${idx + start} absolute top-16 z-[1] flex h-24 w-auto overflow-visible bg-transparent`}
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
              {shapeArray[idx + start]}
            </motion.div>
          </h1>
        </div>
      ))}
    </div>
  );
}
