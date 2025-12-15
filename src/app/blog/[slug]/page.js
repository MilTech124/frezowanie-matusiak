import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { getPostBySlug } from '@/sanity/lib/queries';
import { ArrowLeft, Calendar } from 'lucide-react';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Wpis nie znaleziony',
        };
    }

    return {
        title: `${post.title} | Blog Frezowanie Podłóg`,
        description: post.title,
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    return (
        <article className="pt-24 pb-20 container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="mb-12">
                <Link href="/blog" className="inline-flex items-center gap-2 text-[#44AF33] hover:text-white transition-colors mb-8 font-medium">
                    <ArrowLeft size={20} /> Wróć do bloga
                </Link>

                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                        <Calendar size={16} />
                        {new Date(post.publishedAt).toLocaleDateString('pl-PL', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                </div>
            </div>

            {/* Main Image */}
            {post.imageUrl && (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[#44AF33] prose-strong:text-white prose-li:text-gray-300 text-gray-300">
                <PortableText value={post.body} />
            </div>
        </article>
    );
}
