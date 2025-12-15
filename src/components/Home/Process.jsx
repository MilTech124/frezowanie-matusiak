'use client';

import { motion } from 'framer-motion';
import { Phone, FileText, Settings, ThermometerSun } from 'lucide-react';

const steps = [
    {
        icon: Phone,
        title: 'Kontakt',
        desc: 'Zadzwoń do nas lub napisz. Ustalimy wstępny zakres prac i termin.',
    },
    {
        icon: FileText,
        title: 'Wycena',
        desc: 'Otrzymasz precyzyjną wycenę. Bez ukrytych kosztów.',
    },
    {
        icon: Settings,
        title: 'Realizacja',
        desc: 'Przyjeżdżamy i wykonujemy frezowanie profesjonalną maszyną bezpyłową.',
    },
    {
        icon: ThermometerSun,
        title: 'Gotowe',
        desc: 'Podłoga jest gotowa do montażu rur ogrzewania.',
    }
];

export default function Process() {
    return (
        <section id="proces" className="py-20 bg-[#3D3E40] relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Jak wygląda <span className="text-[#44AF33]">proces?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Prosta i przejrzysta ścieżka do Twojego ciepłego domu.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <div className="absolute -top-6 left-6 w-12 h-12 bg-[#44AF33] rounded-lg rotate-12 flex items-center justify-center text-white shadow-lg group-hover:rotate-0 transition-all duration-300">
                                <step.icon size={24} />
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            <div className="absolute bottom-4 right-4 text-6xl font-black text-white/5 select-none">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
