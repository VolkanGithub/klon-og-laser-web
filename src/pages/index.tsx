import Link from 'next/link';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import contentData from '@/data/content.json';
import LaserBackground from '@/components/LaserBackground';

export default function Home() {
  const { hero } = contentData;

  return (
    <>
      <Head>
        <title>OG Laser | Endüstriyel Lazer Çözümleri</title>
        <meta name="description" content={hero.description} />
      </Head>

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center justify-center px-6 relative overflow-hidden">
        
        {/* KATMAN 1: Gradient (En Alt) */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#FF4D00]/10 via-[#121212] to-[#121212]"></div>

        {/* KATMAN 2: Lazer Efekti (Orta) */}
        {/* opacity-50 ekledim ki yazıları çok boğmasın ama görünsün */}
        <div className="absolute top-0 left-0 w-full h-full opacity-50">
           <LaserBackground />
        </div>

        {/* KATMAN 3: İçerik (En Üst - z-10) */}
        <div className="max-w-5xl w-full text-center flex flex-col items-center z-10 relative">
          
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-tight">
            {hero.title}
          </h1>

          <h2 className="text-xl md:text-2xl text-[#FF4D00] font-light mb-8 tracking-[0.2em]">
            {hero.subtitle}
          </h2>

          <p className="text-gray-300 max-w-3xl text-xl md:text-2xl mb-12 leading-relaxed font-medium">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/iletisim" 
              className="bg-[#FF4D00] text-white px-8 py-4 rounded-full font-bold hover:bg-[#ff3300] transition-colors text-center shadow-[0_0_20px_rgba(255,77,0,0.3)] hover:shadow-[0_0_30px_rgba(255,77,0,0.5)]"
            >
              HEMEN TEKLİF AL
            </Link>
            
            <Link 
              href="/hizmetler" 
              className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors text-center backdrop-blur-sm"
            >
              HİZMETLERİMİZ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      // contentData
    },
  };
};