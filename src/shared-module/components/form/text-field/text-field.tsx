import React from "react";

import { classNames } from "src/shared-module/utils";
import { IconButton } from "src/shared-module/components/ui";
import EyeIcon from "src/shared-module/images/eye.svg";

import styles from "./text-field.module.css";

export interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary";
  type?: "text" | "password";
  className?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({
  variant = "primary",
  type = "text",
  className,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const handleTogglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  return (
    <div className={styles.container}>
      <input
        className={classNames(styles.input, styles[variant], className)}
        type={type === "password" && isPasswordVisible ? "text" : type}
        {...props}
      />

      {type === "password" ? (
        <IconButton
          className={styles.eye}
          icon={<EyeIcon />}
          onClick={handleTogglePasswordVisibility}
        />
      ) : null}
    </div>
  );
};
