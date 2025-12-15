import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/sanity/lib/queries';

export const metadata = {
    title: 'Blog | Porady o Frezowaniu i Ogrzewaniu Podłogowym',
    description: 'Przeczytaj nasz blog i dowiedz się więcej o frezowaniu, ogrzewaniu podłogowym i remontach.',
};

export const revalidate = 60;

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="pt-24 pb-20 container mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog <span className="text-[#44AF33]">&</span> Porady</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Baza wiedzy o ogrzewaniu podłogowym.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <article key={post._id} className="bg-[#2D2E30] rounded-xl overflow-hidden border border-white/5 hover:border-[#44AF33]/50 transition-all flex flex-col group">
                            <Link href={`/blog/${post.slug.current}`} className="aspect-[16/10] bg-gray-800 relative overflow-hidden block">
                                {post.imageUrl ? (
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-600">
                                        Brak zdjęcia
                                    </div>
                                )}
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-[#44AF33] text-xs font-bold uppercase tracking-wider mb-2">
                                    {new Date(post.publishedAt).toLocaleDateString('pl-PL')}
                                </div>
                                <Link href={`/blog/${post.slug.current}`}>
                                    <h2 className="text-xl font-bold text-white mb-3 leading-snug hover:text-[#44AF33] transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>
                                <div className="mt-auto pt-4">
                                    <Link href={`/blog/${post.slug.current}`} className="text-white text-sm font-medium hover:text-[#44AF33] transition-colors inline-flex items-center gap-2">
                                        Czytaj więcej &rarr;
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-gray-400">Jeszcze nie dodano wpisów na bloga.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
