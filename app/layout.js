import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'BR Marketing Agency',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700;800&family=Alexandria:wght@400;600;800&family=Poppins:wght@300;400;600;700&family=Cairo:wght@400;600;700;800&family=Montserrat:wght@300;500;700;800&family=Marcellus&family=Amiri:wght@400;700&family=Cormorant+Garamond:wght@300;500;700&family=Tajawal:wght@300;500;800&family=Bodoni+Moda:wght@400;500;700&display=swap" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
