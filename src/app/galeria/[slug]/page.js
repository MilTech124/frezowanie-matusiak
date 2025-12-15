import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { getProjectBySlug } from '@/sanity/lib/queries';

export const revalidate = 60;

export async function generateMetadata({ params }) {
    const project = await getProjectBySlug(params.slug);
    if (!project) return { title: 'Nie znaleziono projektu' };
    return {
        title: `${project.title} | Realizacje Frezowanie Podłóg`,
        description: `Zobacz szczegóły realizacji: ${project.title}. Lokalizacja: ${project.location || 'Małopolska'}.`,
    };
}

export default async function ProjectPage({ params }) {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-[#3D3E40] text-gray-100">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full">
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-gray-800" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D3E40] via-[#3D3E40]/60 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <Link href="/galeria" className="inline-flex items-center gap-2 text-gray-300 hover:text-[#44AF33] transition-colors mb-6 backdrop-blur-md bg-black/30 px-4 py-2 rounded-full">
                            <ArrowLeft size={18} /> Powrót do galerii
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h1>
                        <div className="flex items-center gap-4 text-[#44AF33] font-medium">
                            <span className="flex items-center gap-2"><MapPin size={20} /> {project.location || 'Małopolska'}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Description */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#44AF33] pl-4">Opis realizacji</h3>
                        {project.description ? (
                            <PortableText value={project.description} />
                        ) : (
                            <p className="text-gray-400 italic">Brak szczegółowego opisu.</p>
                        )}
                    </div>

                    {/* Gallery */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#44AF33] pl-4">Galeria zdjęć</h3>
                        {project.gallery && project.gallery.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.gallery.map((img, i) => (
                                    <div key={img.asset._id} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                                        <Image
                                            src={img.asset.url}
                                            alt={`Zdjęcie ${i + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400">Brak dodatkowych zdjęć.</p>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6">Szczegóły</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-400">Lokalizacja</span>
                                <span className="text-white font-medium">{project.location || '-'}</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-400">Usługa</span>
                                <span className="text-white font-medium">Frezowanie bezpyłowe</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-400">Status</span>
                                <span className="text-[#44AF33] font-medium flex items-center gap-1"><CheckCircle2 size={14} /> Zakończono</span>
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <h4 className="font-bold text-white mb-2">Potrzebujesz podobnej usługi?</h4>
                            <p className="text-sm text-gray-400 mb-4">Skontaktuj się z nami i zamów darmową wycenę.</p>
                            <Link href="/kontakt" className="block w-full text-center bg-[#44AF33] hover:bg-[#38942b] text-white font-bold py-3 rounded-lg transition-colors">
                                Zamów Wycenę
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
