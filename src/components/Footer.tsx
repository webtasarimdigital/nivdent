"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background-dark text-white pt-20 pb-10 px-6 sm:px-12 md:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-16">
                {/* Left Column: Logo + Description + Social */}
                <div className="space-y-6 col-span-2 sm:col-span-3 lg:col-span-1">
                    <img src="/logo.webp" alt="Nivdent Logo" className="h-12 w-auto" />
                    <p className="text-slate-400 text-sm leading-relaxed lg:pr-6">
                        Personalize your treatment with us for a healthy smile. We serve with our expert physicians and the latest technologies. Contact us now and start smiling with confidence.
                    </p>
                    <div className="flex gap-3">
                        <a href="https://facebook.com/nivdent" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-dark transition-all text-sm">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com/nivdent" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-dark transition-all text-sm">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com/company/nivdent" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-dark transition-all text-sm">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=905302359265&text&type=phone_number&app_absent=0" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background-dark transition-all text-sm">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>

                    {/* Website Update Date */}
                    <div className="mt-6 pt-6 border-t border-white/5 text-slate-400 text-xs font-medium">
                        <span className="text-white/60">Website Update Date:</span> <br />
                        <span className="text-primary font-black tracking-widest mt-1 inline-block">30.03.2026 12:52</span>
                    </div>
                </div>

                {/* Corporate Column */}
                <div>
                    <h4 className="text-lg font-bold border-l-4 border-primary pl-4 mb-6 uppercase tracking-widest text-xs">Corporate</h4>
                    <ul className="space-y-3 text-slate-400 text-[13px] font-medium">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/corporate/chairman-of-the-board" className="hover:text-primary transition-colors">Chairman of the Board</Link></li>
                        <li><Link href="/corporate/administrative-staff" className="hover:text-primary transition-colors">Administrative Staff</Link></li>
                        <li><Link href="/about-us/contracted-institutions" className="hover:text-primary transition-colors">Contracted Institutions</Link></li>
                        <li><Link href="/corporate/niv-gallery" className="hover:text-primary transition-colors">Niv Gallery</Link></li>
                        <li><Link href="/corporate/job-application" className="hover:text-primary transition-colors">Job Application</Link></li>
                        <li><Link href="/our-doctors" className="hover:text-primary transition-colors">Our Doctors</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                        <li><Link href="/virtual-tour" className="hover:text-primary transition-colors">Virtual Tour</Link></li>
                        <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                    </ul>
                </div>

                {/* Treatments Column */}
                <div>
                    <h4 className="text-lg font-bold border-l-4 border-primary pl-4 mb-6 uppercase tracking-widest text-xs">Treatments</h4>
                    <ul className="space-y-3 text-slate-400 text-[13px] font-medium">
                        <li><Link href="/services" className="hover:text-primary transition-colors font-bold text-white/80">All Treatments</Link></li>
                        <li><Link href="/services/implant-treatment" className="hover:text-primary transition-colors">Implant Treatment</Link></li>
                        <li><Link href="/services/zirconium-crown" className="hover:text-primary transition-colors">Zirconium Crown</Link></li>
                        <li><Link href="/services/orthodontics" className="hover:text-primary transition-colors">Orthodontics</Link></li>
                        <li><Link href="/services/teeth-whitening" className="hover:text-primary transition-colors">Teeth Whitening</Link></li>
                        <li><Link href="/services/porcelain-laminate" className="hover:text-primary transition-colors">Porcelain Laminate</Link></li>
                        <li><Link href="/services/pedodontics" className="hover:text-primary transition-colors">Pedodontics</Link></li>
                    </ul>
                </div>

                {/* Contact Column (Right) */}
                <div className="col-span-2 sm:col-span-1">
                    <h4 className="text-lg font-bold border-l-4 border-primary pl-4 mb-6 uppercase tracking-widest text-xs">Contact</h4>
                    <ul className="space-y-4 text-slate-400 text-[13px] font-medium">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-xl mt-0.5">location_on</span>
                            <a href="https://www.google.com/maps/search/?api=1&query=Tantavi,+Menteşoğlu+Cd.+No:25,+34764+Ümraniye/İstanbul" target="_blank" className="hover:text-primary transition-colors">
                                Tantavi, Menteşoğlu Cd. No:25, 34764 Umraniye/Istanbul
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-xl">call</span>
                            <a href="tel:4449265" className="hover:text-primary transition-colors">444 9 265</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-xl">mail</span>
                            <a href="mailto:info@nivdent.com" className="hover:text-primary transition-colors">info@nivdent.com</a>
                        </li>
                    </ul>

                    {/* Working Hours */}
                    <div className="mt-8">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-base">schedule</span>
                            Working Hours
                        </h5>
                        <div className="space-y-2 text-[13px] font-medium border-b border-white/5 pb-2 flex gap-4 xl:gap-10">
                            <span className="text-slate-400 whitespace-nowrap">Monday - Sunday</span>
                            <span className="font-bold text-white/80 whitespace-nowrap">09:00 - 23:00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 mt-10 pt-10 text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                <p>© 2026 Nivdent Oral and Dental Health Center. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
