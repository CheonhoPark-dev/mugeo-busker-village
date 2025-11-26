import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="py-16 md:py-24 bg-light">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto space-y-16">
                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/80 backdrop-blur-sm border border-muted/70 rounded-3xl p-10 md:p-14 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/60 text-xs uppercase tracking-[0.15em] text-gray-700 mb-6">
                            About · Philosophy
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display text-dark mb-6">무거 버스커 마을 소개</h2>
                        <div className="text-lg leading-relaxed text-gray-700 space-y-5 break-keep">
                            <p>
                                <span className="font-bold text-primary text-xl">기타를 잘 치는 것보다 즐기는 것을 추구하는 모임입니다.</span>
                            </p>
                            <p>
                                무거동 주민이라면 누구나 부담 없이 참여하고 자유롭고 편하게 즐길 수 있습니다.
                                우리는 화려한 기술이나 뛰어난 실력보다, 음악을 대하는 <strong>진심</strong>과
                                순간에 대한 <strong>몰입</strong>을 더 소중하게 생각합니다.
                            </p>
                            <p>
                                기타를 좋아하는 마음만 있다면 언제나 당신을 환영합니다.
                                함께 연주하고, 노래하며, 우리 마을의 이야기를 만들어가요.
                            </p>
                        </div>
                    </motion.div>

                    {/* History */}
                    <div className="bg-white border border-muted/70 rounded-3xl p-10 md:p-12 shadow-[0_15px_50px_rgba(15,23,42,0.05)]">
                        <h3 className="text-3xl font-display text-dark mb-8">우리가 걸어온 길</h3>

                        <div className="relative pl-6 md:pl-10">
                            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-muted to-transparent" />

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-8 pb-10"
                            >
                                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-primary shadow-lg" />
                                <span className="text-sm font-semibold text-primary tracking-[0.12em] uppercase">2025.11.23</span>
                                <h4 className="text-2xl font-semibold text-dark mt-2 mb-2">무거천 플래시몹</h4>
                                <p className="text-gray-600 leading-relaxed break-keep">
                                    무거천에서 진행된 첫 번째 대규모 플래시몹 행사. 많은 주민들과 함께 음악의 즐거움을 나누었습니다.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-8 opacity-60"
                            >
                                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-muted" />
                                <span className="text-sm font-semibold text-gray-500 tracking-[0.12em] uppercase">Coming Soon</span>
                                <h4 className="text-2xl font-semibold text-gray-600 mt-2 mb-2">다음 이야기</h4>
                                <p className="text-gray-500 leading-relaxed break-keep">무거 버스커 마을의 다음 이야기가 곧 시작됩니다.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
