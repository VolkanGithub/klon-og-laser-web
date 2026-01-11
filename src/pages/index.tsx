import { useState, MouseEvent } from 'react';
import Head from 'next/head';
import LaserBackground from '@/components/LaserBackground';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 8; 
    const y = ((clientY - top) / height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const services = [
    "N 1000 , M 800 , M 500 YEDEK PARÇALARI",
    "AOM MODULATOR GARANTİLİ TAMİRİ VE KALİBRASYONU",
    "RF SÜRÜCÜLER GARANTİLİ TAMİRİ VE KALİBRASYONU",
    "STOĞUMUZDAN ADRESİNİZE TESLİM OPTİK ELEMANLAR"
  ];

  return (
    <>
      <Head>
        <title>OG LASER | Teknik Danışmanlık ve Destek</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Navbar links={[]} />

      {/* DEĞİŞİKLİKLER:
          1. h-screen -> min-h-screen: İçerik sığmazsa sayfa uzasın.
          2. overflow-hidden kaldırıldı: Kaydırma (scroll) aktif edildi.
          3. pb-12 eklendi: Sayfanın en altında nefes alacak alan bırakıldı.
      */}
      <main className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col pb-12">
        
        {/* LAZER ARKA PLANI - fixed olduğu için içerik üzerinde kayarken sabit kalır */}
        <div className="fixed inset-0 z-0">
          <LaserBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
        </div>

        {/* ANA İÇERİK KONTEYNERİ */}
        <div className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-6 flex flex-col justify-start pt-28 md:pt-40 gap-10 md:gap-12">
          
          {/* HERO BÖLÜMÜ */}
          <div className="text-center space-y-4">
            <h1 
              className="text-4xl md:text-7xl font-black tracking-tighter leading-none uppercase text-white"
              style={{ 
                textShadow: '0 10px 30px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.5)' 
              }}
            >
              GÜÇ VE <span className="text-[#FF4D00]">HASSASİYET</span>
            </h1>
            <p 
              className="text-[10px] md:text-lg font-bold tracking-[0.4em] text-gray-400 uppercase"
              style={{ textShadow: '0 4px 10px rgba(0,0,0,0.8)' }}
            >
              Endüstriyel Lazer Çözümleri & Teknik Destek
            </p>
          </div>

          {/* HİZMET LİSTESİ */}
          <div className="w-full bg-white/[0.03] border border-white/10 p-6 md:p-8 backdrop-blur-md rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-5 group cursor-default">
                  <div className="w-2.5 h-2.5 bg-[#FF4D00] rotate-45 group-hover:scale-125 transition-all duration-300"></div>
                  <span className="text-sm md:text-lg font-black text-gray-300 uppercase tracking-wider group-hover:text-[#FF4D00] transition-colors duration-300">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* İLETİŞİM KARTI */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
            className="w-full bg-[#FF4D00]/5 backdrop-blur-3xl border border-[#FF4D00]/20 p-8 md:p-10 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.7)] group cursor-pointer"
          >
            <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12 text-center md:text-left">
              
              <a href="tel:+905323225260" className="group/link flex flex-col items-center md:items-start">
                <span className="text-[10px] text-[#FF4D00] tracking-[0.4em] uppercase font-black mb-2">7/24 Teknik Destek</span>
                <span className="text-2xl md:text-4xl font-black tracking-tighter group-hover/link:text-[#FF4D00] transition-colors">
                  +90 532 322 52 60
                </span>
              </a>

              <div className="hidden md:block w-px h-16 bg-white/10"></div>

              <a href="mailto:info@oglaser.com" className="group/link flex flex-col items-center md:items-start">
                <span className="text-[10px] text-gray-500 tracking-[0.4em] uppercase font-black mb-2">Kurumsal İletişim</span>
                <span className="text-lg md:text-2xl font-bold tracking-widest group-hover/link:text-[#FF4D00] transition-colors uppercase italic text-gray-200">
                  info@oglaser.com
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* KÖŞE DETAYLARI */}
        <div className="absolute inset-4 pointer-events-none z-20 opacity-20">
          <div className="absolute top-24 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FF4D00]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white"></div>
        </div>

      </main>
    </>
  );
}