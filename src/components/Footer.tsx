import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          
          {/* 1. KOLON */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="inline-block relative h-16 w-32">
               <Image src="/logo-v2.png" alt="OG Laser" fill className="object-contain" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Endüstriyel lazer sistemlerinde kesintisiz güç ve profesyonel teknik destek çözüm ortağınız.
            </p>
          </div>

          {/* 2. KOLON */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs md:text-sm">Kurumsal</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-500 hover:text-[#FF4D00] transition-colors text-sm">Anasayfa</Link></li>
              <li><Link href="/hizmetler" className="text-gray-500 hover:text-[#FF4D00] transition-colors text-sm">Hizmetlerimiz</Link></li>
              <li><Link href="/yedek-parca" className="text-gray-500 hover:text-[#FF4D00] transition-colors text-sm">Yedek Parça</Link></li>
              <li><Link href="/iletisim" className="text-gray-500 hover:text-[#FF4D00] transition-colors text-sm">İletişim</Link></li>
            </ul>
          </div>

          {/* 3. KOLON */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs md:text-sm">Bize Ulaşın</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
                <span className="text-[#FF4D00]">📍</span>
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
                <span className="text-[#FF4D00]">✉️</span>
                <span className="flex flex-col md:block">
                  <a href="mailto:omer@oglaser.com" className="hover:text-[#FF4D00]">omer@oglaser.com</a>
                  <span className="hidden md:inline"> / </span>
                  <a href="mailto:info@oglaser.com" className="hover:text-[#FF4D00]">info@oglaser.com</a>
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
                 <span className="text-[#FF4D00]">📞</span>
                <a href="tel:+905323225260" className="hover:text-[#FF4D00] font-bold">
                  +90 532 322 52 60
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col items-center justify-center">
          <p className="text-gray-600 text-xs">
            © 2025 OG Laser Teknik Sistemler. Tüm hakları saklıdır.
          </p>
        </div>

      </div>
    </footer>
  );
}