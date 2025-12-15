'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    const pathname = usePathname();

    if (pathname?.startsWith('/studio')) return null;

    return (
        <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            FREZOWANIE<span className="text-[#44AF33]">PODŁÓG</span>
                        </h3>
                        <p className="text-gray-400 text-sm mb-6">
                            Specjalizujemy się w bezpyłowym frezowaniu pod ogrzewanie podłogowe. Gwarantujemy czystość i najwyższą jakość usług.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61568616265111" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#44AF33] transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/matusiakfirma/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#44AF33] transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.tiktok.com/@krystian.matusiak65" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#44AF33] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Nawigacja</h4>
                        <ul className="space-y-3">
                            {['Start', 'O nas', 'Galeria', 'Blog', 'Kontakt'].map(link => (
                                <li key={link}>
                                    <Link href={link === 'Galeria' ? '/galeria' : link === 'Start' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#44AF33] transition-colors text-sm">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations (SEO) */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Obszar działania</h4>
                        <ul className="grid grid-cols-1 gap-2">
                            {['Nowy Sącz', 'Limanowa', 'Kraków', 'Tarnów', 'Brzesko', 'Bochnia', 'Gorlice'].map(city => {
                                const slug = city
                                    .toLowerCase()
                                    .replace(/ą/g, 'a')
                                    .replace(/ć/g, 'c')
                                    .replace(/ę/g, 'e')
                                    .replace(/ł/g, 'l')
                                    .replace(/ń/g, 'n')
                                    .replace(/ó/g, 'o')
                                    .replace(/ś/g, 's')
                                    .replace(/ź/g, 'z')
                                    .replace(/ż/g, 'z')
                                    .replace(/ /g, '-');

                                return (
                                    <li key={city}>
                                        <Link href={`/frezowanie/frezowanie-${slug}`} className="text-gray-400 hover:text-[#44AF33] transition-colors text-sm flex items-center gap-2">
                                            <MapPin size={14} className="text-[#44AF33]" /> Frezowanie {city}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Kontakt</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <Phone size={20} className="text-[#44AF33] shrink-0" />
                                <span>
                                    728 622 674<br />
                                    pon-pt 8:00 - 18:00
                                </span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <Mail size={20} className="text-[#44AF33] shrink-0" />
                                <span>matusiakinwbud@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Link href="/kontakt" className="bg-[#44AF33] hover:bg-[#38942b] text-white px-6 py-2 rounded-full text-sm font-bold transition-colors w-full text-center">
                                    Napisz do nas
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-xs space-y-2">
                    <div>© {new Date().getFullYear()} Frezowanie Podłóg. Wszelkie prawa zastrzeżone.</div>
                    <div>
                        Realizacja:{' '}
                        <a
                            href="https://www.brutecode.pl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#44AF33] transition-colors"
                        >
                            BruteCode
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
