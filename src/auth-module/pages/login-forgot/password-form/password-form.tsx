import React from "react";

import { FormContainer } from "src/auth-module/components";
import { TextField } from "src/shared-module/components/form";
import { Button } from "src/shared-module/components/ui";

import styles from "./password-form.module.css";

export const PasswordForm: React.FC = () => {
  return (
    <FormContainer title="Create new Password?" contentClassName={styles.content}>
      <div className={styles.field}>
        <TextField type="password" label="Password" placeholder="Password" />
        <TextField type="password" label="Confirm Password" placeholder="Password" />
      </div>
      <Button variant="primary" type="submit">
        Reset Password
      </Button>
    </FormContainer>
  );
};
