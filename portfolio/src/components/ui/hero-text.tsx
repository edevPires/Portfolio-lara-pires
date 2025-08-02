import React from "react";
import clsx from "clsx";

interface HeroTextProps {
    className?: string;
    label: string;
}

const HeroText: React.FC<HeroTextProps> = ({ className, label }) => (
  <h1 className={clsx("font-secondary-bold font-extra text-8xl lg:text-9xl h-fit w-fit text-end", className)}>
    {label}
  </h1>
);

export default HeroText;