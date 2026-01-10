import { ReactNode } from 'react';
import Navbar from './Navbar';

// Layout, içine "çocukları" (sayfa içeriğini) ve navigasyon verisini alır.
interface LayoutProps {
  children: ReactNode;
  navLinks: { title: string; href: string }[];
}

export default function Layout({ children, navLinks }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#FF4D00] selection:text-white">
      {/* Navbar her zaman en tepede */}
      <Navbar links={navLinks} />
      
      {/* Sayfanın asıl içeriği burada değişecek */}
      <main className="pt-20"> 
        {children}
      </main>

      {/* Basit Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 mt-20">
        <p>© 2025 OG Laser. Sistem Mimarı: Volkan Özkan</p>
      </footer>
    </div>
  );
}