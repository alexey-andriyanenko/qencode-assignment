import React from "react";

import { TextField } from "src/shared-module/components/form";
import { Button } from "src/shared-module/components/ui";
import { FormContainer } from "src/auth-module/components";

import styles from "./email-form.module.css";

export const EmailForm: React.FC = () => {
  return (
    <FormContainer title="Forgot Password?" contentClassName={styles.content}>
      <div className={styles.gapped}>
        <TextField placeholder="Enter your email" />
        <Button variant="primary">Send</Button>
      </div>
      <Button variant="secondary">Cancel</Button>
    </FormContainer>
  );
};
