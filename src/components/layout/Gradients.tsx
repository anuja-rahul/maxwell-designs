export function GradientOne() {
  return (
    //   <div className="gradient-one absolute h-full w-screen"></div>

    <div className="flex flex-col items-end justify-center opacity-[0.4]">
      <div className="gradient-one z-1 absolute aspect-square w-2/5 rounded-full blur-xl" />
    </div>
  );
}

export function GradientTwo() {
  return (
    // top-full
    <div className="flex flex-col items-start justify-center opacity-[0.4]">
      <div className="gradient-two z-1 absolute aspect-square w-2/5 rounded-full blur-xl bottom-4" />
    </div>
  );
}

export function GradientThree() {
  return (
    // top-full
    <div className="flex flex-col items-end justify-center opacity-[0.4] w-screen h-full">
      <div className="gradient-three z-1 absolute aspect-square w-2/5 rounded-full blur-xl top-full" />
    </div>
  );
}
