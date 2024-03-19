import React from "react";
import { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { TErrorResponse } from "src/shared-module/api";
import { Button, Link } from "src/shared-module/components/ui";
import { TextField } from "src/shared-module/components/form";
import { FormContainer, SocialLoginButton } from "src/auth-module/components";
import { useAuthStore } from "src/auth-module/store";
import { EMAIL_PATTERN } from "src/shared-module/constants";
import {
  FORGOT_PASSWORD_ROUTE,
  HOME_ROUTE,
  SIGNUP_ROUTE,
} from "src/core-module/routes/routes.config";

import { ILoginFormValues } from "./login-form.types";
import styles from "./login-form.module.css";

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const userStore = useAuthStore();
  const {
    register,
    handleSubmit,
    setError,
    getFieldState,
    formState: { errors, isSubmitting },
  } = useForm<ILoginFormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const fieldState = getFieldState("email");
  const canShowPassword =
    fieldState.isDirty && (!fieldState.invalid || fieldState.error?.type === "manual");

  const handleValid = async (data: ILoginFormValues) => {
    try {
      await userStore.login(data);
      navigate(HOME_ROUTE.path);
    } catch (e: unknown) {
      const isAxios = isAxiosError<TErrorResponse>(e);
      const message = isAxios ? "Invalid email or password" : "Something went wrong";

      setError("email", {
        type: "manual",
        message,
      });

      setError("password", {
        type: "manual",
        message,
      });
    }
  };

  return (
    <FormContainer
      title="Log in to your account"
      contentClassName={styles.content}
      onSubmit={handleSubmit(handleValid)}
    >
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
          placeholder="Work email"
          isError={!!errors.email}
          errorMessage={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_PATTERN,
              message: "Email must be valid",
            },
          })}
        />

        {canShowPassword ? (
          <div className={styles.password}>
            <TextField
              required
              placeholder="Enter password"
              type="password"
              id="password"
              isError={!!errors.password}
              errorMessage={errors.password?.message}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be at most 20 characters long",
                },
              })}
            />

            <div className={styles.forgotPassword}>
              <Link to={FORGOT_PASSWORD_ROUTE.path} className={styles.link}>
                Forgot password?
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      <div className={styles.submit}>
        <Button type="submit" variant="primary" data-testid="submit" loading={isSubmitting}>
          Log In
        </Button>

        <div className={styles.signup}>
          <span>Is your company new to Qencode?</span>
          &nbsp;
          <Link to={SIGNUP_ROUTE.path} className={styles.link}>
            Sign up
          </Link>
        </div>
      </div>
    </FormContainer>
  );
};
