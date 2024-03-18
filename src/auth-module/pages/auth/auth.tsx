import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

import { useAuthStore } from "src/auth-module/store";
import { PageContainer } from "src/auth-module/components";

import { LoginForm } from "./login-form";

const Auth: React.FC = observer(() => {
  const navigate = useNavigate();
  const authStore = useAuthStore();

  return (
    <PageContainer>
      <LoginForm />
    </PageContainer>
  );
});

export default Auth;
