import { Cinzel, Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css'; // This line fixes the CSS integration

// Load professional typography using Next.js font optimization
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
});

export const metadata = {
  title: 'Vaikuntham | Heritage Luxury on Lake Pichola, Udaipur',
  description:
    'Experience the timeless luxury of Rajasthan at Vaikuntham, a century-old heritage sanctuary.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${jost.variable}`}>
        {children}
      </body>
    </html>
  );
}
