import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  [
    "flex items-center justify-center gap-2 bg-red-500",
    "border border-transparent",
    "disabled:cursor-not-allowed disabled:bg-disabled-primary disabled:text-disabled-secondary",
  ],
  {
    variants: {
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size, ...restProps }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ size }))} {...restProps}>
        <span className="hidden disabled:text-disabled-secondary"></span>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
