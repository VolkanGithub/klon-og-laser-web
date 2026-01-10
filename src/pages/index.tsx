import Head from 'next/head';
import LaserBackground from '@/components/LaserBackground';

export default function Home() {
  return (
    <>
      <Head>
        <title>OG LASER | Teknik Danışmanlık ve Destek</title>
        <meta name="description" content="OG LASER TEKNİK DANIŞMANLIK VE DESTEK HİZMETLERİ" />
      </Head>

      <main className="relative min-h-screen bg-[#121212] flex items-center justify-center overflow-hidden">
        
        {/* KATMAN 1: Arka Plan Gradyanı */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,77,0,0.08),transparent_70%)]"></div>

        {/* KATMAN 2: Lazer Efekti (Dokunmuyoruz, tam güç çalışıyor) */}
        <div className="absolute inset-0 z-0">
          <LaserBackground />
        </div>

        {/* KATMAN 3: İçerik */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          
          {/* Ana Başlık */}
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-tight uppercase">
            OG LASER <br />
            <span className="text-lg md:text-3xl text-gray-400 font-light tracking-[0.3em] block mt-4">
              TEKNİK DANIŞMANLIK VE DESTEK HİZMETLERİ
            </span>
          </h1>

          {/* İletişim Bilgileri */}
          <div className="mt-16 space-y-6 text-lg md:text-2xl font-mono">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
              <p className="text-gray-400 flex items-center gap-3">
                <span className="text-[#FF4D00]">Mobile :</span>
                <a href="tel:+905323225260" className="text-white hover:text-[#FF4D00] transition-colors">
                  +90 532 322 52 60
                </a>
              </p>
              <p className="text-gray-400 flex items-center gap-3">
                <span className="text-[#FF4D00]">e-mail :</span>
                <a href="mailto:info@oglaser.com" className="text-white hover:text-[#FF4D00] transition-colors">
                  info@oglaser.com
                </a>
              </p>
            </div>
          </div>

          {/* Sektörel Dipnot */}
          <div className="mt-24 pt-8 border-t border-white/5 opacity-30 text-[10px] text-white tracking-[0.5em] uppercase">
            Endüstriyel Lazer Çözümleri
          </div>
        </div>
      </main>
    </>
  );
}