import AuthForm from "@/components/auth/auth-form";
import React from "react";

const Login = () => {
  return (
    <AuthForm
      formTitle="Login to your account"
      showProvider={true}
      footerLabel="Don't have an account?"
      footerHref="/auth/register"
    >
      <div>Login</div>
    </AuthForm>
  );
};

export default Login;
