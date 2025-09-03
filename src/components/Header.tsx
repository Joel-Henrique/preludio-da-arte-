'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/quem-somos', label: 'Quem somos' },
    { href: '/reportagens', label: 'Reportagens' },
  ];

  return (
    <header className="bg-[#0d0c0c] text-[#f9f6ec] shadow-md border-b border-[#790614]">
      <nav className="max-w-6xl mx-auto flex items-center justify-center p-4 relative">
        
        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group transition"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#790614] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Botão Hamburguer (mobile) - mantido no canto direito */}
        <button
          className="md:hidden p-2 text-[#f9f6ec] hover:text-[#790614] transition absolute right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0c0c] flex flex-col items-center gap-6 py-8 text-lg font-medium animate-slideDown">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#790614] transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
