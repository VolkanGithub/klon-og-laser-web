import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface NavbarProps {
  links: { title: string; href: string }[];
}

export default function Navbar({ links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    // DEĞİŞİKLİK 1: Navbar Rengi Açıldı (bg-[#222222])
    <nav className="w-full fixed top-0 left-0 z-40 bg-[#222222]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      
      {/* DEĞİŞİKLİK 2: Navbar Yüksekliği Arttı (h-20 -> h-24) */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* DEĞİŞİKLİK 3: Logo Boyutu Büyütüldü */}
        {/* h-24 w-24 (96px) yapıldı ve padding kaldırıldı */}
        <Link href="/" className="flex items-center z-50 relative h-24 w-24 md:h-24 md:w-24 my-auto">
          <Image 
            src="/logo-v2.png" 
            alt="OG Laser Logo"
            fill 
            className="object-contain scale-300" // Padding sildik, tam boy görünsün
            priority
          />
        </Link>

        {/* DESKTOP MENÜ */}
        <div className="hidden md:flex gap-8">
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              className="text-gray-300 hover:text-[#FF4D00] transition-colors text-sm font-medium uppercase tracking-wide"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* MOBİL MENÜ BUTONU */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white z-50 focus:outline-none relative"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#FF4D00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* MOBİL MENÜ OVERLAY */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-[#222222] flex flex-col items-center justify-center space-y-8 md:hidden z-40">
            {links.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className="text-2xl font-bold text-white hover:text-[#FF4D00] transition-colors tracking-widest"
              >
                {link.title}
              </Link>
            ))}
            
            <Link 
              href="/iletisim"
              className="mt-8 px-8 py-3 bg-[#FF4D00] text-white rounded-full font-bold"
            >
              Hemen Ara
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}