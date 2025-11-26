import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="py-12 md:py-24">
            <div className="container mx-auto px-6">
                {/* Introduction */}
                <div className="max-w-4xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold mb-8 text-center text-dark"
                    >
                        무거 버스커 마을 소개
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-lg leading-relaxed text-gray-700 space-y-6"
                    >
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
                    </motion.div>
                </div>

                {/* History */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-3xl font-display font-bold mb-12 text-center">우리가 걸어온 길</h3>

                    <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm" />
                            <span className="text-sm font-bold text-primary tracking-wider uppercase mb-2 block">2025.11.23</span>
                            <h4 className="text-xl font-bold text-dark mb-2">무거천 플래시몹</h4>
                            <p className="text-gray-600">
                                무거천에서 진행된 첫 번째 대규모 플래시몹 행사.
                                많은 주민들과 함께 음악의 즐거움을 나누었습니다.
                            </p>
                        </motion.div>

                        {/* Placeholder for future history */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12 opacity-50"
                        >
                            <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-gray-300 border-4 border-white" />
                            <span className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-2 block">Coming Soon</span>
                            <h4 className="text-xl font-bold text-gray-400 mb-2">다음 이야기</h4>
                            <p className="text-gray-400">
                                무거 버스커 마을의 다음 이야기가 곧 시작됩니다.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
