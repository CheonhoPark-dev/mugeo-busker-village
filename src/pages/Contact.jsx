import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-12 md:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-dark">문의하기</h2>
                        <p className="text-gray-600 text-lg">
                            궁금한 점이 있으시거나 참여를 원하시면 언제든 연락주세요.
                        </p>
                    </motion.div>

                    <div className="flex justify-center">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 w-full max-w-2xl"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-dark text-center">연락처 정보</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                                        <Phone size={32} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">담당자 연락처</p>
                                        <p className="text-2xl font-bold text-dark">010-9388-5356</p>
                                        <p className="text-lg text-gray-600">하해송</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="bg-secondary/10 p-4 rounded-full text-secondary shrink-0">
                                        <MapPin size={32} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">활동 지역</p>
                                        <p className="text-2xl font-bold text-dark">울산광역시 남구 무거동</p>
                                        <p className="text-lg text-gray-600">무거천 일대 및 커뮤니티 센터</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="bg-accent/20 p-4 rounded-full text-yellow-600 shrink-0">
                                        <MessageCircle size={32} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">소통 채널</p>
                                        <p className="text-lg text-gray-600">현재 준비 중입니다.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
