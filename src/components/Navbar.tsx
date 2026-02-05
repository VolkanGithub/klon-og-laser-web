import Link from 'next/link';
import Image from 'next/image';
// YENİ: Modern ikonlar eklendi
import { Phone, Mail } from 'lucide-react';

interface NavbarProps {
  links?: { title: string; href: string }[]; 
}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/5 shadow-2xl transition-all duration-300">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-6 py-3 flex items-center justify-between gap-2 md:gap-4">
        
        {/* --- SOL LOGO --- */}
        <div className="flex-shrink-0 z-20">
          <Link href="/" className="block relative w-10 h-10 xs:w-12 xs:h-12 md:w-32 md:h-20 transition-all hover:opacity-90">
            <Image src="/logo-v2.png" alt="Logo Sol" fill className="object-contain" priority />
          </Link>
        </div>

        {/* --- MERKEZ --- */}
        <div className="flex-grow flex flex-col items-center justify-center text-center z-10 min-w-0 mx-1">
          
          {/* MARKA ADI */}
          <span 
            className="font-orbitron font-black tracking-tighter uppercase leading-none text-white truncate w-full
            text-2xl xs:text-3xl md:text-5xl"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            OG LASER
          </span>

          {/* İLETİŞİM GRUBU (MODERN İKONLARLA) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 mt-1 md:mt-2 w-full">
            
            {/* 1. TELEFON BUTONU */}
            <a 
              href="tel:+905323225260" 
              className="px-3 py-1 rounded-full border border-[#FF4D00]/30 bg-[#FF4D00]/5 hover:bg-[#FF4D00] group transition-all duration-300 cursor-pointer w-full md:w-auto"
            >
              <div className="flex items-center justify-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#FF4D00] group-hover:text-white">
                {/* Modern İkon */}
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span>TEL:</span>
                <span className="text-white group-hover:text-white">+90 532 322 52 60</span>
              </div>
            </a>

            {/* 2. E-MAIL BUTONU */}
            <a 
              href="mailto:info@oglaser.com" 
              className="px-3 py-1 rounded-full border border-[#FF4D00]/30 bg-[#FF4D00]/5 hover:bg-[#FF4D00] group transition-all duration-300 cursor-pointer w-full md:w-auto"
            >
              <div className="flex items-center justify-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#FF4D00] group-hover:text-white">
                {/* Modern İkon */}
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                <span>E-MAIL:</span>
                <span className="text-white group-hover:text-white">info@oglaser.com</span>
              </div>
            </a>

          </div>

        </div>

        {/* --- SAĞ LOGO --- */}
        <div className="flex-shrink-0 z-20">
          <Link href="/" className="block relative w-10 h-10 xs:w-12 xs:h-12 md:w-32 md:h-20 transition-all hover:opacity-90">
            <Image src="/logo-v2.png" alt="Logo Sağ" fill className="object-contain" />
          </Link>
        </div>

      </div>
    </nav>
  );
}