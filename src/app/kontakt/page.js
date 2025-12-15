import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'Kontakt | Darmowa Wycena Frezowania',
    description: 'Skontaktuj się z nami w sprawie frezowania podłóg. Szybka wycena, wolne terminy. Działamy w całej Małopolsce.',
};

export default function KontaktPage() {
    return (
        <div className="pt-24 pb-20 container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Info */}
                <div>
                    <h1 className="text-4xl font-bold text-white mb-6">Skontaktuj się <span className="text-[#44AF33]">z nami</span></h1>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Masz pytania? Chcesz umówić termin lub poprosić o wycenę?
                        Jesteśmy do Twojej dyspozycji. Zadzwoń lub napisz.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#44AF33]/10 rounded-lg flex items-center justify-center text-[#44AF33] shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Telefon</h3>
                                <p className="text-gray-400">728 622 674</p>
                                <p className="text-gray-500 text-sm">Dostępni 8:00 - 18:00</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#44AF33]/10 rounded-lg flex items-center justify-center text-[#44AF33] shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Email</h3>
                                <p className="text-gray-400">matusiakinwbud@gmail.com</p>
                                <p className="text-gray-500 text-sm">Odpisujemy w ciągu 24h</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#44AF33]/10 rounded-lg flex items-center justify-center text-[#44AF33] shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Obszar działania</h3>
                                <p className="text-gray-400">Cała Małopolska</p>
                                <p className="text-gray-500 text-sm">Nowy Sącz, Limanowa, Kraków i okolice</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <h3 className="text-white font-bold text-lg mb-4">Znajdź nas w sieci</h3>
                            <div className="flex flex-col gap-3">
                                <a href="https://www.facebook.com/profile.php?id=61568616265111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#44AF33] transition-colors">
                                    <span className="font-bold">Facebook</span>
                                </a>
                                <a href="https://www.instagram.com/matusiakfirma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#44AF33] transition-colors">
                                    <span className="font-bold">Instagram</span>
                                </a>
                                <a href="https://www.tiktok.com/@krystian.matusiak65" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#44AF33] transition-colors">
                                    <span className="font-bold">TikTok: krystian.matusiak65</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <ContactForm />
            </div>
        </div>
    );
}
