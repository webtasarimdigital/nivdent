"use client";
import React from "react";
import Link from "next/link";

export default function NivGaleriPage() {
    const instagramIds = [
        "DWOADbcjMTW",
        "DV7-cdEFLrt",
        "DV0QBaajPM8",
        "DVp86EbDW1F",
        "DVicWKkggrr",
        "DVduRLGDNvG",
        "DVGpYKojQ4n",
        "DUX5CXhj3Zk"
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                {/* Transparent Decorative Graphic */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-50 pointer-events-none">
                    <img src="/aesthetic_whitening.webp" alt="" className="w-96 h-96 object-cover rounded-full mix-blend-screen scale-150 blur-sm" />
                </div>

                <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-fade-in-up">
                        NIV GALLERY
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        Gallery & Videos
                    </h1>
                    <p className="text-slate-400 font-medium animate-fade-in-up delay-200">
                        Treatment processes of our patients, our clinic's atmosphere, and everything you wonder about. Get to know more closely.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {instagramIds.map((id, index) => (
                        <div 
                            key={id}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col opacity-0 animate-fade-in-up p-3 group"
                            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                        >
                            <div className="w-full relative rounded-2xl overflow-hidden bg-slate-50 flex-grow h-[420px] sm:h-[480px] xl:h-[560px]">
                                <iframe 
                                    src={`https://www.instagram.com/p/${id}/embed`}
                                    className="absolute top-0 left-0 w-full h-full border-none"
                                    allowTransparency={true}
                                    scrolling="no"
                                    loading="lazy"
                                ></iframe>
                            </div>
                            
                            <a 
                                href={`https://www.instagram.com/p/${id}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pt-4 pb-2 px-2 flex justify-between items-center group-hover:text-primary transition-colors text-slate-800"
                                aria-label="Open Instagram video"
                            >
                                <span className="text-xs font-black uppercase tracking-wider">Watch on Instagram</span>
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA to Instagram */}
            <section className="pb-20 px-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-tr from-background-dark to-slate-800 rounded-[3rem] p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 text-white/5 pointer-events-none">
                        <i className="fab fa-instagram text-[200px]"></i>
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                            Discover <br /> <span className="text-primary">More</span>
                        </h2>
                        <p className="text-slate-300 font-bold max-w-xl mx-auto mb-8">
                            Do not forget to follow our Instagram page for all our current cases, patient reviews, and instant snaps from the clinic.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://www.instagram.com/nivdisklinigi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-background-dark px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:scale-105 transition-all shadow-xl flex items-center gap-3"
                            >
                                <i className="fab fa-instagram text-2xl"></i> Go to Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
