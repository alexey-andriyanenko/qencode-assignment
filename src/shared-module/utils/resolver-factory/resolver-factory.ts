import { FieldErrors, FieldValues, Resolver } from "react-hook-form";
import { Validator } from "fluentvalidation-ts";

export function resolverFactory<TFieldValues extends FieldValues>(
  validator: Validator<TFieldValues>,
): Resolver<TFieldValues> {
  return async (values: TFieldValues) => {
    const result = validator.validate(values);
    const errors: FieldErrors<TFieldValues> = {};

    for (const name in result) {
      const message = result[name];
      if (!message) continue;

      // @ts-ignore
      errors[name] = {
        type: "manual",
        message,
      };
    }

    return {
      values,
      errors,
    };
  };
}
