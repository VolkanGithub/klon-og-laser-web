import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
  navLinks: { title: string; href: string }[];
}

export default function Layout({ children, navLinks }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#FF4D00]">
      <Navbar links={navLinks} />
      
      {/* pt-36 ile mobildeki Navbar yüksekliği telafi edildi */}
      <main className="pt-36"> 
        {children}
      </main>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 mt-20">
        <p>© 2025 OG Laser. Sistem Mimarı: Volkan Özkan</p>
      </footer>
    </div>
  );
}