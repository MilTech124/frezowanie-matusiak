import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, MapPin, Phone, ArrowRight } from 'lucide-react';

// City Data Configuration
const cities = {
    'frezowanie-nowy-sacz': {
        name: 'Nowy Sącz',
        image: '/hero.jpg',
        description: 'Profesjonalne frezowanie podłóg w Nowym Sączu. Szybki dojazd, darmowa wycena i realizacja w 1 dzień.'
    },
    'frezowanie-limanowa': {
        name: 'Limanowa',
        image: '/hero.jpg',
        description: 'Szukasz firmy od frezowania w Limanowej? Jesteśmy lokalnym liderem. Sprawdź nasze realizacje.'
    },
    'frezowanie-krakow': {
        name: 'Kraków',
        image: '/hero.jpg',
        description: 'Kompleksowe usługi frezowania pod ogrzewanie podłogowe w Krakowie. Bezpyłowo i terminowo.'
    },
    'frezowanie-tarnow': {
        name: 'Tarnów',
        image: '/hero.jpg',
        description: 'Frezowanie wylewek w Tarnowie. Przygotujemy Twoją podłogę pod nowoczesne ogrzewanie.'
    },
    'frezowanie-brzesko': {
        name: 'Brzesko',
        image: '/hero.jpg',
        description: 'Fachowe frezowanie betonu w Brzesku. Skontaktuj się z nami i zamów darmową wycenę.'
    },
    'frezowanie-bochnia': {
        name: 'Bochnia',
        image: '/hero.jpg',
        description: 'Usługi frezowania podłóg w Bochni. Gwarancja czystości i precyzji wykonania.'
    },
    'frezowanie-gorlice': {
        name: 'Gorlice',
        image: '/hero.jpg',
        description: 'Realizujemy zlecenia frezowania w Gorlicach i okolicach. Zadzwoń i zapytaj o termin.'
    }
};

export async function generateMetadata({ params }) {
    const { city } = await params;
    const cityData = cities[city];

    if (!cityData) {
        return {
            title: 'Frezowanie Podłóg Małopolska',
        };
    }

    return {
        title: `Frezowanie Podłóg ${cityData.name} | Ogrzewanie Podłogowe`,
        description: cityData.description,
    };
}

export function generateStaticParams() {
    return Object.keys(cities).map((city) => ({
        city: city,
    }));
}

export default async function CityPage({ params }) {
    const { city } = await params;
    const cityData = cities[city];

    if (!cityData) {
        return notFound();
    }

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={cityData.image}
                        alt={`Frezowanie ${cityData.name}`}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-[#44AF33]/20 border border-[#44AF33]/30 px-4 py-1 rounded-full text-[#44AF33] font-medium text-sm mb-6">
                        <MapPin size={14} />
                        Działamy lokalnie: {cityData.name}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Frezowanie Podłóg <span className="text-[#44AF33]">{cityData.name}</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        {cityData.description}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/kontakt" className="px-8 py-4 bg-[#44AF33] hover:bg-[#38942b] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-[#44AF33]/20 flex items-center gap-2">
                            <Phone size={20} /> Darmowa Wycena
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
                        <Image
                            src={cityData.image}
                            alt="Realizacja u klienta"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Dlaczego wybrać nas w miejscowości <span className="text-[#44AF33]">{cityData.name}</span>?</h2>
                        <div className="space-y-4">
                            {[
                                'Dojazd gratis na terenie miasta i okolic',
                                'Realizacja w 24h od zgłoszenia',
                                'Precyzyjny sprzęt - brak kurzu w domu',
                                'Setki zadowolonych klientów w regionie'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-[#44AF33]/20 flex items-center justify-center text-[#44AF33] shrink-0">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <p className="text-gray-400 leading-relaxed">
                                Mieszkańcy miasta <strong>{cityData.name}</strong> coraz częściej decydują się na instalację ogrzewania podłogowego. Nasza metoda frezowania to najszybsza droga do ciepłej podłogi bez generalnego remontu. Zadzwoń i dowiedz się, kiedy możemy być u Ciebie.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Bar */}
            <div className="bg-[#44AF33] py-12">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Mieszkasz w mieście {cityData.name}?</h3>
                        <p className="text-white/90">Skontaktuj się z nami już dziś i otrzymaj rabat na usługę.</p>
                    </div>
                    <Link href="/kontakt" className="px-8 py-4 bg-white text-[#44AF33] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
                        Skontaktuj się Teraz
                    </Link>
                </div>
            </div>
        </div>
    );
}
