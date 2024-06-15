import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import AppBar_1 from "@/components/appBar/appBar";
import Footer from "@/components/footer/footer";
import { NextUIProvider } from "@nextui-org/react";
import NewNav from "@/components/navigation/newNav/newNav";




const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "Sharecare",
  description: "Sharing is Caring.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <NextUIProvider>
          <NewNav />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
