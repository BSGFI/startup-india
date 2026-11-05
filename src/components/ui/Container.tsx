
import type {
  HTMLAttributes,
  ElementType,
} from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  center?: boolean;
  section?: boolean;
  as?: ElementType;
}

const containerSizes: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export default function Container({
  children,
  className = "",
  size = "xl",
  center = false,
  section = false,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      {...props}
      className={[
        "container-custom",
        containerSizes[size],
        center ? "text-center" : "",
        section ? "py-16 md:py-20 lg:py-24" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
