import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { src: '/images/activate_1.jpg', alt: 'Activity 1', span: 'col-span-1 md:col-span-2 row-span-2', label: '거리 버스킹' },
    { src: '/images/activate_2.jpg', alt: 'Activity 2', span: 'col-span-1 md:col-span-1 row-span-1', label: '연습 세션' },
    { src: '/images/activate_3.jpg', alt: 'Activity 3', span: 'col-span-1 md:col-span-1 row-span-1', label: '합주' },
    { src: '/images/activate_4.jpg', alt: 'Activity 4', span: 'col-span-1 md:col-span-2 row-span-1', label: '소통의 시간' },
];

const Activities = () => {
    return (
        <div className="py-16 md:py-24 bg-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-14 space-y-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/60 text-xs uppercase tracking-[0.15em] text-gray-700">Activities</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">활동 모습</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed break-keep">
                        무거 버스커 마을의 생생한 활동 현장을 소개합니다. 함께 웃고 즐기며 만들어가는 우리의 추억들입니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[260px] md:auto-rows-[320px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.alt}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
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
                                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-sm font-semibold bg-white/10 backdrop-blur">
                                    {index + 1}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

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
