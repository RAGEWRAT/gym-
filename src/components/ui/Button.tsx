"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonButtonProps = {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonProps =
  | (CommonButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (CommonButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

const variantStyles = {
  default: "bg-brandRed text-white hover:bg-brandRed/90",
  outline: "border border-offwhite text-offwhite hover:bg-white/10",
  ghost: "bg-transparent text-offwhite hover:bg-white/10",
  secondary: "bg-white/10 text-offwhite border border-white/20 hover:bg-white/20",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", href, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandRed focus-visible:ring-offset-2",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
