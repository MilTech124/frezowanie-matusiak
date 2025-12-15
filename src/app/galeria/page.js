import Image from 'next/image';
import { getGalleryImages } from '@/sanity/lib/queries';

export const metadata = {
    title: 'Galeria Zdjęć | Frezowanie Podłóg Małopolska',
    description: 'Zobacz zdjęcia z naszych realizacji. Czyste frezowanie, instalacja rur, gotowe podłogi.',
};

export const revalidate = 60;

export default async function GaleriaPage() {
    const data = await getGalleryImages();

    // Flatten all images AND videos into a single array
    const allImages = data.flatMap(project => {
        const items = [];

        // Add main video if exists
        if (project.mainVideo) {
            items.push({
                _type: 'file',
                asset: project.mainVideo,
                projectTitle: project.title
            });
        }

        // Add gallery items if exist
        if (project.gallery) {
            items.push(...project.gallery.map(img => ({
                ...img,
                projectTitle: project.title
            })));
        }

        return items;
    });

    return (
        <div className="pt-24 pb-20 container mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Galeria <span className="text-[#44AF33]">Zdjęć</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Przegląd wszystkich naszych prac w jednym miejscu.
                </p>
            </div>

            {allImages.length > 0 ? (
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {allImages.map((item) => (
                        <div key={item.asset._id} className="relative break-inside-avoid rounded-xl overflow-hidden group bg-black">
                            {item._type === 'file' || item.asset.mimeType?.startsWith('video/') ? (
                                <div className="relative">
                                    <video
                                        controls
                                        preload="metadata"
                                        className="w-full h-auto object-cover"
                                    >
                                        <source src={item.asset.url} type={item.asset.mimeType || 'video/mp4'} />
                                    </video>
                                </div>
                            ) : (
                                <div className="relative">
                                    <Image
                                        src={item.asset.url}
                                        alt={item.projectTitle || 'Realizacja'}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-white font-bold text-sm">{item.projectTitle}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-gray-400">Jeszcze nie dodano zdjęć do galerii.</p>
                    <p className="text-sm text-gray-600 mt-2">Dodaj zdjęcia do projektów w Studio.</p>
                </div>
            )}
        </div>
    );
}
