
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const notoSerifBengali = Noto_Serif_Bengali({
 
  subsets: ["latin","bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর | Bazar Dor",
  description:
    "বাংলাদেশের প্রতিদিনের বাজারদর, পণ্যের মূল্য পরিবর্তন ও বাজারভিত্তিক দামের তথ্য এক জায়গায়।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {

  return (
    <html lang="bn"
     data-theme="light"
    >
      <body
        className={`${notoSerifBengali.className} flex min-h-screen flex-col antialiased`}
      >
        <Navbar />

        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
