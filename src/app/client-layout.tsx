"use client"

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
    <Navbar/>
    {children}
    <Footer/>
    </div>
     
  );
}
