import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { SessionProvider } from "@/lib/contexts/session";

export const metadata: Metadata = {
  title: "MindfulAI - AI-Powered Mental Health Support",
  description:
    "Compassionate AI therapy support available 24/7. Connect with Luna, your AI therapist, for stress relief, anxiety support, and emotional well-being.",
  keywords:
    "mental health, AI therapy, anxiety support, stress relief, emotional well-being, online therapy",
  authors: [{ name: "MindfulAI Team" }],
  openGraph: {
    title: "MindfulAI - AI-Powered Mental Health Support",
    description: "Compassionate AI therapy support available 24/7",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
