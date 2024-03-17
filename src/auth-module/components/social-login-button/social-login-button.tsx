import React from "react";
import { Button, IButtonProps } from "src/shared-module/components/ui";

import GoogleIcon from "src/auth-module/images/google.svg";
import GitHubIcon from "src/auth-module/images/github.svg";

import styles from "./social-login-button.module.css";

export interface ISocialLoginButton extends Omit<IButtonProps, "variant"> {
  variant: "google" | "github";
}

export const SocialLoginButton: React.FC<ISocialLoginButton> = ({ variant, ...props }) => {
  return (
    <Button className={styles.container} {...props}>
      {variant === "google" ? <GoogleIcon /> : <GitHubIcon />}
      {variant === "google" ? "Google" : "GitHub"}
    </Button>
  );
};
