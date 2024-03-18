import { Validator } from "fluentvalidation-ts";

import { resolverFactory } from "src/shared-module/utils/resolver-factory";

import { IResetPasswordFormValues } from "./reset-password-form.types";

export class ResetPasswordFormValidator extends Validator<IResetPasswordFormValues> {
  constructor() {
    super();

    this.ruleFor("password").notEmpty().withMessage("This field is required");
    this.ruleFor("password")
      .must((value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value))
      .withMessage(
        "Password is not strong. Should be at least 8 characters long, contain at least one numeric, one uppercase letter and one lowercase letter",
      );
    this.ruleFor("password")
      .maxLength(20)
      .withMessage("Password must be at most 20 characters long");

    this.ruleFor("confirmPassword").notEmpty().withMessage("This field is required");
    this.ruleFor("confirmPassword")
      .must((value, model) => value === model.password)
      .withMessage("Passwords do not match")
      .when((model) => model.confirmPassword !== "");
  }
}

export const resetPasswordFormResolver = resolverFactory<IResetPasswordFormValues>(
  new ResetPasswordFormValidator(),
);
