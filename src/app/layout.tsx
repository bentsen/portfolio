import { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mikkel Bengtsen",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main className={lato.className + " bg-[#0d1117]"}>
          <div className={"sticky top-0 z-20"}>
            <Navbar />
          </div>
          {children}
          <div className="mt-10">
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
