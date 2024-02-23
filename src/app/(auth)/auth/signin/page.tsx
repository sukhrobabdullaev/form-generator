"use client";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import React from "react";

const SignIn = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Button onClick={() => signIn("google")}>Sigin In with Google</Button>
      <h1> {session?.user?.name} </h1>
    </div>
  );
};

export default SignIn;
