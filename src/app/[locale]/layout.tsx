import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Body from "@/components/body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body
        className={inter.className}
        style={{ backgroundColor: 'black' }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="flex flex-col min-h-screen  mx-auto">
            <Header />
            <Body />
            <div className="flex-grow mt-20">{children}</div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
