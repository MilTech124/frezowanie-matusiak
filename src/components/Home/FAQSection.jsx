'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: 'Czy frezowanie bardzo pyli?',
        a: 'Nie. Używamy potężnych odkurzaczy przemysłowych podłączonych bezpośrednio do frezarki. Emisja pyłu jest zredukowana do absolutnego minimum (praktycznie zero).',
    },
    {
        q: 'Ile trwa frezowanie w domu 100m²?',
        a: 'Zazwyczaj jesteśmy w stanie wykonać frezowanie dla takiej powierzchni w ciągu jednego dnia roboczego.',
    },
    {
        q: 'Czy podłoga musi być jakoś specjalnie przygotowana?',
        a: 'Podłoga powinna być opróżniona z mebli. Powierzchnia powinna być zamieciona. My zajmiemy się resztą.',
    },
    {
        q: 'Jaki jest koszt metra bieżącego?',
        a: 'Cena zależy od twardości betonu i metrażu. Najlepiej zadzwoń do nas po darmową, indywidualną wycenę.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 bg-[#3D3E40]">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Najczęściej zadawane <span className="text-[#44AF33]">pytania</span></h2>
                    <p className="text-gray-400 mb-8 max-w-md">
                        Rozwiewamy wątpliwości dotyczące ogrzewania podłogowego i procesu frezowania.
                    </p>
                    <div className="p-6 bg-[#44AF33]/10 border border-[#44AF33]/30 rounded-xl">
                        <h4 className="text-[#44AF33] font-bold mb-2">Masz inne pytanie?</h4>
                        <p className="text-gray-300 text-sm mb-4">Chętnie odpowiemy telefonicznie.</p>
                        <a href="tel:728622674" className="font-bold text-white hover:underline">Zadzwoń: 728 622 674</a>
                    </div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className={`font-bold ${openIndex === i ? 'text-[#44AF33]' : 'text-white'}`}>{faq.q}</span>
                                {openIndex === i ? <Minus size={20} className="text-[#44AF33]" /> : <Plus size={20} className="text-gray-500" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
