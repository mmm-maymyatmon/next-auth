"use client";
import AuthForm from "@/components/auth/auth-form";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { registerSchema } from "@/types/register-schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Register = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values)
  }
  return (
    <AuthForm
      formTitle="Create an account "
      showProvider={true}
      footerLabel="Already have an account"
      footerHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
           <div>
          <FormField name="name" control={form.control} render={({field}) => (<FormItem>
            <FormLabel htmlFor="name">
              UserName
            </FormLabel>
            <FormControl>
              <Input id="name" placeholder="Hla Hla" {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>)} />
          <FormField name="email" control={form.control} render={({field}) => (<FormItem>
            <FormLabel className="pt-4">
              Email
            </FormLabel>
            <FormControl>
              <Input placeholder="user@gmail.com" {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>)} />
          <FormField name="password" control={form.control} render={({field}) => (<FormItem>
            <FormLabel className="pt-4">
              Password
            </FormLabel>
            <FormControl>
              <Input type="password" placeholder="********" {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>)} />
          <div className="flex justify-end mt-2">
                <Link
                  href="/auth/reset"
                  className="text-sm font-medium text-indigo-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
        </div>
        <Button type="submit" className="w-full">Register</Button>
        </form>
        
     </Form>
    </AuthForm>
  );
};

export default Register;
