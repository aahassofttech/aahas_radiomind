import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
}

interface ButtonAsButton extends BaseProps {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm shadow-blue-600/20",
  secondary:
    "bg-white text-primary border border-primary hover:bg-surface-blue",
  ghost: "bg-transparent text-ink hover:bg-surface",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(BASE, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
