import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nivdent | Oral and Dental Health Center, Umraniye - Istanbul",
  description: "Nivdent Oral and Dental Health Center in Umraniye, Istanbul. We offer implant, smile design, and aesthetic dentistry services with our modern technology and expert physician staff.",
  icons: {
    icon: "/nivdent-favicon.webp",
    apple: "/nivdent-favicon.webp",
  },
  verification: {
    google: "0urqT0-WjcVS4wfk5h-QgPl7O4wb7YMoiDZNu9hEqV4",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSidebar from "@/components/FloatingSidebar";
import MobileNavbar from "@/components/MobileNavbar";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFRBDPF2');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PZ5Z6V82BG" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PZ5Z6V82BG');
  gtag('config', 'AW-10943299248');`,
          }}
        />
        {/* End Google Analytics */}
        <SchemaMarkup />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body
        className={`${manrope.variable} bg-background-light text-slate-900 font-display antialiased min-h-screen flex flex-col`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFRBDPF2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="flex-grow">{children}</main>
        <FloatingSidebar />
        <MobileNavbar />
        <Footer />
      </body>
    </html>
  );
}
