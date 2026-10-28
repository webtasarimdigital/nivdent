"use client";
import React, { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string, e: React.MouseEvent) => {
        e.preventDefault();
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const navLinks = [
        { name: "HOME", href: "/" },
        {
            name: "CORPORATE",
            href: "/about-us",
            submenu: [
                { name: "ABOUT US", href: "/about-us" },
                { name: "CHAIRMAN OF THE BOARD", href: "/corporate/chairman-of-the-board" },
                { name: "ADMINISTRATIVE STAFF", href: "/corporate/administrative-staff" },
                { name: "CONTRACTED INSTITUTIONS", href: "/about-us/contracted-institutions" },
                { name: "NIV GALLERY", href: "/corporate/niv-gallery" },
                { name: "JOB APPLICATION", href: "/corporate/job-application" }
            ]
        },
        { name: "OUR DOCTORS", href: "/our-doctors" },
        { 
            name: "SERVICES", 
            href: "/services",
            submenu: services.map(service => ({
                name: service.title,
                href: `/services/${service.slug}`
            }))
        },
        { name: "VIRTUAL TOUR", href: "/virtual-tour" },
        { name: "CONTACT", href: "/contact" },
    ];

    const openAppointment = () => {
        const url = "https://www.ddstablet.com/ONLINE_APPOINTMENT/?a=Vm1ZcTN0Nnc5eiRDJkYpSkBOY1JmVWpYblpyNHU3eCFBJUQqRy1LYVBkU2dWa1lwM3M1djh5L0I/RShIK01iUQ==&b=ZGRzMzE3Nw==";
        const w = 600;
        const h = 800;
        const left = (window.innerWidth / 2) - (w / 2);
        const top = (window.innerHeight / 2) - (h / 2);
        window.open(url, "Online Appointment", `width=${w},height=${h},top=${top},left=${left},resizable=yes,scrollbars=yes`);
    };

    return (
        <>
            {/* Top Bar (Yellow Area) */}
            <div className="hidden lg:flex bg-primary text-white py-2.5 px-6 md:px-20 border-b border-white/10">
                <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-[13px] font-medium tracking-wide">
                    <div className="flex gap-8">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Tantavi,+Menteşoğlu+Cd.+No:25,+34764+Ümraniye/İstanbul"
                            target="_blank"
                            className="flex items-center gap-2 hover:opacity-80 transition-all cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[19px]">location_on</span>
                            Tantavi, Menteşoğlu Cd. No:25, 34764 Ümraniye/İstanbul
                        </a>
                        <a
                            href="mailto:info@nivdent.com"
                            className="flex items-center gap-2 hover:opacity-80 transition-all cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[19px]">mail</span>
                            info@nivdent.com
                        </a>
                        <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[19px]">schedule</span>
                            Monday - Sunday (09:00 - 23:00)
                        </span>
                        <a
                            href="tel:4449265"
                            className="flex items-center gap-2 hover:opacity-80 transition-all cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[19px]">call</span>
                            444 9 265
                        </a>
                    </div>
                    <div className="flex gap-2">
                        <a className="w-8 h-8 flex items-center justify-center rounded-md border border-white hover:bg-white hover:text-primary transition-all text-[15px]" href="https://facebook.com/nivdent" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="w-8 h-8 flex items-center justify-center rounded-md border border-white hover:bg-white hover:text-primary transition-all text-[15px]" href="https://instagram.com/nivdisklinigi" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="w-8 h-8 flex items-center justify-center rounded-md border border-white hover:bg-white hover:text-primary transition-all text-[15px]" href="https://linkedin.com/company/nivdent" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="w-8 h-8 flex items-center justify-center rounded-md border border-white hover:bg-white hover:text-primary transition-all text-[15px]" href="https://api.whatsapp.com/send/?phone=905302359265&text&type=phone_number&app_absent=0" target="_blank">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <header className="sticky top-0 z-50 bg-[#3c414b] text-white px-6 md:px-20 py-4 shadow-xl">
                <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" onClick={() => typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img src="/logo.webp" alt="Nivdent Logo" className="h-14 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8 text-[13px] font-black tracking-wider uppercase">
                        {navLinks.map((link) => (
                            <div 
                                key={link.name} 
                                className="relative group"
                                onMouseEnter={() => setOpenDropdown(link.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {link.submenu ? (
                                    <div 
                                        className="hover:text-primary transition-colors flex items-center gap-1 py-4 cursor-pointer"
                                        onClick={(e) => toggleDropdown(link.name, e)}
                                    >
                                        {link.name}
                                        <span className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`}>expand_more</span>
                                    </div>
                                ) : (
                                    <Link 
                                        className="hover:text-primary transition-colors flex items-center gap-1 py-4" 
                                        href={link.href}
                                        onClick={(e) => {
                                            if (link.href === "/") {
                                                if (typeof window !== 'undefined' && window.location.pathname === "/") {
                                                    e.preventDefault();
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                                {link.submenu && (
                                    <div className={`absolute top-full left-0 bg-[#3c414b] min-w-[220px] shadow-2xl rounded-b-xl py-4 transition-all duration-300 border-t-2 border-primary ${openDropdown === link.name ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                className="block px-6 py-3 hover:bg-primary hover:text-background-dark transition-all text-[13px] font-black uppercase"
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4 lg:hidden">
                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:text-background-dark transition-all"
                        >
                            <span className="material-symbols-outlined text-[28px]">
                                {isMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={openAppointment}
                            className="bg-primary hover:bg-white text-background-dark px-6 py-3.5 rounded-xl font-black text-xs transition-all shadow-lg hover:shadow-primary/20 flex items-center gap-3 group"
                        >
                            <div className="w-2 h-2 rounded-full bg-white group-hover:bg-primary transition-colors"></div>
                            BOOK APPOINTMENT <span className="material-symbols-outlined text-[16px] font-black">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer (Sleek Sidebar) */}
                <div className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>

                    {/* Drawer Content */}
                    <div className={`absolute top-0 right-0 w-[80%] max-w-[320px] h-full bg-[#3c414b] shadow-2xl flex flex-col transition-transform duration-300 ease-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="flex justify-between items-center p-6 border-b border-white/10">
                            <img src="/logo.webp" alt="Nivdent Logo" className="h-10 w-auto" />
                            <button onClick={() => setIsMenuOpen(false)} className="text-white/60 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 transition-colors">
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col border-b border-white/5 pb-3 mb-1 last:border-0">
                                    {link.submenu ? (
                                        <div className="text-[11px] font-black tracking-[0.2em] text-primary uppercase mb-3 mt-1">
                                            {link.name}
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-[15px] font-bold tracking-wide text-white/80 hover:text-primary transition-colors flex items-center justify-between group py-1"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                            <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary">arrow_forward</span>
                                        </Link>
                                    )}
                                    {link.submenu && (
                                        <div className="flex flex-col gap-2 pl-4 border-l-2 border-white/10 ml-1">
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className="text-[13px] font-medium tracking-wide text-white/50 hover:text-primary transition-colors uppercase"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="p-6 border-t border-white/10 bg-black/20">
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    openAppointment();
                                }}
                                className="w-full bg-primary hover:bg-white text-background-dark py-4 rounded-xl font-black text-[13px] tracking-widest uppercase transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                            >
                                BOOK APPOINTMENT <span className="material-symbols-outlined font-black text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            {/* Mobile Social Area inline within menu */}
                            <div className="flex justify-center gap-3 mt-5">
                                <a className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/10 hover:bg-primary hover:border-primary hover:text-background-dark text-white/70 transition-all text-sm" href="https://facebook.com/nivdent" target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/10 hover:bg-primary hover:border-primary hover:text-background-dark text-white/70 transition-all text-sm" href="https://instagram.com/nivdisklinigi" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 border border-white/10 hover:bg-primary hover:border-primary hover:text-background-dark text-white/70 transition-all text-sm" href="https://api.whatsapp.com/send/?phone=905302359265&text&type=phone_number&app_absent=0" target="_blank">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
