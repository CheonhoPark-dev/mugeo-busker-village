import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { src: '/images/activate_1.jpg', alt: 'Activity 1', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: '/images/activate_2.jpg', alt: 'Activity 2', span: 'col-span-1 md:col-span-1 row-span-1' },
    { src: '/images/activate_3.jpg', alt: 'Activity 3', span: 'col-span-1 md:col-span-1 row-span-1' },
    { src: '/images/activate_4.jpg', alt: 'Activity 4', span: 'col-span-1 md:col-span-2 row-span-1' },
];

const Activities = () => {
    return (
        <div className="py-12 md:py-24 bg-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark">활동 모습</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        무거 버스커 마을의 생생한 활동 현장을 소개합니다.
                        함께 웃고 즐기며 만들어가는 우리의 추억들입니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-2xl shadow-md ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block bg-white px-8 py-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold mb-2">함께하고 싶으신가요?</h3>
                        <p className="text-gray-600 mb-4">언제든 무거 버스커 마을의 문을 두드려주세요.</p>
                        <a href="/contact" className="text-primary font-bold hover:underline">문의하기 &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;
