import React from "react";
import { sectionHeader, sectionSubtitle } from "./sectionHeader.styles";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  size?: "md" | "lg";
  color?: "default" | "highlight";
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align,
  size,
  color,
}) => {
  return (
    <div>
      <h2 className={sectionHeader({ align, size, color })}>{title}</h2>
      {subtitle && <p className={sectionSubtitle()}>{subtitle}</p>}
    </div>
  );
};
