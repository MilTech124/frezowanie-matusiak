'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Clock, Zap } from 'lucide-react';

const reasons = [
    {
        icon: ShieldCheck,
        title: 'Gwarancja Czystości',
        description: 'Korzystamy z przemysłowych odkurzaczy. Zero pyłu w Twoim domu. Po skończonej pracy zostawiamy idealny porządek.',
    },
    {
        icon: Clock,
        title: 'Szybkie Terminy',
        description: 'Większość zleceń realizujemy w ciągu 24-48 godzin od kontaktu. Szanujemy Twój czas.',
    },
    {
        icon: TrendingUp,
        title: 'Najwyższa Precyzja',
        description: 'Używamy nowoczesnych frezarek z prowadnicami laserowymi. Rury będą leżeć idealnie równo.',
    },
    {
        icon: Zap,
        title: 'Konkurencyjne Ceny',
        description: 'Najlepszy stosunek jakości do ceny w Małopolsce. Darmowa wycena bez zobowiązań.',
    },
];

export default function WhyUs() {
    return (
        <section className="py-20 bg-[#363739]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Dlaczego <span className="text-[#44AF33]">Warto?</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Nie jesteśmy jedyną firmą na rynku, ale robimy wszystko, by być najlepszą.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors text-center group"
                        >
                            <div className="w-16 h-16 bg-[#44AF33]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#44AF33] group-hover:scale-110 transition-transform">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
