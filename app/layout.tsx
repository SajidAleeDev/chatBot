import "./globals.css";

import type { Metadata } from "next";
import SessionProvider from "@/Components/SessionProvider";

import ResponsiveDrawer from "@/Components/Drawer";
import { getServerSession } from "next-auth";

import Login from "@/Components/Login";
import { AuthOptions } from "@/utils/authOptions";

export const metadata: Metadata = {
  title: "Chat Gpt",
  description: "Generated by Sajid Ali",
};

// Define the root layout function with GetServerSidePropsContext as the argument type
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(AuthOptions);
  console.log(session, "session");

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <ResponsiveDrawer>{children}</ResponsiveDrawer>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
