'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { getHomepageGallery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { ArrowRight, MoveLeft, MoveRight } from 'lucide-react';

const fallbackImages = [
    { url: '/img1.png', alt: 'Realizacja 1' },
    { url: '/img2.png', alt: 'Realizacja 2' },
    { url: '/img3.png', alt: 'Realizacja 3' },
    { url: '/img1.png', alt: 'Realizacja 4' },
];

function Card({ item, index }) {
    return (
        <motion.div
            className="relative min-w-[300px] md:min-w-[450px] aspect-[3/4] md:aspect-[4/3] rounded-3xl overflow-hidden bg-[#2D2E30] border border-white/10 shadow-2xl shrink-0 cursor-grab active:cursor-grabbing"
            whileHover={{ scale: 1.02, zIndex: 10 }}
            transition={{ duration: 0.3 }}
        >
            {item._type === 'file' || (item.mimeType && item.mimeType.startsWith('video/')) ? (
                <video
                    controls={false}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover pointer-events-none"
                >
                    <source src={item.url} type={item.mimeType || 'video/mp4'} />
                </video>
            ) : (
                <Image
                    src={item.url}
                    alt="Realizacja Gallery"
                    fill
                    draggable={false}
                    className="object-cover pointer-events-none"
                />
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="absolute bottom-6 left-6 pointer-events-none">
                <p className="text-[#44AF33] font-bold text-sm tracking-uppercase mb-1">Realizacja #{index + 1}</p>
                <h3 className="text-white text-xl font-bold">Frezowanie Małopolska</h3>
            </div>
        </motion.div>
    );
}

export default function GalleryPreview() {
    const [items, setItems] = useState([]);
    const [width, setWidth] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await client.fetch(`*[_type == "homepage"][0] {
            showcaseGallery[]{
              _key,
              _type,
              "url": asset->url,
              "mimeType": asset->mimeType
            }
          }`);
                if (data?.showcaseGallery && data.showcaseGallery.length > 0) {
                    setItems(data.showcaseGallery);
                } else {
                    setItems(fallbackImages);
                }
            } catch (error) {
                setItems(fallbackImages);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [items]);

    return (
        <section className="py-24 bg-[#3D3E40] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#44AF33]/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Zobacz <span className="text-[#44AF33]">Efekty</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg text-lg">
                        Przesuń, aby odkryć jakość naszej pracy. Kliknij i przeciągnij.
                    </p>
                </div>
                <div className="hidden md:flex gap-4 text-white/20">
                    <MoveLeft size={32} />
                    <MoveRight size={32} />
                </div>
            </div>

            {/* Draggable Carousel */}
            <div className="pl-4 md:pl-[10vw] relative z-20">
                <motion.div
                    ref={carouselRef}
                    className="cursor-grab active:cursor-grabbing overflow-hidden"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        whileTap={{ cursor: "grabbing" }}
                        className="flex gap-6 md:gap-8 w-max pr-12 md:pr-[10vw]"
                    >
                        {items.map((item, i) => (
                            <Card key={item._key || i} item={item} index={i} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
