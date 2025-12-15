'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const reviews = [
    {
        id: 1,
        name: 'Marek Puchała',
        city: 'Nowy Sącz',
        text: 'Usługa wykonana wzorowo. Obawiałem się kurzu w całym domu, ale ekipa przyjechała z profesjonalnym sprzętem i po frezowaniu było praktycznie czysto. Ogrzewanie działa super!',
        rating: 5,
        date: '2 miesiące temu'
    },
    {
        id: 2,
        name: 'Kamila Czamara',
        city: 'Kraków',
        text: 'Panowie uwinęli się z 120m2 w jeden dzień. Bardzo dobry kontakt, terminowość i fachowe doradztwo. Wylewka nie popękała, rurki siedzą idealnie. Polecam!',
        rating: 5,
        date: '3 tygodnie temu'
    },
    {
        id: 3,
        name: 'Mateusz Kęska',
        city: 'Limanowa',
        text: 'Wszystko zgodnie z umową. Cena bardzo konkurencyjna w porównaniu do kucia całej podłogi. Super alternatywa przy remoncie starego domu. Pełen profesjonalizm.',
        rating: 5,
        date: 'miesiąc temu'
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-[#3D3E40]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Opinie naszych <span className="text-[#44AF33]">klientów</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Dołącz do grona zadowolonych inwestorów. Zobacz, co mówią o nas osoby, które już cieszą się ciepłą podłogą.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-[#2D2E30] p-8 rounded-2xl border border-white/5 relative hover:border-[#44AF33]/30 transition-all group">
                            <Quote className="absolute top-8 right-8 text-[#44AF33]/20 w-12 h-12" />

                            <div className="flex gap-1 text-[#44AF33] mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                                <div className="w-10 h-10 rounded-full bg-[#44AF33]/20 flex items-center justify-center text-[#44AF33] font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-white text-sm">{review.name}</div>
                                    <div className="text-xs text-gray-500">{review.city} • {review.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                        <span className="text-white font-medium">Średnia ocen 5.0/5</span>
                        <div className="flex gap-0.5 text-[#44AF33]">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-gray-500 text-sm ml-2">na podstawie setek realizacji</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
