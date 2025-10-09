import { EB_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  weight: '400',
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: '400',
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
