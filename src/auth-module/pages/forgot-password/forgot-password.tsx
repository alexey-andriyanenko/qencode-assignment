import React from "react";

import { PageContainer } from "src/auth-module/components";

import { ForgotPasswordForm } from "./forgot-password-form";

const ForgotPassword: React.FC = () => {
  return (
    <PageContainer>
      <ForgotPasswordForm />
    </PageContainer>
  );
};

export default ForgotPassword;
