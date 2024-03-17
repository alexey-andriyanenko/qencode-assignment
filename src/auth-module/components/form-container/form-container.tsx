import React, { PropsWithChildren } from "react";

import LogoIcon from "src/auth-module/images/logo.svg";

import styles from "./form-container.module.css";

export interface IFormContainer {
  title: string;
}

export const FormContainer: React.FC<PropsWithChildren<IFormContainer>> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <LogoIcon className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
