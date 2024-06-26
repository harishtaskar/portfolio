import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer, Slide } from "react-toastify";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import "aos/dist/aos.js";
import "aos/dist/aos.css";
import logo from "@/assets/images/logo.png";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "harishtaskar.dev",
  description: "Harish Taskar, Portfolio of Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          limit={1}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
