import "@/styles/globals.css";
import "nprogress/nprogress.css"; 
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { Orbitron } from 'next/font/google'; // Fontu import ettik

// Font ayarlarını yapıyoruz
const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '900'],
  variable: '--font-orbitron' 
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
    // Font değişkenini ana sarmalayıcıya ekledik
    <div className={`${orbitron.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}