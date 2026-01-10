import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* 1. KOLON: LOGO & KISA SLOGAN */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative h-16 w-16">
               <Image 
                src="/logo-v2.png" 
                alt="OG Laser"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Endüstriyel lazer sistemlerinde kesintisiz güç ve profesyonel teknik destek çözüm ortağınız.
            </p>
          </div>

          {/* 2. KOLON: HIZLI MENÜ */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Kurumsal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#FF4D00] transition-colors text-sm">Anasayfa</Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-500 hover:text-[#FF4D00] transition-colors text-sm">Hizmetlerimiz</Link>
              </li>
              <li>
                <Link href="/yedek-parca" className="text-gray-500 hover:text-[#FF4D00] transition-colors text-sm">Yedek Parça</Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-500 hover:text-[#FF4D00] transition-colors text-sm">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* 3. KOLON: İLETİŞİM */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Bize Ulaşın</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <span className="text-[#FF4D00]">📍</span>
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF4D00]">✉️</span>
                <a href="mailto:info@oglaser.com" className="hover:text-[#FF4D00] transition-colors">
                  info@oglaser.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                 <span className="text-[#FF4D00]">📞</span>
                <a href="tel:+905555555555" className="hover:text-[#FF4D00] transition-colors">
                  +90 (555) 555 55 55
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ALT ÇİZGİ & COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 OG Laser Teknik Sistemler. Tüm hakları saklıdır.
          </p>
        </div>

      </div>
    </footer>
  );
}