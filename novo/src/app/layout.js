import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import AppBar_1 from "@/components/appBar/appBar";
import Footer from "@/components/footer/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sharecare",
  description: "Sharing is Caring.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <AppBar_1 />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
