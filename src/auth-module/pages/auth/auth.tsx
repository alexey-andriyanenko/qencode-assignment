import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";

import { useAuthStore } from "src/auth-module/store";

import { LoginForm } from "./login-form";

import styles from "./auth.module.css";

const Auth: React.FC = observer(() => {
  const navigate = useNavigate();
  const authStore = useAuthStore();

  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
});

export default Auth;
