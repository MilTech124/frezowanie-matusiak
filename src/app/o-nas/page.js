import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Award, Clock, MapPin } from 'lucide-react';

export const metadata = {
    title: 'O nas | Matusiak Frezowanie Podłóg',
    description: 'Poznaj firmę Matusiak. Profesjonalne frezowanie podłóg pod ogrzewanie podłogowe w Małopolsce. Doświadczenie i nowoczesny sprzęt.',
};

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">O Naszej <span className="text-[#44AF33]">Firmie</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Jesteśmy liderem w bezpyłowym frezowaniu podłóg. Łączymy pasję do budownictwa z nowoczesną technologią.
                    </p>
                </div>

                {/* content grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <Image
                            src="/hero.jpg"
                            alt="Praca przy frezowaniu"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10">
                                <p className="text-white font-bold text-xl mb-2">Krystian Matusiak</p>
                                <p className="text-[#44AF33] text-sm font-medium uppercase tracking-wide">Właściciel</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">Twój partner w <span className="text-[#44AF33]">remoncie</span></h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Firma Matusiak to synonim jakości i precyzji. Specjalizujemy się w przygotowywaniu podłoży betonowych pod instalację ogrzewania podłogowego. Naszą misją jest umożliwienie montażu nowoczesnego ogrzewania bez konieczności kucia wylewek i podnoszenia poziomu podłogi.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#44AF33]/50 transition-colors">
                                <Award size={32} className="text-[#44AF33] mb-4" />
                                <h3 className="text-white font-bold mb-2">Jakość</h3>
                                <p className="text-gray-400 text-sm">Pracujemy na najwyższej klasy maszynach, co gwarantuje równe rowki i brak pyłu.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#44AF33]/50 transition-colors">
                                <Clock size={32} className="text-[#44AF33] mb-4" />
                                <h3 className="text-white font-bold mb-2">Terminowość</h3>
                                <p className="text-gray-400 text-sm">Szanujemy Twój czas. Zlecenie wykonujemy zazwyczaj w 1 dzień roboczy.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#44AF33]/50 transition-colors">
                                <CheckCircle2 size={32} className="text-[#44AF33] mb-4" />
                                <h3 className="text-white font-bold mb-2">Czystość</h3>
                                <p className="text-gray-400 text-sm">Nasze odkurzacze przemysłowe wyłapują 99% pyłu. Zostawiamy porządek.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#44AF33]/50 transition-colors">
                                <MapPin size={32} className="text-[#44AF33] mb-4" />
                                <h3 className="text-white font-bold mb-2">Lokalnie</h3>
                                <p className="text-gray-400 text-sm">Jesteśmy z Małopolski i tu działamy najprężniej. Nowy Sącz, Limanowa, Kraków.</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-[#44AF33] hover:bg-[#38942b] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-[#44AF33]/20">
                                Skontaktuj się z nami
                            </Link>
                        </div>
                    </div>
                </div>

                {/* SEO Text Section */}
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10">
                        <h2 className="text-3xl font-bold text-white mb-6">Dlaczego warto wybrać frezowanie pod ogrzewanie podłogowe?</h2>
                        <div className="text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                <strong>Frezowanie podłóg pod ogrzewanie podłogowe</strong> to innowacyjna metoda, która pozwala na instalację nowoczesnego systemu grzewczego bez konieczności kucia starych wylewek. Dzięki temu oszczędzasz czas i pieniądze, unikając generalnego remontu i bałaganu. Nasza firma oferuje kompleksowe usługi frezowania w betonie, wylewkach cementowych i anhydrytowych na terenie całej Małopolski.
                            </p>
                            <p>
                                Wykonujemy precyzyjne rowki pod rury PEX o standardowej średnicy (16mm lub 17mm). Dzięki zastosowaniu profesjonalnych maszyn z diamentowymi tarczami, proces jest szybki i praktycznie bezpyłowy. Podłączamy potężne odkurzacze przemysłowe, które na bieżąco odsysają urobiony materiał, pozostawiając budowę czystą i gotową do dalszych prac.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-[#44AF33]">Oszczędność i Ekologia</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Ogrzewanie podłogowe to jeden z najbardziej efektywnych sposobów ogrzewania domu. Dzięki równomiernemu rozkładowi temperatury, możesz obniżyć temperaturę czynnika grzewczego, co przekłada się na realne oszczędności w rachunkach za ogrzewanie. Jest to idealne rozwiązanie do współpracy z pompami ciepła oraz kotłami kondensacyjnymi. Wybierając frezowanie, decydujesz się na ekologiczne i ekonomiczne rozwiązanie dla swojego domu.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-[#44AF33]">Szybka Realizacja w Małopolsce</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Działamy lokalnie, co pozwala nam na szybki dojazd do klienta. Obsługujemy miasta takie jak <strong>Nowy Sącz, Limanowa, Kraków, Brzesko, Bochnia, Tarnów, Gorlice</strong> oraz mniejsze miejscowości w regionie. Standardowy dom o powierzchni 100-150m² jesteśmy w stanie przygotować pod instalację w ciągu jednego dnia roboczego. Nie czekaj, zadzwoń do nas i zapytaj o wolny termin!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
