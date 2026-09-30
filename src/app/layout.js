import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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
        
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}