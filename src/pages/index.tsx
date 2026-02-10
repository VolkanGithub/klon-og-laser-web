import Head from 'next/head';
import LaserBackground from '@/components/LaserBackground';
import Navbar from '@/components/Navbar';
import { Package, Wrench, Cpu, Zap } from 'lucide-react';

export default function Home() {

  const servicesList = [
    { icon: Package, title: "N 1000 , M 800 , M 500 YEDEK PARÇALARI" },
    { icon: Wrench, title: "AOM MODULATOR GARANTİLİ TAMİRİ VE KALİBRASYONU" },
    { icon: Cpu, title: "RF SÜRÜCÜLER GARANTİLİ TAMİRİ VE KALİBRASYONU" },
    { icon: Zap, title: "STOĞUMUZDAN ADRESİNİZE TESLİM OPTİK ELEMANLAR" }
  ];

  return (
    <>
      <Head>
        <title>OG LASER | Teknik Danışmanlık</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Navbar />

      {/* ÇÖZÜM MANTIĞI:
        1. 'min-h-screen': Sayfa en az ekran kadar olsun ama içerik taşarsa uzasın.
        2. 'h-auto': Mobilde yükseklik serbest (scroll açılır).
        3. 'lg:h-screen': Sadece büyük ekranda (Laptop/PC) yükseklik sabitlenir.
        4. 'overflow-y-auto': Mobilde dikey scroll serbest.
        5. 'lg:overflow-hidden': Büyük ekranda scroll gizli.
        6. 'pt-[290px]': Mobilde Navbar çok yer kapladığı için yukarıdan güvenli boşluk.
      */}
      <main className="relative w-full bg-[#050505] text-white flex flex-col font-sans 
        min-h-screen h-auto lg:h-screen 
        overflow-y-auto lg:overflow-hidden
        pt-[290px] md:pt-[240px] lg:pt-[200px] 
        pb-10 lg:pb-0">

        {/* Arkaplan (Fixed kalarak sayfa kayarken sabit durması sağlandı) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <LaserBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
        </div>

        {/* ORTALAYICI ALAN 
           justify-start: Mobilde içerik yukarıdan başlar, aşağı doğru akar.
           lg:justify-center: Masaüstünde içerik dikeyde ortalanır.
        */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-start lg:justify-center gap-6 md:gap-10 lg:gap-12 flex-grow">

          {/* --- HERO KARTI --- */}
          <div className="relative w-full bg-white/[0.03] border border-white/10 p-6 md:p-8 lg:p-12 backdrop-blur-md rounded-2xl shadow-2xl text-center flex flex-col items-center justify-center gap-3 md:gap-5 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500 laser-card-hover shrink-0">

            <span className="laser-beam opacity-60"></span>
            <span className="laser-beam opacity-60 animation-delay-500"></span>

            {/* BAŞLIK */}
            <h1 className="font-orbitron font-black tracking-tighter leading-tight uppercase text-[#FF4D00] drop-shadow-[0_0_25px_rgba(255,77,0,0.6)] z-10 relative
              text-3xl xs:text-4xl md:text-5xl lg:text-7xl">
              GÜÇ VE HASSASİYET
            </h1>

            {/* ALT BAŞLIK */}
            <p className="font-bold tracking-[0.3em] text-white uppercase z-10 relative
              text-[10px] md:text-sm lg:text-xl drop-shadow-md">
              Lazer Gravür Çözümleri & Teknik Danışmanlık
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

        </div>

        {/* Alt boşluk (Mobilde rahat kaydırma için) */}
        <div className="shrink-0 h-8 lg:hidden"></div>

      </main>
    </>
  );
}