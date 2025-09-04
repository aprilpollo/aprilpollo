import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | april pollo",
    default: "april pollo",
  },
  description: "Personal web blog & profile",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <footer className="border-t h-40 z-50 relative">
            <div className="container max-w-7xl mx-auto flex items-center h-full justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} April Pollo.
                </p>
                <div className="flex gap-2">
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    Blog
                  </Link>
                </div>
              </div>
              <ModeToggle />
            </div>
          </footer>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
