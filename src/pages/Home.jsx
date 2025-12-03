import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Music, Heart, Users, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 140]);

    const values = [
        {
            icon: <Heart className="w-6 h-6 text-primary" />,
            title: '누구나 환영',
            desc: '실력은 중요하지 않습니다. 기타를 사랑하는 마음만 있다면 언제든 환영합니다.',
        },
        {
            icon: <Music className="w-6 h-6 text-accent" />,
            title: '진심과 몰입',
            desc: '기술보다는 진심을, 경쟁보다는 몰입을 추구하며 함께 성장합니다.',
        },
        {
            icon: <Users className="w-6 h-6 text-secondary" />,
            title: '마을 공동체',
            desc: '무거동 주민들이 모여 음악으로 소통하고 즐거운 마을을 만듭니다.',
        },
    ];

    const galleryShots = [
        { src: '/images/flash_mob_2.jpg', title: '열정적인 연주' },
        { src: '/images/flash_mob_1.jpg', title: '소통하는 시간' },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <video
                        src="/videos/busker-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/60 to-dark" />
                </motion.div>
                <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_15%_20%,rgba(103,232,249,0.35),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.25),transparent_20%)]" />

                <div className="container mx-auto px-6 relative z-10 text-white">
                    <div className="max-w-4xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg text-xs uppercase tracking-[0.2em]"
                        >
                            Mugeo Busker Village · Community
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl leading-tight font-display break-keep"
                        >
                            기타를 즐기는 것에
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-highlight">진심인 우리들</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed break-keep"
                        >
                            무거동 주민이라면 누구나 부담 없이 참여하고
                            <br className="hidden md:block" />
                            자유롭고 편하게 즐길 수 있는 문화 놀이터
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3"
                        >
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-dark font-semibold shadow-[0_15px_40px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 transition"
                            >
                                마을 소개 보기 <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/25 text-white hover:bg-white/10 font-semibold"
                            >
                                참여 문의하기
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
                >
                    <div className="w-9 h-14 border border-white/25 rounded-full flex justify-center p-1">
                        <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
                    </div>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/60 text-xs uppercase tracking-[0.15em] text-gray-700">
                                Core Values
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display text-dark break-keep">우리가 추구하는 가치</h2>
                            <p className="text-lg text-gray-600 leading-relaxed break-keep">
                                기타를 잘 치는 것보다 즐기는 마음을 나누는 우리만의 원칙입니다.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {values.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                    className="rounded-2xl bg-white border border-muted/70 shadow-[0_20px_60px_rgba(15,23,42,0.06)] p-6 space-y-3 hover:-translate-y-1 transition"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-light flex items-center justify-center border border-muted/70">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-dark">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Moments Preview */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(103,232,249,0.12),transparent_25%),radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.08),transparent_20%)]" />
                <div className="container mx-auto px-6 relative">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                        <div>
                            <span className="text-sm uppercase tracking-[0.15em] text-primary">Gallery</span>
                            <h2 className="text-4xl md:text-5xl font-display text-dark mt-2">생생한 활동 모습</h2>
                            <p className="text-gray-600 mt-4 max-w-2xl break-keep">함께 웃고 연주하며 쌓인 순간들. 현장의 온기를 그대로 담았습니다.</p>
                        </div>
                        <Link
                            to="/activities"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-dark text-white font-semibold shadow-sm hover:-translate-y-0.5 transition"
                        >
                            더 보기 <ChevronRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-auto md:h-full group"
                        >
                            <img src="/images/flash_mob_3.jpg" alt="함께하는 즐거움" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 text-white space-y-1">
                                <p className="text-sm uppercase tracking-[0.18em] text-white/70">Moment</p>
                                <p className="text-2xl font-display">함께하는 즐거움</p>
                            </div>
                        </motion.div>

                        <div className="flex flex-col gap-6">
                            {galleryShots.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative overflow-hidden rounded-3xl aspect-[16/9] group"
                                >
                                    <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-dark/15 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-6 text-white space-y-1">
                                        <p className="text-sm uppercase tracking-[0.18em] text-white/70">Scene</p>
                                        <p className="text-xl font-display">{item.title}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-6">
                    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-primary via-secondary to-primary text-white p-12 md:p-16 shadow-[0_25px_80px_rgba(15,23,42,0.25)]">
                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,rgba(103,232,249,0.45),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.35),transparent_25%)]" />
                        <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight break-keep">
                                    당신의 기타 소리를 들려주세요
                                </h2>
                                <p className="text-lg text-white/80 max-w-2xl leading-relaxed break-keep">
                                    혼자 치는 기타도 좋지만, 함께 치면 더 즐겁습니다. 무거 버스커 마을에서 당신의 열정과 리듬을 나눠주세요.
                                </p>
                            </div>
                            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md space-y-4 shadow-inner">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                        <Music size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.15em] text-white/70">Join us</p>
                                        <p className="text-lg font-semibold">무거동 주민 누구나</p>
                                    </div>
                                </div>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-dark font-semibold shadow-lg hover:-translate-y-0.5 transition"
                                >
                                    멤버 가입 문의하기 <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
