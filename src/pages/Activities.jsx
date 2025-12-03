import React from 'react';
import { motion } from 'framer-motion';

const images = [
    // Flash Mob
    { src: '/images/flash_mob_1.jpg', alt: 'Flash Mob 1', span: 'col-span-1 md:col-span-2 row-span-2', label: 'Flash Mob' },
    { src: '/images/flash_mob_2.jpg', alt: 'Flash Mob 2', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Flash Mob' },
    { src: '/images/flash_mob_3.jpg', alt: 'Flash Mob 3', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Flash Mob' },
    { src: '/images/flash_mob_4.jpg', alt: 'Flash Mob 4', span: 'col-span-1 md:col-span-2 row-span-1', label: 'Flash Mob' },

    // Practice
    { src: '/images/practice_1.jpg', alt: 'Practice 1', span: 'col-span-1 md:col-span-1 row-span-2', label: 'Practice' },
    { src: '/images/practice_2.jpg', alt: 'Practice 2', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Practice' },
    { src: '/images/practice_3.jpg', alt: 'Practice 3', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Practice' },
    { src: '/images/practice_4.jpg', alt: 'Practice 4', span: 'col-span-1 md:col-span-2 row-span-1', label: 'Practice' },
    { src: '/images/practice_5.jpg', alt: 'Practice 5', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Practice' },
    { src: '/images/practice_6.jpg', alt: 'Practice 6', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Practice' },

    // Reone Performance
    { src: '/images/reone_performance_1.jpg', alt: 'Performance 1', span: 'col-span-1 md:col-span-2 row-span-2', label: 'Performance' },
    { src: '/images/reone_performance_2.jpg', alt: 'Performance 2', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Performance' },
    { src: '/images/reone_performance_3.jpg', alt: 'Performance 3', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Performance' },
    { src: '/images/reone_performance_4.jpg', alt: 'Performance 4', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Performance' },
    { src: '/images/reone_performance_5.jpg', alt: 'Performance 5', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Performance' },
    { src: '/images/reone_performance_6.jpg', alt: 'Performance 6', span: 'col-span-1 md:col-span-1 row-span-1', label: 'Performance' },
    { src: '/images/reone_performance_7.jpg', alt: 'Performance 7', span: 'col-span-1 md:col-span-2 row-span-1', label: 'Performance' },
];

const Activities = () => {
    const [activeCategory, setActiveCategory] = React.useState('All');

    const categories = ['All', 'Flash Mob', 'Practice', 'Performance'];

    const filteredImages = images.filter(img => {
        if (activeCategory === 'All') return true;
        if (activeCategory === 'Flash Mob') return img.src.includes('flash_mob');
        if (activeCategory === 'Practice') return img.src.includes('practice');
        if (activeCategory === 'Performance') return img.src.includes('reone_performance');
        return true;
    });

    return (
        <div className="py-16 md:py-24 bg-light min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 space-y-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/60 text-xs uppercase tracking-[0.15em] text-gray-700">Activities</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">활동 모습</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed break-keep">
                        무거 버스커 마을의 생생한 활동 현장을 소개합니다. 함께 웃고 즐기며 만들어가는 우리의 추억들입니다.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-dark text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-muted/60'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[260px] md:auto-rows-[320px]"
                >
                    {filteredImages.map((img, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={img.src}
                            className={`relative group overflow-hidden rounded-3xl border border-muted/60 bg-white/70 ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent opacity-80" />
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-white/70">Scene</p>
                                    <p className="text-lg font-semibold">{img.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col gap-3 items-center bg-white px-10 py-7 rounded-3xl shadow-[0_15px_45px_rgba(15,23,42,0.08)] border border-muted/70">
                        <h3 className="text-2xl font-display text-dark">함께하고 싶으신가요?</h3>
                        <p className="text-gray-600">언제든 무거 버스커 마을의 문을 두드려주세요.</p>
                        <a href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold border-b border-primary pb-1">문의하기 →</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;
