import React, { PropsWithChildren } from "react";

import { classNames } from "src/shared-module/utils";

import styles from "./page-container.module.css";

export interface IPageContainerProps {
  className?: string;
}

export const PageContainer: React.FC<PropsWithChildren<IPageContainerProps>> = ({
  className,
  children,
}) => {
  return <div className={classNames(styles.container, className)}>{children}</div>;
};
