import "@/styles/globals.css";
// 1. NProgress CSS'ini ekliyoruz (Çubuğun stili)
import "nprogress/nprogress.css"; 

import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import contentData from "@/data/content.json";

// 2. Gerekli kütüphaneleri çağırıyoruz
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

// NProgress Ayarları (Dönen topu kapatıyoruz, sadece çubuk olsun)
NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Yönlendirme başladığında çubuğu başlat
    const handleStart = () => NProgress.start();
    
    // Yönlendirme bittiğinde veya hata verdiğinde çubuğu bitir
    const handleStop = () => NProgress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    // Temizlik (Component unmount olduğunda dinleyicileri kaldır)
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <Layout navLinks={contentData.navigation}>
      <Component {...pageProps} />
    </Layout>
  );
}