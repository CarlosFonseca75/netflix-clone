import type { ReactNode, HTMLAttributes as Attrs } from "react";

interface TextProps extends Attrs<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "p" | "span";
  children: ReactNode;
  className?: string;
  weight?: number | string;
  fontSize?: string | number;
}

const Text = ({
  variant = "p",
  className = "",
  children,
  weight,
  fontSize,
  ...rest
}: TextProps) => {
  const Tag = variant;

  const styles: React.CSSProperties = {
    fontWeight: weight,
    fontSize,
  };

  return (
    <Tag className={className} style={styles} {...rest}>
      {children}
    </Tag>
  );
};

export { Text };
