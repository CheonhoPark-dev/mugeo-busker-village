
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Music, Heart, Users, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src="/images/activate_1.jpg"
                        alt="Busking Performance"
                        className="w-full h-full object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[1px]" />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-6 inline-block px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium tracking-wider uppercase"
                    >
                        Mugeo Busker Village
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight tracking-tight"
                    >
                        기타를 <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">즐기는 것</span>에<br />
                        진심인 우리들
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-200 font-light leading-relaxed"
                    >
                        무거동 주민이라면 누구나 부담 없이 참여하고<br className="hidden md:block" />
                        자유롭고 편하게 즐길 수 있는 문화 놀이터
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            to="/about"
                            className="group relative px-8 py-4 bg-primary text-white rounded-full text-lg font-bold overflow-hidden shadow-lg hover:shadow-primary/50 transition-all"
                        >
                            <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                마을 소개 보기 <ArrowRight size={20} />
                            </span>
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-lg font-bold hover:bg-white/20 transition-all"
                        >
                            참여 문의하기
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-white rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Core Values</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 text-dark">우리가 추구하는 가치</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Heart className="w-8 h-8 text-primary" />,
                                title: "누구나 환영",
                                desc: "실력은 중요하지 않습니다. 기타를 사랑하는 마음만 있다면 언제든 환영합니다."
                            },
                            {
                                icon: <Music className="w-8 h-8 text-secondary" />,
                                title: "진심과 몰입",
                                desc: "기술보다는 진심을, 경쟁보다는 몰입을 추구하며 함께 성장합니다."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-accent" />,
                                title: "마을 공동체",
                                desc: "무거동 주민들이 모여 음악으로 소통하고 즐거운 마을을 만듭니다."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group p-8 rounded-3xl bg-light border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-dark">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Moments Preview */}
            <section className="py-24 bg-dark text-white overflow-hidden relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-accent font-bold tracking-wider uppercase text-sm">Gallery</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">생생한 활동 모습</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px] relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 relative group overflow-hidden rounded-2xl"
                        >
                            <img src="/images/activate_2.jpg" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-lg font-bold">함께하는 즐거움</p>
                            </div>
                        </motion.div>
                        <div className="md:col-span-2 grid grid-rows-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative group overflow-hidden rounded-2xl"
                            >
                                <img src="/images/activate_3.jpg" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="font-bold">열정적인 연주</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="relative group overflow-hidden rounded-2xl"
                            >
                                <img src="/images/activate_4.jpg" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="font-bold">소통하는 시간</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Fade out overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-dark via-dark/80 to-transparent z-10 pointer-events-none" />
                    </div>

                    {/* More Button */}
                    <div className="flex justify-center mt-8 relative z-20">
                        <Link
                            to="/activities"
                            className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-bold transition-all"
                        >
                            더 많은 활동 보기 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-24 bg-light">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent" />

                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-dark">
                            당신의 기타 소리를<br />
                            들려주세요
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                            혼자 치는 기타도 좋지만, 함께 치면 더 즐겁습니다.<br />
                            무거 버스커 마을에서 당신의 열정을 나눠주세요.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 text-dark font-bold text-lg border-b-2 border-primary hover:text-primary transition-colors pb-1"
                        >
                            멤버 가입 문의하기 <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

