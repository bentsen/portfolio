import '../styles/globals.css'
import Navbar from "./navbar";
import Footer from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <div className={"sticky top-0 z-20"}>
          <Navbar/>
        </div>
          {children}
          <Footer/>
      </body>
    </html>
  )
}
