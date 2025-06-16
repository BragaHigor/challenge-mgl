import "../styles/globals.css";
import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import { ArticlesProvider } from "@/context/ArticlesContext";
import { Header } from "@/components/sections/Header/Header";
import { Footer } from "@/components/sections/Footer/Footer";

export const metadata: Metadata = {
   title: {
      default: "Página Inicial – Blog Paixões & Sabores",
      template: "%s | Blog",
   },
   description:
      "Explore experiências incríveis em arte, música e lifestyle. Conecte-se com quem ama o que você ama.",
   metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000/"),
   openGraph: {
      title: "Blog – Paixões & Sabores",
      description:
         "Explore experiências incríveis em arte, música e lifestyle. Conecte-se com quem ama o que você ama.",
      url: "/",
      siteName: "Blog",
      images: [
         {
            url: "/assets/footer/logo.svg",
            width: 1200,
            height: 630,
            alt: "Blog logo",
         },
      ],
      locale: "pt_BR",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      site: "@Blog",
      creator: "@Blog",
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet": -1,
      },
   },
   icons: {
      icon: "/assets/favicon/logo.svg",
      other: [{ rel: "manifest", url: "/blog.webmanifest" }],
   },
};

export const viewport = "width=device-width, initial-scale=1";

const poppins = Poppins({
   variable: "--font-poppins",
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   display: "swap",
});
const caveat = Caveat({
   variable: "--font-caveat",
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   display: "swap",
});

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-BR">
         <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="anonymous"
            />
            <link rel="preload" as="style" />
         </head>
         <body className={`${poppins.variable} ${caveat.variable} antialiased`}>
            <ArticlesProvider>
               <Header />
               {children}
               <Footer />
            </ArticlesProvider>
         </body>
      </html>
   );
}
