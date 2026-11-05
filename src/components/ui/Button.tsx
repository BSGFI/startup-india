
import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { Loader2 } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "cyan"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#438F32] text-white hover:bg-[#347429] shadow-sm hover:shadow-lg hover:shadow-green-900/10",

  secondary:
    "border border-[#DCEFD6] bg-white text-[#333333] hover:border-[#60BA45] hover:bg-[#F0F9ED]",

  cyan:
    "bg-[#0085AD] text-white hover:bg-[#006F91] shadow-sm hover:shadow-lg hover:shadow-cyan-900/10",

  ghost:
    "bg-transparent text-[#438F32] hover:bg-[#F0F9ED]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export default function Button({
  className = "",
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={[
        "inline-flex items-center justify-center gap-2",
        "rounded-xl font-bold",
        "transition-all duration-300",
        "hover:-translate-y-0.5",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[#60BA45]",
        "focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "disabled:hover:translate-y-0",
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {loading ? (
        <Loader2
          size={18}
          className="animate-spin"
          aria-hidden="true"
        />
      ) : (
        leftIcon
      )}

      <span>{children}</span>

      {!loading && rightIcon}
    </button>
  );
}
