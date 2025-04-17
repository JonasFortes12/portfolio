import type { Metadata } from "next";
import "./globals.css";
import { Sora } from 'next/font/google'

export const metadata: Metadata = {
  title: "Jonas Fortes Dev",
  description: "Portfolio de Jonas Fortes",
};



const myfont = Sora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sora',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="pt-br"> 
      <body
        className={`${myfont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
