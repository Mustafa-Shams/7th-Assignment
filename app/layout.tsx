
import "./globals.css";

import Navbar from "./components/navbar/page"
import Footer from "./components/footer/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  
    
      >
        
        <Navbar></Navbar>
        
        
      {children}
 <div className="self-end justify-end items-end align-end text-end">
        <Footer></Footer>
       </div>
      </body>
    </html>
  );
}
