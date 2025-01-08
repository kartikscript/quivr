import type { Metadata } from "next";
import {Cinzel,Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  style:'normal',
  weight:["400",'500','600','700','800','900'],
  subsets:['latin']  
});
const roboto = Roboto({
  variable: "--font-roboto",
  style:'normal',
  weight:['500','400','700',"100",'300',],
  subsets:['latin']  
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
    <html lang="en">
      <body
        className={`${cinzel.variable} ${roboto.variable} font-roboto antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
