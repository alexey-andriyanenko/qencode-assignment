import React, { PropsWithChildren } from "react";

import { classNames } from "src/shared-module/utils";
import LogoIcon from "src/auth-module/images/logo.svg";

import styles from "./form-container.module.css";

export interface IFormContainer extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string;
  contentClassName?: string;
}

export const FormContainer: React.FC<PropsWithChildren<IFormContainer>> = ({
  title,
  children,
  className,
  contentClassName,
  ...props
}) => {
  return (
    <form className={classNames(styles.container, className)} {...props}>
      <LogoIcon className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <div className={classNames(styles.content, contentClassName)}>{children}</div>
    </form>
  );
};
