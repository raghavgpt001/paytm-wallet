import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Providers} from "../providers"
import { AppbarClient } from "../components/AppbarClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paytm Wallet",
  description: "Basic wallet app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="w-screen h-screen bg-[#adcce0]">
            <AppbarClient/>
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
