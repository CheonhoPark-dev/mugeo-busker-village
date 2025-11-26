import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4">무거 버스커 마을</h3>
                        <p className="text-gray-400 mb-4">
                            기타를 잘치는 것 보다 즐기는 것에 진심인 모임
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <div className="flex flex-col gap-2 text-gray-400">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-white">담당자:</span> 하해송
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} />
                                <span>010-9388-5356</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Mugeo Busker Village. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
