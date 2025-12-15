import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#44AF33]/90 z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/hero.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Gotowy na ciepłą podłogę?</h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Umów się na darmową wycenę. Sprawdź terminy realizacji w Twojej okolicy.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/kontakt" className="px-8 py-4 bg-white text-[#44AF33] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl flex items-center gap-2">
                        Zamów Wycenę Teraz <ArrowRight size={20} />
                    </Link>
                    <a href="tel:728622674" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                        Zadzwoń: 728 622 674
                    </a>
                </div>
            </div>
        </section>
    );
}
