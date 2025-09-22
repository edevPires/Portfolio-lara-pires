import React from "react";
import clsx from "clsx";
import { useTypingAnimation } from "../../hooks/useTypingAnimation";

interface HeroTextProps {
    className?: string;
    label: string;
    speed?: number;
    delay?: number;
}

const HeroText: React.FC<HeroTextProps> = ({ className, label, speed = 120, delay = 0 }) => {
  const { displayText } = useTypingAnimation({ text: label, speed, delay });

  return (
    <h1 className={clsx("font-mortend-bold font-extra text-7xl lg:text-9xl h-fit w-fit text-end text-secondary select-none", className)}>
      {displayText}
    </h1>
  );
};

export default HeroText;