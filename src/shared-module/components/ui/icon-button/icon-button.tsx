import React from "react";

import { classNames } from "src/shared-module/utils";

import styles from "./icon-button.module.css";

export interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const IconButton: React.FC<IIconButtonProps> = ({ icon, className, ...props }) => {
  return (
    <button className={classNames(styles.container, className)} {...props}>
      {icon}
    </button>
  );
};
