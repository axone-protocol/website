import "app/globals.css";
import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import localFont from "next/font/local";
import HeaderBar from "components/headerBar";

const courrierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courrier-prime",
});
const SixtyFour = localFont({
  src: "../fonts/Sixtyfour-Regular-Variable.ttf",
  weight: "400",
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
        <HeaderBar />
        <div className="container mt-5">{children}</div>
      </body>
    </html>
  );
}
