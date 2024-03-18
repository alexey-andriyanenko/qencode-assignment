import React from "react";

import { PageContainer } from "src/auth-module/components";

import { EmailForm } from "./email-form";
import { PasswordForm } from "./password-form";

const LoginForgot: React.FC = () => {
  return (
    <PageContainer>
      <PasswordForm />
    </PageContainer>
  );
};

export default LoginForgot;
