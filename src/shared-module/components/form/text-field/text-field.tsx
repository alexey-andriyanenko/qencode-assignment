import React, { forwardRef, useId } from "react";

import { classNames } from "src/shared-module/utils";
import { IconButton } from "src/shared-module/components/ui";
import EyeIcon from "src/shared-module/images/eye.svg";

import styles from "./text-field.module.css";

export interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary";
  type?: "text" | "password";
  className?: string;
  label?: string;
  isError?: boolean;
  errorMessage?: string;
}

export const TextField = forwardRef<null, ITextFieldProps>(
  (
    { variant = "primary", type = "text", className, label, isError, errorMessage, ...props },
    ref,
  ) => {
    const id = useId();
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const handleTogglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsPasswordVisible((prev) => !prev);
    };

    return (
      <div className={styles.container}>
        {label ? (
          <label htmlFor={props.id ?? id} className={styles.label}>
            {label}
          </label>
        ) : null}
        <div className={styles.inputContainer}>
          <input
            {...props}
            ref={ref}
            className={classNames(styles.input, styles[variant], className, {
              [styles.error]: isError,
            })}
            type={type === "password" && isPasswordVisible ? "text" : type}
            id={props.id ?? id}
          />

          {type === "password" ? (
            <IconButton
              className={styles.eyeBtn}
              icon={<EyeIcon className={styles.eyeIcon} />}
              onClick={handleTogglePasswordVisibility}
            />
          ) : null}
        </div>

        {isError && errorMessage ? <div className={styles.errorMessage}>{errorMessage}</div> : null}
      </div>
    );
  },
);
