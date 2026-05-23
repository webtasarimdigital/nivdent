"use client";
import React from "react";
import Link from "next/link";

export default function SanalTurPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Slim Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                {/* Transparent Decorative Graphic */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-50 pointer-events-none">
                    <img src="/pediatric_dentistry.webp" alt="" className="w-96 h-96 object-cover rounded-full mix-blend-screen scale-150 blur-sm" />
                </div>

                <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-fade-in-up">
                        DISCOVER OUR CLINIC
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        Virtual Tour
                    </h1>
                    <p className="text-slate-400 font-medium animate-fade-in-up delay-200">
                        Start exploring the modern and spacious atmosphere of Nivdent Dental Clinic immediately with a 360-degree virtual tour.
                    </p>
                </div>
            </section>

            {/* Virtual Tour Section */}
            <section className="py-12 max-w-7xl mx-auto px-4 md:px-6">
                <div className="relative w-full h-[70vh] md:h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white animate-fade-in-up">
                    <iframe
                        src="https://cdn.mekan360.com/sanaltur_isletme/turkey/istanbul/umraniye/istanbul_umraniye_nivdent_agiz_ve_dis_sagligi_merkezi_23907/index.html"
                        className="w-full h-full border-none"
                        allowFullScreen
                        title="Nivdent 360 Virtual Tour"
                    ></iframe>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-10 py-6">
                    {[
                        { icon: 'biotech', title: 'Advanced Technology', desc: 'State-of-the-art imaging and treatment devices.' },
                        { icon: 'sanitizer', title: '100% Hygiene', desc: 'Uncompromising sterilization and disinfection standards.' },
                        { icon: 'chair', title: 'Patient Comfort', desc: 'A design promising maximum comfort during treatment.' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-4 hover:shadow-xl transition-all animate-fade-in-up text-center" style={{ animationDelay: `${i * 100}ms` }}>
                            <span className="material-symbols-outlined text-primary text-4xl md:text-5xl">{item.icon}</span>
                            <h4 className="text-lg md:text-xl font-black text-background-dark">{item.title}</h4>
                            <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Action Banner */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <h3 className="text-4xl font-black text-background-dark">Visit Us at Our Location</h3>
                    <p className="text-slate-500 font-bold max-w-xl mx-auto leading-relaxed">
                        We are waiting for you for a coffee to meet our professional team and modern clinic.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link href="/contact" className="bg-background-dark text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl">
                            Address and Transport
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
