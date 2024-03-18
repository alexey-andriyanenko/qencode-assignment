import React from "react";

import { PageContainer } from "src/auth-module/components";

import { ResetPasswordForm } from "./reset-password-form";

const ResetPassword: React.FC = () => {
  return (
    <PageContainer>
      <ResetPasswordForm />
    </PageContainer>
  );
};

export default ResetPassword;
