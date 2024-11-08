import "@/app/globals.scss";
import AuthContext from "@/context/AuthContext";

import { Providers } from "@/redux/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "rich",
  description: "",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <Providers>
            <div>{children}</div>
          </Providers>
        </AuthContext>
      </body>
    </html>
  );
}
