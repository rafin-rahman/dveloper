import "./globals.css";

export const metadata = {
  title: "Dveloper",
  description: "We build websites and web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
