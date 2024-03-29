import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "dashboard for users who can manage their own fileds",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
