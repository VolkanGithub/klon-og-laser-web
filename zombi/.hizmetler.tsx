import { GetStaticProps } from 'next';
import Head from 'next/head';
import contentData from '@/data/content.json';
import { Service } from '@/types/index';
import { useState } from 'react';

interface ServicesPageProps {
  services: Service[];
}

export default function ServicesPage({ services }: ServicesPageProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Hizmetlerimiz | OG Laser</title>
      </Head>

      {/* DÜZELTME: py-20 yerine pb-20 yapıldı. Üst boşluk silindi. */}
      {/* min-h-screen ve justify-center ile dikeyde tam ortalama sağlandı */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 pb-20 max-w-7xl mx-auto">
        <div className="mb-16 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Teknik Servis & <br />
            <span className="text-[#FF4D00]">Bakım Çözümleri.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Lazer kesim makineleriniz için yerinde teknik servis, periyodik bakım ve 
            orijinal yedek parça tedariği sağlıyoruz.
          </p>
        </div>

        {/* Agresif Grid Yapısı (gap-10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              
              className={`
                p-8 rounded-2xl border transition-all duration-500 ease-out cursor-default
                relative flex flex-col justify-between
                
                ${
                  hoveredIndex === index 
                    // AGRESİF ZOOM: scale-125 (%25 Büyüme)
                    // Z-INDEX: z-50 (En üste çık)
                    ? 'scale-125 bg-[#222222] border-[#FF4D00] shadow-[0_0_60px_rgba(0,0,0,0.9)] z-50' 
                    
                  : hoveredIndex !== null 
                    // DİĞERLERİ: Silikleşsin ve grileşsin
                    ? 'scale-90 opacity-30 blur-[2px] border-transparent z-0 grayscale'
                    
                  : 'scale-100 bg-[#1a1a1a] border-white/5 hover:border-white/10 z-10'
                }
              `}
            >
              <div>
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300
                  ${hoveredIndex === index ? 'bg-[#FF4D00] text-white' : 'bg-[#FF4D00]/10 text-[#FF4D00]'}
                `}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>

                <h3 className={`text-2xl font-bold mb-4 transition-colors ${hoveredIndex === index ? 'text-[#FF4D00]' : 'text-white'}`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.details.map((detail: string, i: number) => (
                  <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${hoveredIndex === index ? 'bg-[#FF4D00]' : 'bg-gray-600'}`}></span>
                    <span className={hoveredIndex === index ? 'text-gray-300' : ''}>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      services: contentData.services,
    },
  };
};