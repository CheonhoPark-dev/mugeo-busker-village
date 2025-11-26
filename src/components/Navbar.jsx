import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '홈', path: '/' },
        { name: '소개', path: '/about' },
        { name: '활동', path: '/activities' },
        { name: '문의', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-xl border-b border-muted/80 shadow-[0_8px_30px_rgba(15,23,42,0.08)] py-3'
                : 'bg-white/80 backdrop-blur-xl border-b border-muted/60 shadow-[0_8px_30px_rgba(15,23,42,0.06)] py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <Music size={20} />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-xs uppercase tracking-[0.25em] text-gray-500">Mugeo</span>
                        <span className="text-xl font-display font-semibold text-dark">
                            무거 버스커 마을
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 lg:gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-gray-800 hover:text-primary'
                                }`}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 top-full mt-1 w-full h-0.5 bg-primary"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-dark"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-xl shadow-lg py-5 px-6 flex flex-col gap-4 border-b border-muted/60"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-base font-semibold ${location.pathname === link.path ? 'text-primary' : 'text-dark hover:text-primary'
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
