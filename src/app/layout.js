import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/component/Navber/Navber";
import Footer from "@/component/Footer/Footer";
import { ButtonProvider } from "./context/ButtonContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "keen-keeper",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-base-200 flex-col">
        <ButtonProvider>

          <Navber></Navber>
          {children}
          <Footer></Footer>
        </ButtonProvider>

      </body>
    </html>
  );
}
