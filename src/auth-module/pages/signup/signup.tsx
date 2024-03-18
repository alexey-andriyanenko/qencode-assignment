import React from "react";
import { useNavigate } from "react-router";

import { LOGIN_ROUTE } from "src/core-module/routes/routes.config";
import { FormContainer, PageContainer } from "src/auth-module/components";
import { Button } from "src/shared-module/components/ui";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate(LOGIN_ROUTE.path);

  return (
    <PageContainer>
      <FormContainer title="Sign Up">
        <Button variant="primary" onClick={handleLogin}>
          Back to Login
        </Button>
      </FormContainer>
    </PageContainer>
  );
};

export default Signup;
