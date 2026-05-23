"use client";
import React from "react";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Slim Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                {/* Transparent Decorative Graphic */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-50 pointer-events-none">
                    <img src="/aesthetic_whitening.webp" alt="" className="w-96 h-96 object-cover rounded-full mix-blend-screen scale-150 blur-sm" />
                </div>

                <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-fade-in-up">
                        NIVDENT DENTAL CLINIC
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        Our Services
                    </h1>
                    <p className="text-slate-400 font-medium animate-fade-in-up delay-200">
                        With modern technology and our expert staff, we offer the most comprehensive treatment solutions for your oral and dental health.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={`group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col opacity-0 animate-fade-in-up`}
                            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute top-6 right-6">
                                    <span className="bg-white/90 backdrop-blur-md text-background-dark text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                                        {service.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-6 left-8 right-8">
                                    <h3 className="text-white text-2xl font-black drop-shadow-lg">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                                    {service.shortDesc}
                                </p>
                                <div className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                                    DETAILED INFO <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 text-center space-y-8 shadow-2xl shadow-primary/20">
                    <h2 className="text-3xl md:text-5xl font-black text-background-dark leading-tight">
                        Take the First Step <br /> For a Healthy Smile
                    </h2>
                    <p className="text-background-dark/80 font-bold max-w-xl mx-auto">
                        You can make an appointment with our expert doctors to find out which treatment is most suitable for you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="bg-background-dark text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl"
                        >
                            Contact Us Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
