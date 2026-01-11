import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  links: { title: string; href: string }[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/5">
      {/* NAVBAR KONTEYNIRI: 
        Mobilde h-20 (80px), Masaüstünde h-24 (96px) 
      */}
      <div className="max-w-screen-2xl mx-auto px-4 h-20 md:h-24 flex items-center relative">
        
        {/* SOL KÖŞE: LOGO
            - Boşluklar silindiği için artık gerçek boyutları kullanıyoruz.
            - Mobilde w-16 (64px), Masaüstünde w-32 (128px).
        */}
        <div className="flex-shrink-0 z-50">
          <Link href="/" className="block relative w-16 h-16 md:w-32 md:h-20 transition-all duration-300">
            <Image 
              src="/logo-v2.png" 
              alt="OG Laser Logo"
              fill 
              className="object-contain" 
              priority
            />
          </Link>
        </div>

        {/* TAM MERKEZ: OG LAZER YAZISI
            - Mobilde text-xl, Masaüstünde text-5xl.
            - absolute inset-0 ile matematiksel merkezleme.
        */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span 
            className="text-xl md:text-5xl font-black tracking-tighter uppercase leading-none whitespace-nowrap px-6 text-white"
            style={{ 
              textShadow: `
                1px 1px 0px #333, 
                2px 2px 0px #222, 
                4px 4px 10px rgba(0,0,0,0.8)
              `,
              /* Mobilde logonun yeni boyutuna göre güvenli mesafe */
              paddingLeft: '4rem',
              paddingRight: '1rem'
            }}
          >
            OG LAZER
          </span>
        </div>

        {/* SAĞ TARAF BOŞLUK:
            - Sol taraftaki logonun genişliği kadar (w-16 / md:w-32) yer bırakarak 
              merkezi tam dengede tutuyoruz.
        */}
        <div className="ml-auto w-16 md:w-32"></div>
      </div>
    </nav>
  );
}