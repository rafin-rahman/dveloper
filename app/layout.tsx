import "./globals.css";
import Providers from "@/app/providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { siteConfig } from "@/config/site";

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
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
