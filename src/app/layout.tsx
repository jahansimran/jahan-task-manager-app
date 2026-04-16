import Providers from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
        <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
