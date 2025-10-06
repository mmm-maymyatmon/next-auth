"use server";

import { registerSchema } from "@/types/register-schema";
import { actionClient } from "./safe-action";

import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "..";
import { users } from "./../schema";
import { generateEmailVerificationToken } from "./tokens";

export const register = actionClient
  .inputSchema(registerSchema)
  .action(async ({ parsedInput: { name, email, password } }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);

    //check user exist
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      if (!existingUser.emailVerified) {
       const verificationToken = await generateEmailVerificationToken(email)
        return { success: "Email verification resent" };
      }
      return { error: "Email is already exists." };
    }
    // record user
    await db.insert(users).values({
      name,
      email,
      password: hashedPassword
    })

    //generate verification token for email expires in 30 minutes
    const verificationToken = await generateEmailVerificationToken(email)
    console.log(verificationToken)
    //create user
    //send verification email
    return { success: "Email verification sent" };
  });
