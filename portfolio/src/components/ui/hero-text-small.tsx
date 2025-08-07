import React from "react";
import clsx from "clsx";

interface HeroTextSmallProps {
    className?: string;
    label: string;
}

const HeroTextSmall: React.FC<HeroTextSmallProps> = ({ className, label }) => (
  <h2 className={clsx("font-bahnchrift font-extra text-xl lg:text-5xl text-center text-secondary w-fit select-none", className)}>
    {label}
  </h2>
);

export default HeroTextSmall;