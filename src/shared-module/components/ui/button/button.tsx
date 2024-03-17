import React, { PropsWithChildren } from "react";

import { classNames } from "src/shared-module/utils";

import styles from "./button.module.css";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary";
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  variant = "default",
  children,
  className,
  ...props
}) => {
  return (
    <button className={classNames(styles.container, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
