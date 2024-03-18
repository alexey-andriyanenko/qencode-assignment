import React from "react";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { authApiService } from "src/auth-module/api";
import { TErrorResponse } from "src/shared-module/api";
import { TextField } from "src/shared-module/components/form";
import { Button } from "src/shared-module/components/ui";
import { FormContainer } from "src/auth-module/components";
import { EMAIL_PATTERN } from "src/shared-module/constants";
import { LOGIN_ROUTE, RESET_PASSWORD_ROUTE } from "src/core-module/routes/routes.config";

import styles from "./forgot-password-form.module.css";

interface IForgotPasswordFormValues {
  email: string;
}

export const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IForgotPasswordFormValues>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });
  const handleCancel = () => navigate(LOGIN_ROUTE.path);

  const handleValid = async (data: IForgotPasswordFormValues) => {
    try {
      await authApiService.passwordReset({
        email: data.email,
        redirect_url: "http://localhost:9000/login/reset",
      });

      navigate(RESET_PASSWORD_ROUTE.path);
    } catch (e: unknown) {
      const isAxios = isAxiosError<TErrorResponse>(e);

      setError("email", {
        type: "manual",
        message: isAxios ? "Email not found" : "Something went wrong",
      });
    }
  };

  return (
    <FormContainer
      title="Forgot Password?"
      contentClassName={styles.content}
      onSubmit={handleSubmit(handleValid)}
    >
      <div className={styles.gapped}>
        <TextField
          placeholder="Enter your email"
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
        <Button type="submit" variant="primary" loading={isSubmitting}>
          Send
        </Button>
      </div>
      <Button variant="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </FormContainer>
  );
};
