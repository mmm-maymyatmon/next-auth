"use client";

import React from "react";
import { Button } from "../button";
import { Session } from "next-auth";
import { LogIn } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

type UserButtonProps = {
  user?: Session["user"];
};

const UserButton = ({ user }: UserButtonProps) => {
  return (
    <div>
      {user?.email && (
        <span className="mr-4">Welcome, {user.name ?? user.email}</span>
      )}
      {user?.email ? (
        <Button variant="destructive" onClick={() => signOut()}>
          Logout
        </Button>
      ) : (
        <Button asChild variant="secondary">
          <Link href={"/auth/login"} className="flex items-center">
            <LogIn className="mr-2" size={16} /> Sign In
          </Link>
        </Button>
      )}
    </div>
  );
};

export default UserButton;
