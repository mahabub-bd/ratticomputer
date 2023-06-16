import { Footer, Navbar } from "./components";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";


export const metadata = {
  title: "রাশিদা আহম্মেদ কারিগরি ট্রেনিং ইনস্টিটিউট",
  description: "রাশিদা আহম্মেদ কারিগরি ট্রেনিং ইনস্টিটিউট",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};
export default RootLayout;
