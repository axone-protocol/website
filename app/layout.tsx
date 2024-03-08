import "app/styles/globals.css";
import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import localFont from "next/font/local";
import FaviconLinks from "app/components/faviconLinks";
import HeaderBar from "app/components/headerBar";
import Footer from "app/components/footer";

const courrierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courrier-prime",
});
const SixtyFour = localFont({
  src: "../fonts/Sixtyfour-Regular-Variable.ttf",
  variable: "--font-sixty-four",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${courrierPrime.variable} ${SixtyFour.variable}`}
    >
      <body className={`${courrierPrime.className}`}>
        <FaviconLinks />
        <HeaderBar />
        <div className="container mb-12 mt-24 space-y-20 md:mt-48">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
