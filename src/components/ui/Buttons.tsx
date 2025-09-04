import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" };
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };
type Props = (ButtonProps | AnchorProps) & { className?: string };

function cx(...c: (string | false | undefined)[]) { 
  return c.filter(Boolean).join(" "); 
}

export function ButtonPrimary({ className, as = "button", ...rest }: Props) {
  const cls = cx(
    "inline-flex items-center justify-center rounded-xl px-5 py-3",
    "bg-brand-royal text-white font-semibold",
    "hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-royal/40",
    "transition",
    className
  );
  
  if (as === "a") {
    const { ...anchorProps } = rest as AnchorProps;
    return <a className={cls} {...anchorProps} />;
  }
  
  const { ...buttonProps } = rest as ButtonProps;
  return <button className={cls} {...buttonProps} />;
}

export function ButtonSecondary({ className, as = "button", ...rest }: Props) {
  const cls = cx(
    "inline-flex items-center justify-center rounded-xl px-5 py-3",
    "border-2 border-brand-charcoal text-brand-charcoal bg-white",
    "hover:border-brand-royal hover:text-brand-royal",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/30",
    "transition",
    className
  );
  
  if (as === "a") {
    const { ...anchorProps } = rest as AnchorProps;
    return <a className={cls} {...anchorProps} />;
  }
  
  const { ...buttonProps } = rest as ButtonProps;
  return <button className={cls} {...buttonProps} />;
}

export function ButtonTertiaryLink({ className, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = cx(
    "inline-flex items-center gap-2 underline underline-offset-2",
    "text-brand-royal hover:decoration-2",
    className
  );
  return <a className={cls} {...rest} />;
}