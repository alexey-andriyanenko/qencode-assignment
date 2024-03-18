import React, { useEffect } from "react";
import { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";

import { authApiService } from "src/auth-module/api";
import { FormContainer } from "src/auth-module/components";
import { TextField } from "src/shared-module/components/form";
import { Button } from "src/shared-module/components/ui";
import { TErrorResponse } from "src/shared-module/api";

import { resetPasswordFormResolver } from "./reset-passsword-form.validator";
import { IResetPasswordFormValues } from "./reset-password-form.types";
import styles from "./reset-password-form.module.css";

export const ResetPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IResetPasswordFormValues>({
    resolver: resetPasswordFormResolver,
    mode: "onSubmit",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    const token = searchParams.get("token");
    const secret = searchParams.get("secret");

    if (!token || !secret) navigate(-1);
  }, []);

  const handleValid = async (data: IResetPasswordFormValues) => {
    try {
      await authApiService.passwordSet({
        password: data.password,
        password_confirm: data.confirmPassword,
        token: searchParams.get("token") as string,
        secret: searchParams.get("secret") as string,
      });

      navigate("/login");
    } catch (e: unknown) {
      const isAxios = isAxiosError<TErrorResponse>(e);

      setError("password", {
        type: "manual",
        message: isAxios ? "Invalid token or secret" : "Something went wrong",
      });
    }
  };

  return (
    <FormContainer
      title="Create new Password?"
      contentClassName={styles.content}
      onSubmit={handleSubmit(handleValid)}
    >
      <div className={styles.field}>
        <TextField
          type="password"
          label="Password"
          placeholder="Password"
          isError={!!errors.password}
          errorMessage={errors.password?.message}
          {...register("password")}
        />
        <TextField
          type="password"
          label="Confirm Password"
          placeholder="Password"
          isError={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
      </div>
      <Button variant="primary" type="submit" loading={isSubmitting}>
        Reset Password
      </Button>
    </FormContainer>
  );
};
