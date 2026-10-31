import Script from 'next/script';
import './globals.css';

const SITE = 'https://www.bragency.cc';
const TITLE = 'BR Marketing Agency';
const DESCRIPTION = 'BR frames what people notice, feel and do, then turns that response into a measurable result. Built for Results.';
const OG_IMAGE = { url: '/og-image.jpg', width: 1200, height: 630, alt: 'BR Marketing Agency. Built for Results.' };

export const metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE,
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
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
