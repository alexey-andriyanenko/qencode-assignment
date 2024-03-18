import React from "react";
import { observer } from "mobx-react-lite";

import { PageContainer } from "src/auth-module/components";

import { LoginForm } from "./login-form";

const Login: React.FC = observer(() => {
  return (
    <PageContainer>
      <LoginForm />
    </PageContainer>
  );
});

export default Login;
