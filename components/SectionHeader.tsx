import React from "react";
import { sectionHeader, sectionSubtitle } from "./sectionHeader.styles";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  size?: "md" | "lg";
  color?: "default" | "highlight";
  className?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align,
  size,
  color,
  className,
}) => {
    return (
        <div>
            <h2 className={`${sectionHeader({ align, size, color })} ${className}`}>
                {title}
            </h2>
            {subtitle && <p className={sectionSubtitle()}>{subtitle}</p>}
        </div>
    );
};
