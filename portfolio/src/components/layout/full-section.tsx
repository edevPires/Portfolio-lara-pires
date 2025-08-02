import React from "react";
import type { ReactNode } from "react";
import clsx from "clsx";

interface FullSectionProps {
  children: ReactNode;
	className?: string;
}

const FullSection: React.FC<FullSectionProps> = ({ children, className }) => (
  <section className={clsx(`h-dvh ${className}`)}>
	  {children}
  </section>
);

export default FullSection;