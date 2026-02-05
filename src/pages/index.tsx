import { useState, MouseEvent } from 'react';
import Head from 'next/head';
import LaserBackground from '@/components/LaserBackground';
import Navbar from '@/components/Navbar';
import { Phone, Mail, Globe, Cpu, Wrench, Zap, Package } from 'lucide-react';

export default function Home() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 8; 
    const y = ((clientY - top) / height - 0.5) * -8;
    setTilt({ x, y });
  };

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

      <main className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col pb-12 font-sans">
        
        <div className="fixed inset-0 z-0">
          <LaserBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
        </div>

        {/* Üst kısım geniş kalmaya devam ediyor */}
        <div className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-6 flex flex-col justify-start pt-36 md:pt-48 gap-6 md:gap-10">
          
          {/* HERO KARTI */}
          <div className="relative w-full bg-white/[0.03] border border-white/10 p-8 md:p-12 backdrop-blur-md rounded-xl shadow-2xl text-center flex flex-col items-center justify-center gap-4 overflow-hidden">
            <h1 className="font-orbitron font-black tracking-tighter leading-tight uppercase text-white drop-shadow-2xl z-10 relative text-2xl xs:text-3xl md:text-4xl">
                GÜÇ VE <span className="text-[#FF4D00]">HASSASİYET</span>
            </h1>
            <p className="font-bold tracking-[0.2em] text-gray-400 uppercase z-10 relative text-[10px] md:text-sm">
                Lazer Gravür Çözümleri & Teknik Danışmanlık
            </p>
          </div>

          {/* HİZMETLER */}
          <div id="hizmetler" className="w-full bg-white/[0.03] border border-white/10 p-6 md:p-8 backdrop-blur-md rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {servicesList.map((service, index) => (
                <div key={index} className="flex items-start gap-4 group cursor-default">
                  <div className="p-2 rounded-lg bg-[#FF4D00]/10 text-[#FF4D00] group-hover:bg-[#FF4D00] group-hover:text-white transition-all shadow-[0_0_10px_rgba(255,77,0,0.15)] flex-shrink-0 mt-0.5">
                    <service.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <span className="font-bold text-gray-300 uppercase tracking-wide group-hover:text-white transition-colors leading-tight text-xs md:text-sm">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* --- İLETİŞİM KARTI (SIKIŞTIRILMIŞ / KOMPAKT VERSİYON) --- */}
          <div 
            id="iletisim"
            // max-w-3xl ile genişliği daralttık
            className="relative w-full max-w-3xl mx-auto" 
          >
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
              className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a]/95 to-[#050505]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] text-white laser-card-hover"
            >
              
              <span className="laser-beam opacity-40"></span>
              <span className="laser-beam opacity-40 animation-delay-500"></span>

              {/* Flex Container */}
              <div className="relative z-10 flex flex-col md:flex-row min-h-[180px]">

                {/* 1. SOL YARI: MARKA (Paddingler azaltıldı: p-5) */}
                <div className="w-full md:w-5/12 p-5 md:p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.02]">
                  <h2 className="font-orbitron font-black text-3xl md:text-4xl text-[#FF4D00] tracking-tighter mb-1 drop-shadow-[0_0_10px_rgba(255,77,0,0.3)]">
                    OG LASER
                  </h2>
                  <p className="font-bold text-[10px] md:text-xs text-gray-400 tracking-widest uppercase leading-relaxed max-w-[180px]">
                    TEKNİK DANIŞMANLIK SAN. TİC. LTD. ŞTİ.
                  </p>
                </div>

                {/* 2. SAĞ YARI: KİŞİ VE İLETİŞİM (Gap ve Padding kısıldı) */}
                <div className="w-full md:w-7/12 p-4 md:p-5 flex flex-col justify-center items-center text-center gap-4">
                  
                  {/* İsim ve Unvan */}
                  <div className="flex flex-col items-center border-b border-white/5 pb-2 w-full max-w-[200px]">
                     <h3 className="font-sans font-black text-xl md:text-2xl text-white tracking-tight">
                        Ömer GÖBEKLİ
                     </h3>
                     <span className="text-[#FF4D00] font-bold tracking-[0.2em] text-[10px] uppercase">
                        - CEO -
                     </span>
                  </div>

                  {/* Liste (Gap 2'ye düşürüldü, ikonlar küçültüldü) */}
                  <div className="flex flex-col gap-2 w-full items-center">
                    
                    {/* Telefon */}
                    <a href="tel:+905323225260" className="flex items-center justify-center gap-3 group hover:bg-white/5 p-1.5 px-3 rounded-xl transition-all w-fit">
                      <div className="w-7 h-7 rounded-full bg-[#FF4D00]/10 text-[#FF4D00] flex items-center justify-center shadow-[0_0_8px_rgba(255,77,0,0.2)] group-hover:bg-[#FF4D00] group-hover:text-white transition-all border border-[#FF4D00]/30">
                        <Phone className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </div>
                      <span className="font-bold text-gray-300 group-hover:text-white transition-colors text-sm tracking-wide">
                        +90 532 322 52 60
                      </span>
                    </a>

                    {/* Mail */}
                    <a href="mailto:omer@oglaser.com" className="flex items-center justify-center gap-3 group hover:bg-white/5 p-1.5 px-3 rounded-xl transition-all w-fit">
                      <div className="w-7 h-7 rounded-full bg-[#FF4D00]/10 text-[#FF4D00] flex items-center justify-center shadow-[0_0_8px_rgba(255,77,0,0.2)] group-hover:bg-[#FF4D00] group-hover:text-white transition-all border border-[#FF4D00]/30">
                        <Mail className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </div>
                      <span className="font-bold text-gray-300 group-hover:text-white transition-colors text-sm tracking-wide">
                        omer@oglaser.com
                      </span>
                    </a>

                    {/* Web */}
                    <a href="https://www.oglaser.com" target="_blank" className="flex items-center justify-center gap-3 group hover:bg-white/5 p-1.5 px-3 rounded-xl transition-all w-fit">
                      <div className="w-7 h-7 rounded-full bg-[#FF4D00]/10 text-[#FF4D00] flex items-center justify-center shadow-[0_0_8px_rgba(255,77,0,0.2)] group-hover:bg-[#FF4D00] group-hover:text-white transition-all border border-[#FF4D00]/30">
                        <Globe className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </div>
                      <span className="font-bold text-gray-300 group-hover:text-white transition-colors text-sm tracking-wide">
                        www.oglaser.com
                      </span>
                    </a>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}