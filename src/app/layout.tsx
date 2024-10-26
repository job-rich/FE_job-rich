import "@/app/globals.scss";

import { Providers } from "@/redux/provider";
import type { Metadata } from "next";
import localFont from "next/font/local";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "rich",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
