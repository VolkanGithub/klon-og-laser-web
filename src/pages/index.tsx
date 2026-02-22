import Head from 'next/head';
import LaserBackground from '@/components/LaserBackground';
import Navbar from '@/components/Navbar';
import { Package, Wrench, Cpu, Zap } from 'lucide-react';

export default function Home() {

  // BURAYI KENDİ VERCEL LİNKİNLE DEĞİŞTİRMEYİ UNUTMA
  const siteUrl = "https://www.oglaser.com";

  const servicesList = [
    { icon: Package, title: "N 1000 , M 800 , M 500 YEDEK PARÇALARI" },
    { icon: Wrench, title: "AOM MODULATOR GARANTİLİ TAMİRİ VE KALİBRASYONU" },
    { icon: Cpu, title: "RF SÜRÜCÜLER GARANTİLİ TAMİRİ VE KALİBRASYONU" },
    { icon: Zap, title: "STOĞUMUZDAN ADRESİNİZE TESLİM OPTİK ELEMANLAR" }
  ];

  return (
    <>
      <Head>
        <title>OG LASER | Güç ve Hassasiyet</title>
        {/* Favicon tanımlamaları */}
        <link rel="icon" type="image/png" href="/logo.png?v=2" />
        <link rel="apple-touch-icon" href="/logo.png?v=2" />

        <meta name="google-site-verification" content="xMOsx0W1IZA9sx-rgqcSqrvJvGzSaF3H5Y4enR6V4nY" />
        <meta name="description" content="Lazer Gravür Çözümleri & Teknik Danışmanlık. AOM Modülatör, RF Sürücü Tamiri ve Yedek Parça Hizmetleri." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        {/* --- SEO & OPEN GRAPH (WHATSAPP/SOSYAL MEDYA) --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="OG LASER | Güç ve Hassasiyet" />
        <meta property="og:description" content="Lazer sektöründe teknik danışmanlık, tamir ve yedek parça çözümleri." />

        {/* Kapak Görseli Yolu (Public klasöründeki og-image.jpg) */}
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OG LASER | Güç ve Hassasiyet" />
        <meta name="twitter:description" content="Lazer sektöründe teknik danışmanlık, tamir ve yedek parça çözümleri." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative w-full bg-[#050505] text-white flex flex-col font-sans 
        min-h-screen h-auto lg:h-screen 
        overflow-y-auto lg:overflow-hidden
        pt-[290px] md:pt-[240px] lg:pt-[200px] 
        pb-10 lg:pb-0">

        <div className="fixed inset-0 z-0 pointer-events-none">
          <LaserBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-start lg:justify-center gap-6 md:gap-10 lg:gap-12 flex-grow">

          {/* --- HERO KARTI --- */}
          <div className="relative w-full bg-white/[0.03] border border-white/10 p-6 md:p-8 lg:p-12 backdrop-blur-md rounded-2xl shadow-2xl text-center flex flex-col items-center justify-center gap-3 md:gap-5 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500 laser-card-hover shrink-0">

            {/* DÜZELTME: 4 Kenar için 4 adet Lazer Işını eklendi */}
            <span className="laser-beam opacity-60"></span>
            <span className="laser-beam opacity-60"></span>
            <span className="laser-beam opacity-60"></span>
            <span className="laser-beam opacity-60"></span>

            <h1 className="font-orbitron font-black tracking-tighter leading-tight uppercase text-[#FF4D00] drop-shadow-[0_0_25px_rgba(255,77,0,0.6)] z-10 relative
              text-3xl xs:text-4xl md:text-5xl lg:text-7xl">
              GÜÇ VE HASSASİYET
            </h1>

            <p className="font-bold tracking-[0.3em] text-white uppercase z-10 relative
              text-[10px] md:text-sm lg:text-xl drop-shadow-md">
              Lazer Gravür Çözümlerİ & Teknİk Danışmanlık
            </p>
          </div>

          {/* --- HİZMETLER --- */}
          <div id="hizmetler" className="w-full bg-white/[0.03] border border-white/10 p-4 md:p-8 backdrop-blur-md rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 md:gap-y-6 md:gap-x-12">
              {servicesList.map((service, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-5 group cursor-default p-2 rounded-xl hover:bg-white/5 transition-all">
                  <div className="p-2 md:p-3 rounded-xl bg-[#FF4D00]/10 text-[#FF4D00] group-hover:bg-[#FF4D00] group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,77,0,0.2)] flex-shrink-0">
                    <service.icon className="w-5 h-5 md:w-8 md:h-8" strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-gray-200 uppercase tracking-wider group-hover:text-white transition-colors leading-tight
                    text-[10px] md:text-sm lg:text-lg">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* --- İLETİŞİM FORMU --- */}
        </div>

        <div className="shrink-0 h-8 lg:hidden"></div>

      </main>
    </>
  );
}