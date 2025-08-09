import React from "react";
import type { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

interface ResponsiveSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({ children, className, ...rest }) => (
  <section className={clsx(`h-fit ${className}`)} {...rest}>
    {children}
  </section>
);

export default ResponsiveSection;