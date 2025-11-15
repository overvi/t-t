import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "ghost" | "helper" | "link";

interface ButtonOwnProps {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: ButtonVariant;
  className?: string;
  children?: ReactNode;
}

type AsProp<C extends ElementType> = {
  as?: C;
};

type PolymorphicComponentProps<C extends ElementType, Props = object> = Props &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof (Props & AsProp<C>)>;

export type ButtonProps<C extends ElementType = "button"> =
  PolymorphicComponentProps<C, ButtonOwnProps>;

const Button = <C extends ElementType = "button">({
  as,
  icon,
  iconPosition = "left",
  variant = "solid",
  className,
  children,
  ...rest
}: ButtonProps<C>) => {
  const Component = as || "button";

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-[1.125rem] p-4 cursor-pointer transition-colors";

  const variantClasses: Record<ButtonVariant, string> = {
    solid: "bg-aqua-haze border border-athens-gray text-black",
    outline: "bg-transparent border border-athens-gray text-black",
    ghost: "bg-transparent border border-transparent text-black",
    helper: " bg-cerulean font-bold py-4.5 text-white ",
    link: "text-cerulean p-0! bg-transparent border border-transparent",
  };

  const finalClassName = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={finalClassName} {...rest}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Component>
  );
};

export default Button;
