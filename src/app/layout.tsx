import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./client-layout";
import { Cormorant, Poppins } from "next/font/google"

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
})

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Strand Connect - Your Salon in a Click | Book Stylists in Europe",
  description:
    "Strand Connect is the new generation hair salon. Find and book professional hairstylists across the EU for all your hair needs, from braids to haircuts. Look beautiful, feel confident.",
  keywords: [
    "hairstylist app Europe",
    "African hairstylists EU",
    "hair salon booking app",
    "haircut app",
    "braiding services Europe",
    "black hair salon Germany",
    "mobile hairstylist",
    "on-demand hair services",
    "beauty app",
    "hair appointments Poland",
  ],
  openGraph: {
    title: "Strand Connect - The Ultimate Hair Salon Platform",
    description:
      "Connecting you with professional hairstylists across Italy, Poland, Germany, and the Netherlands. Book your next appointment with ease, elegance, and confidence.",
    type: "website",
    url: "https://strandconnect.com?v=3",
    siteName: "Strand Connect",
    images: [
      {
        url: "https://res.cloudinary.com/dqhdtwbx5/image/upload/v1757903568/og_n5vrpe.png?v=3",
        width: 1200,
        height: 630,
        alt: "Strand Connect - Hair Stylist Booking App for Europe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strand Connect - Find Your Next Hairstyle in Europe",
    description:
      "Strand Connect is the e-commerce platform that connects hairstylists and customers across the EU. We are revolutionizing the way hair salons work. ",
    images: ["https://res.cloudinary.com/dqhdtwbx5/image/upload/v1757903568/og_n5vrpe.png?v=3"],
  },
  alternates: {
    canonical: "https://strandconnect.com?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable}`}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
