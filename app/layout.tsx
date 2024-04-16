import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export interface ProvidersProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: ProvidersProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
