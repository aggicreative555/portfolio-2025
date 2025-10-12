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
      <head>
        <meta name="color-scheme" content="light"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${ebGaramond.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
