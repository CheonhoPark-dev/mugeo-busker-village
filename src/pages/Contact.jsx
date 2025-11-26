import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-16 md:py-24 bg-light relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(103,232,249,0.2),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(96,165,250,0.15),transparent_25%)]" />
            <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-14 space-y-3"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/60 text-xs uppercase tracking-[0.15em] text-gray-700">Contact</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">문의하기</h2>
                        <p className="text-gray-600 text-lg">궁금한 점이 있으시거나 참여를 원하시면 언제든 연락주세요.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="bg-white/90 backdrop-blur-sm p-10 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-muted/70"
                    >
                        <h3 className="text-2xl font-display text-dark mb-8 text-center">연락처 정보</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold mb-1">담당자 연락처</p>
                                    <p className="text-2xl font-semibold text-dark">010-9388-5356</p>
                                    <p className="text-lg text-gray-600">하해송</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold mb-1">활동 지역</p>
                                    <p className="text-2xl font-semibold text-dark">울산광역시 남구 무거동</p>
                                    <p className="text-lg text-gray-600">무거천 일대 및 커뮤니티 센터</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-accent/15 text-accent flex items-center justify-center">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold mb-1">소통 채널</p>
                                    <p className="text-lg text-gray-600">현재 준비 중입니다. 곧 공유드릴게요.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
