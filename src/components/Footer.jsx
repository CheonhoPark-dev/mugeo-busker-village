import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-14 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.25),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.2),transparent_25%)]" />
            <div className="container mx-auto px-6 relative">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
                    <div className="max-w-md space-y-4">
                        <h3 className="text-2xl font-display font-semibold">무거 버스커 마을</h3>
                        <p className="text-gray-300 leading-relaxed">
                            기타를 잘치는 것 보다 즐기는 것에 진심인 모임. 음악이 일상이 되고, 이웃과 연결되는 순간을 만듭니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-200">
                        <div className="space-y-3">
                            <h4 className="text-sm uppercase tracking-[0.15em] text-white/70">Contact</h4>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-sm text-white/70">이메일</p>
                                    <p className="font-semibold">gkgothd@naver.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm uppercase tracking-[0.15em] text-white/70">Follow</h4>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-6 text-sm text-gray-400 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span>&copy; {new Date().getFullYear()} Mugeo Busker Village</span>
                    <span className="text-white/60">즐김과 몰입으로 이어진 현대적인 커뮤니티</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
