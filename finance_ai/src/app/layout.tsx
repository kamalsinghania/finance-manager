import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KamalSinghania - AI Investment Copilot",
  description: "Make informed financial decisions with AI-powered insight",
};

// Retrieve the Copilot API key from environment variables
const copilotApiKey = process.env.NEXT_PUBLIC_COPILOTKIT_API_KEY;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Conditionally wrap with CopilotKit if the API key is available */}
        {copilotApiKey ? (
          <CopilotKit publicApiKey={copilotApiKey}>{children}</CopilotKit>
        ) : (
          <>{children}</>
        )}
        {children}
      </body>
    </html>
  );
}
