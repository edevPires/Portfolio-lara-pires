import React from "react";
import clsx from "clsx";
import { useTypingAnimation } from "../../hooks/useTypingAnimation";

interface HeroTextSmallProps {
    className?: string;
    label: string;
    speed?: number;
    delay?: number;
}

const HeroTextSmall: React.FC<HeroTextSmallProps> = ({ className, label, speed = 50, delay = 800 }) => {
  const { displayText } = useTypingAnimation({ text: label, speed, delay });

  return (
    <h2 className={clsx("font-mortend-bold font-extra text-xl lg:text-4xl text-center text-primary w-fit select-none", className)}>
      {displayText}
      <span className="animate-pulse">|</span>
    </h2>
  );
};

export default HeroTextSmall;