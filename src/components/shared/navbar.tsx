"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1> {session?.user?.name} </h1>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </>
    );
  }

  return (
    <>
      <Button onClick={() => signIn()}>Sig in</Button>
    </>
  );
}

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <h2 className="font-bold text-lg">Logo</h2>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
          <AuthButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const links = [
  {
    href: "/how-it-works",
    label: "How It Works",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/docs",
    label: "Docs",
  },
  {
    href: "/auth/signin",
    label: "Login",
  },
  {
    href: "/auth/signup",
    label: "Sign Up",
  },
];
