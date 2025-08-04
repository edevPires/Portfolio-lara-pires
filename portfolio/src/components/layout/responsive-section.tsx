import React from "react";
import type { ReactNode } from "react";
import clsx from "clsx";

interface ResponsiveSectionProps {
    children: ReactNode;
    className?: string;
}

const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({ children, className }) => (
  <section className={clsx(`h-fit ${className}`)}>
      {children}
  </section>
);

export default ResponsiveSection;