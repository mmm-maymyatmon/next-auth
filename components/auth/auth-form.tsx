import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProviderLogin from "./provider-login";
import AuthFooter from "./auth-footer";

type AuthFormProps = {
  children: React.ReactNode;
  formTitle: string;
  showProvider?: boolean;
  footerLabel: string;
  footerHref: string;
};

const AuthForm = ({
  children,
  formTitle,
  showProvider = false,
  footerLabel,
  footerHref,
}: AuthFormProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            {formTitle}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">{children}</CardContent>

        {showProvider && (
          <CardContent>
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            <ProviderLogin />
          </CardContent>
        )}

        <CardFooter className="flex justify-center">
          <AuthFooter footerLabel={footerLabel} footerHref={footerHref} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
