import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/global/navbar";
const font = DM_Sans({ subsets: ["latin"] });
import "../components/markdown-parser.css";

export const metadata: Metadata = {
  title: "Raymond Chi",
  description: "Raymond (Lei) Chi's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar />
          <div className="pt-16"> 
            {children}
          </div>
        </ThemeProvider>
        </body>
    </html>
  );
}
