import 'styles/globals.css';
import type { Metadata } from 'next';
import { Courier_Prime } from 'next/font/google';
import localFont from 'next/font/local';
import FaviconLinks from 'components/faviconLinks';
import Footer from 'components/footer';
import HeaderBar from 'components/headerBar';

const courrierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courrier-prime',
});
const SixtyFour = localFont({
  src: '../fonts/Sixtyfour-Regular-Variable.ttf',
  variable: '--font-sixty-four',
});

export const metadata: Metadata = {
  title: 'Axone, the Orchestration Layer for AI',
  description:
    'Axone is the universal protocol to connect, share and monetize any resources in the AI stack',
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${courrierPrime.variable} ${SixtyFour.variable}`}
    >
      <body className={`${courrierPrime.className}`}>
        <FaviconLinks />
        <HeaderBar />
        <div className='container mb-12 mt-24 space-y-20 md:mt-48'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
