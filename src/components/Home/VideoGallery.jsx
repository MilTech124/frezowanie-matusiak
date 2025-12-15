'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';
import { getVideos } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

export default function VideoGallery() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Fetch videos client-side to allow interactivity if needed, 
        // or we can pass as prop. Using direct fetch for simplicity here.
        const fetchVideos = async () => {
            const query = `*[_type == "project" && defined(video)] | order(_createdAt desc) [0...3] {
         _id,
         title,
         slug,
         "videoUrl": video.asset->url,
         "imageUrl": mainImage.asset->url
       }`;
            const data = await client.fetch(query);
            setVideos(data);
        };
        fetchVideos();
    }, []);

    if (videos.length === 0) return null;

    return (
        <section className="py-24 bg-[#363739]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Video <span className="text-[#44AF33]">Realizacje</span></h2>
                        <p className="text-gray-400 max-w-xl">
                            Zobacz na własne oczy, jak szybko i czysto pracujemy.
                        </p>
                    </div>
                    <Link href="/galeria" className="hidden md:flex items-center gap-2 text-[#44AF33] font-bold hover:underline">
                        Zobacz całą galerię <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((item) => (
                        <div key={item._id} className="group relative rounded-xl overflow-hidden shadow-2xl bg-black">
                            <div className="aspect-[9/16] md:aspect-video relative">
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    poster={item.imageUrl}
                                >
                                    <source src={item.videoUrl} type="video/mp4" />
                                    Twój system nie wspiera wideo.
                                </video>
                            </div>
                            <div className="p-4 bg-[#2D2E30]">
                                <h3 className="text-white font-bold">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link href="/galeria" className="inline-flex items-center gap-2 text-[#44AF33] font-bold hover:underline">
                        Zobacz całą galerię <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
