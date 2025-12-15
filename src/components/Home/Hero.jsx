'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="Frezowanie podłóg pod ogrzewanie podłogowe"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#3D3E40]/90 via-[#3D3E40]/70 to-[#3D3E40] opacity-90" />
            </div>

            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 bg-[#44AF33]/20 border border-[#44AF33]/30 px-4 py-1 rounded-full text-[#44AF33] font-medium text-sm">
                        <span className="animate-pulse w-2 h-2 bg-[#44AF33] rounded-full" />
                        Działamy w Całej Małopolsce
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Profesjonalne <span className="text-[#44AF33]">Frezowanie</span> Pod Ogrzewanie Podłogowe
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl max-w-lg">
                        Bezkurzwe, szybkie i precyzyjne przygotowanie podłogi pod instalację ogrzewania. Nowy Sącz, Limanowa, Kraków i okolice.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/kontakt"
                            className="px-8 py-4 bg-[#44AF33] hover:bg-[#38942b] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-[#44AF33]/20 flex items-center justify-center gap-2"
                        >
                            Darmowa Wycena <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/galeria"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-lg transition-all backdrop-blur-sm flex items-center justify-center"
                        >
                            Zobacz Galerię
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                        {['Bezpyłowa technologia', 'Szybka realizacja', 'Precyzyjny sprzęt', 'Gwarancja jakości'].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                <CheckCircle2 size={16} className="text-[#44AF33]" />
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right side - maybe a showcase card or statistic? */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block relative"
                >
                    <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#44AF33] rounded-full blur-3xl opacity-20" />
                        <h3 className="text-2xl font-bold text-white mb-4">Dlaczego my?</h3>
                        <ul className="space-y-4">
                            <ListItem title="Doświadczenie" desc="Setki metrów wyfrezowanych podłóg." />
                            <ListItem title="Lokalnie" desc="Specjalizujemy się w Małopolsce." />
                            <ListItem title="Kompleksowo" desc="Frezowanie + sprzątanie urobku." />
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ListItem({ title, desc }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#44AF33]/20 flex items-center justify-center text-[#44AF33] shrink-0">
                <CheckCircle2 size={20} />
            </div>
            <div>
                <h4 className="text-white font-bold">{title}</h4>
                <p className="text-gray-400 text-sm">{desc}</p>
            </div>
        </div>
    )
}
