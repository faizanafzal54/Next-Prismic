type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

export function Heading({
  as: Comp = "h2",
  className,
  children,
  size = "sm",
}: HeadingProps) {
  return (
    <Comp
      className={className}
    >
      {children}
    </Comp>
  );
}