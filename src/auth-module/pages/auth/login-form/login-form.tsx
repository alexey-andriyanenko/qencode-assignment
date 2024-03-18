import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { Button } from "src/shared-module/components/ui";
import { TextField } from "src/shared-module/components/form";
import { FormContainer, SocialLoginButton } from "src/auth-module/components";
import { useAuthStore } from "src/auth-module/store";
import { EMAIL_PATTERN } from "src/shared-module/constants";

import styles from "./login-form.module.css";
import { ILoginFormValues } from "./login-form.types";

export const LoginForm = () => {
  const navigate = useNavigate();
  const userStore = useAuthStore();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ILoginFormValues>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      await userStore.login(data);
    } catch (error) {
      if (error instanceof XMLHttpRequest) {
        if (error.status === 401) {
          setError("email", {
            type: "manual",
            message: "Invalid email or password",
          });
          setError("password", {
            type: "manual",
          });

          return;
        }
      }

      console.error(error);
    }
  };

  return (
    <FormContainer title="Log in to your account" contentClassName={styles.content}>
      <div className={styles.socials}>
        <SocialLoginButton variant="github" />
        <SocialLoginButton variant="google" />
      </div>

      <div className={styles.divider}>
        <div className={styles.line} />
        <span>OR</span>
        <div className={styles.line} />
      </div>

      <div className={styles.fields}>
        <TextField
          required
          id="email"
          data-testid="email"
          placeholder="Work email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_PATTERN,
              message: "Email must be valid",
            },
          })}
        />

        <div className={styles.password}>
          <TextField
            required
            placeholder="Enter password"
            type="password"
            id="password"
            data-testid="password"
            {...register("password", {
              required: "Password is required",
              max: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />

          <div className={styles.forgotPassword}>
            <div className={styles.link}>Forgot password?</div>
          </div>
        </div>
      </div>

      <div className={styles.submit}>
        <Button type="submit" variant="primary" data-testid="submit" disabled={isSubmitting}>
          Log In
        </Button>

        <div className={styles.signup}>
          <span>Is your company new to Qencode?</span>
          &nbsp;
          <div className={styles.link} onClick={() => navigate("/auth/signup")}>
            Sign up
          </div>
        </div>
      </div>
    </FormContainer>
  );
};