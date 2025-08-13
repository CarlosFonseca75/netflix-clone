import type { ReactNode, ButtonHTMLAttributes as BtnAttrs } from "react";
import classNames from "classnames";
import styles from "./styles/Button.module.scss";

interface ButtonProps extends BtnAttrs<HTMLButtonElement> {
  children: ReactNode;
  variant?: "fill" | "outline";
  className?: string;
  isLoading?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = "fill",
    className,
    isLoading,
    disabled,
    ...rest
  } = props;

  return (
    <button
      className={classNames(
        {
          [styles.button]: true,
          [styles[`button--${variant}`]]: true,
          [styles["button--blocked"]]: isLoading || disabled,
        },
        className
      )}
      {...rest}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export { Button };
