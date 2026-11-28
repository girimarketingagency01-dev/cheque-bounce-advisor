
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CBAChatWidget from "@/components/CBAChatWidget";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Cheque Bounce Advisor",
  description:
    "Professional assistance for cheque bounce, cheque recovery and cheque misuse matters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3637604095206596"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

 {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17978580373"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17978580373');
          `}
        </Script>

        <Header />

        <main>{children}</main>

        <Footer />

        <CBAChatWidget />
      </body>
    </html>
  );
}
