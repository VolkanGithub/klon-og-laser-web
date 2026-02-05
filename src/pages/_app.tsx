import "@/styles/globals.css";
import "nprogress/nprogress.css"; 
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { Orbitron, Inter } from 'next/font/google'; // Inter'i de ekledik

// 1. Marka Fontu (Teknolojik)
const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
});

// 2. Okuma Fontu (Temiz)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    // İki font değişkenini de (variable) buraya ekledik
    <div className={`${orbitron.variable} ${inter.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}