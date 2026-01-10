import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link'; // <--- YENİ EKLENDİ: Sayfa geçişleri için şart
import contentData from '@/data/content.json';
import { SparePart } from '@/types/index';
import { useState } from 'react';

interface SparePartsPageProps {
  parts: SparePart[];
}

export default function SparePartsPage({ parts }: SparePartsPageProps) {
  const [selectedPart, setSelectedPart] = useState<SparePart | null>(null);

  return (
    <>
      <Head>
        <title>Yedek Parça | OG Laser</title>
      </Head>

      <section className="py-12 px-6 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-16"> 
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Yedek Parça Deposu
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Lazer kesim makineleriniz için orijinal optik bileşenler ve dayanıklı yedek parçalar.
          </p>
        </div>

        {/* Ürün Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parts.map((part) => (
            <div 
              key={part.id} 
              onClick={() => setSelectedPart(part)}
              className="group relative bg-[#1a1a1a] border border-white/5 p-8 rounded-2xl hover:border-[#FF4D00]/50 transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FF4D00]/5 blur-[80px] group-hover:bg-[#FF4D00]/20 transition-all duration-500" />

              <div className="relative z-10">
                <span className="text-xs font-bold text-[#FF4D00] tracking-[0.2em] uppercase mb-3 block">
                  {part.category}
                </span>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF4D00] transition-colors">
                  {part.name}
                </h3>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                   <span className="text-sm text-gray-500 group-hover:text-white transition-colors">
                      Detayları Gör
                   </span>
                   <span className="text-[#FF4D00] transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-gray-600 text-sm">
            * Listemizde bulamadığınız özel parçalar için lütfen WhatsApp üzerinden fotoğraf gönderiniz.
        </div>
      </section>

      {/* --- MODAL --- */}
      {selectedPart && (
        // z-[100] yerine z-50 yaptık (Tailwind standardı), min-h-[400px] aynen kalabilir sorun yok
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedPart(null)}
          ></div>

          {/* Modal İçeriği */}
          <div className="relative bg-[#121212] border border-white/10 rounded-3xl max-w-3xl w-full overflow-hidden shadow-[0_0_50px_rgba(255,77,0,0.1)] animate-in zoom-in-95 duration-300">
            
            <button 
  onClick={() => setSelectedPart(null)}
  // "top-4 right-4" yaptık, köşeye yaklaştı
  className="absolute top-4 right-4 z-10 bg-white/5 hover:bg-white/10 text-white p-2 rounded-full transition-colors"
>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row" style={{ minHeight: '400px' }}>
              
              {/* Sol: Görsel */}
              <div className="w-full md:w-2/5 bg-[#1a1a1a] flex flex-col items-center justify-center p-12 border-b md:border-b-0 md:border-r border-white/5">
                 <div className="text-6xl mb-4 opacity-20">⚙️</div>
                 <span className="text-xs text-gray-600 tracking-widest uppercase">Görsel Hazırlanıyor</span>
              </div>

              {/* Sağ: Detaylar */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#FF4D00]/10 text-[#FF4D00] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                  {selectedPart.category}
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {selectedPart.name}
                </h2>
                
                <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                  Lazer sistemleriniz için yüksek performanslı ve uzun ömürlü yedek parça çözümü. Stok durumu için iletişime geçiniz.
                </p>

                <div className="space-y-4">
                    {/* DÜZELTME 1: <a> yerine <Link> kullanıldı */}
                    <Link 
                      href="/iletisim" 
                      className="block w-full bg-[#FF4D00] text-white py-4 px-8 rounded-xl font-bold text-center hover:bg-[#e64500] hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      FİYAT TEKLİFİ AL
                    </Link>
                    
                    {/* Dış linkler (WhatsApp) için <a> kalabilir, ama kesme işareti düzeltildi */}
                    <a 
                      href="https://wa.me/905555555555" 
                      target="_blank"
                      className="block w-full border border-white/10 text-white py-4 px-8 rounded-xl font-bold text-center hover:bg-white/5 transition-all"
                    >
                      {/* DÜZELTME 2: ' yerine &apos; kullanıldı */}
                      WHATSAPP&apos;TAN SOR
                    </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      parts: contentData.spareParts,
    },
  };
};