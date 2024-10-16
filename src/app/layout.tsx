import { Inter } from "next/font/google";
import { ThemeProvider } from "./_components/theme-provider";
import { ThemeSwitcher } from "./_components/theme-switcher";
import Footer from "./_components/footer";
import { cn } from "../lib/utils";  // Updated import path
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Morningstar Developments Blog",
  description: "A blog for Morningstar Developments using Next.js and Markdown",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <header className="container mx-auto py-6">
              <ThemeSwitcher />
            </header>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
