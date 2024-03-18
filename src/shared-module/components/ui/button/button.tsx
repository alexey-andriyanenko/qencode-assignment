import React, { PropsWithChildren } from "react";

import { classNames } from "src/shared-module/utils";

import styles from "./button.module.css";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary";
  loading?: boolean;
}

export const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  variant = "default",
  children,
  className,
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      className={classNames(styles.container, styles[variant], className, {
        [styles.disabled]: disabled || loading,
      })}
      {...props}
    >
      {loading ? <div className={styles.loader} /> : null}
      {children}
    </button>
  );
};
