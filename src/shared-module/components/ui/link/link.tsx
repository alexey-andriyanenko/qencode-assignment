import React, { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

import { classNames } from "src/shared-module/utils";

import styles from "./link.module.css";

export interface ILinkProps {
  to: string;
  className?: string;
}

export const Link: React.FC<PropsWithChildren<ILinkProps>> = ({ to, className, children }) => {
  return (
    <RouterLink to={to} className={classNames(styles.link, className)}>
      {children}
    </RouterLink>
  );
};
