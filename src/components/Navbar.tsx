import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

interface NavbarProps {
  links?: { title: string; href: string }[];
}

export default function Navbar({ }: NavbarProps) {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/5 shadow-2xl transition-all duration-300">
      <div className="max-w-screen-2xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* --- SOL LOGO (%10 KÜÇÜLTÜLDÜ) --- */}
        <div className="flex-shrink-0 z-20">
          <Link href="/" className="block relative w-[4rem] h-[4rem] md:w-[5.4rem] md:h-[5.4rem] lg:w-40 lg:h-28 transition-all hover:opacity-90">
            <Image src="/logo-v2.png" alt="Logo Sol" fill className="object-contain" priority />
          </Link>
        </div>

        {/* --- MERKEZ --- */}
        <div className="flex-grow flex flex-col items-center justify-center text-center z-10 w-full md:w-auto">

          {/* MARKA ADI */}
          <span
            className="font-orbitron font-black tracking-tighter uppercase leading-none text-[#FF4D00] truncate
            text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-1"
            style={{ textShadow: '0 2px 10px rgba(255,77,0,0.3)' }}
          >
            OG LASER
          </span>

          {/* İLETİŞİM GRUBU */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 w-full">

            {/* WHATSAPP BUTONU */}
            <a
              href="https://wa.me/905323225260"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full border border-[#FF4D00]/30 bg-[#FF4D00]/5 hover:bg-[#FF4D00] group transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <div className="flex items-center justify-center gap-2 text-[10px] md:text-[10px] lg:text-xs font-bold uppercase tracking-widest text-[#FF4D00] group-hover:text-white">
                {/* WhatsApp İkonu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.787-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span className="hidden xs:inline">TEL:</span>
                <span className="text-white group-hover:text-white">+90 532 322 52 60</span>
              </div>
            </a>

            {/* E-MAIL */}
            <a
              href="mailto:info@oglaser.com"
              className="px-3 py-1.5 rounded-full border border-[#FF4D00]/30 bg-[#FF4D00]/5 hover:bg-[#FF4D00] group transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <div className="flex items-center justify-center gap-2 text-[10px] md:text-[10px] lg:text-xs font-bold uppercase tracking-widest text-[#FF4D00] group-hover:text-white">
                <Mail className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
                <span className="hidden xs:inline">MAİL:</span>
                <span className="text-white group-hover:text-white">info@oglaser.com</span>
              </div>
            </a>
          </div>

          {/* ŞİRKET UNVANI */}
          <div className="block mt-3 text-[6px] md:text-[8px] lg:text-[10px] font-bold text-gray-400 tracking-widest uppercase opacity-80 max-w-[90%] md:max-w-full leading-tight">
            OG LASER TEKNİK DANIŞMANLIK SANAYİ TİCARET LİMİTED ŞİRKETİ
          </div>

        </div>

        {/* --- SAĞ DENGELEYİCİ --- */}
        <div className="hidden lg:block w-40"></div>

      </div>
    </nav>
  );
}