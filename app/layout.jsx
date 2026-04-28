import "./globals.css";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata = {
  title: "ListQik | 独立房地产营销平台",
  description:
    "ListQik 是独立房地产营销平台。更快发布房源，更高效营销，更自信成交。"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className={`${dmSans.variable} ${playfairDisplay.variable}`}>{children}</body>
    </html>
  );
}
