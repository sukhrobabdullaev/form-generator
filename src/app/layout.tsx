import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { getServerSession } from "next-auth";
import SessionProvider from "@/components/providers/session-provider";

const inter = Roboto({ subsets: ["latin"], weight: ["100", "300", "400"] });

export const metadata: Metadata = {
  title: "Form generator",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <main className="flex items-center flex-col h-screen">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
