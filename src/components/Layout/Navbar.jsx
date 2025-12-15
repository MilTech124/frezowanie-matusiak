'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Start', href: '/' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Proces', href: '/#proces' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/kontakt' },
];

import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (pathname?.startsWith('/studio')) return null;

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'bg-[#3D3E40]/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#44AF33]">
                        <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-wide">
                        FREZOWANIE<span className="text-[#44AF33]">PODŁÓG</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/90 hover:text-[#44AF33] transition-colors font-medium text-sm uppercase tracking-wider"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/kontakt"
                        className="flex items-center gap-2 bg-[#44AF33] hover:bg-[#38942b] text-white px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105"
                    >
                        <Phone size={18} />
                        <span>Darmowa Wycena</span>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#3D3E40] border-t border-white/10 shadow-xl md:hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-lg font-medium hover:text-[#44AF33]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/kontakt"
                                onClick={() => setIsOpen(false)}
                                className="bg-[#44AF33] text-white px-5 py-3 rounded-lg font-bold text-center mt-2"
                            >
                                Darmowa Wycena
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
