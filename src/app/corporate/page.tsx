"use client";
import React from "react";
import Link from "next/link";

export default function KurumsalPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Slim Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                {/* Transparent Decorative Graphic */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-50 pointer-events-none">
                    <img src="/aesthetic_whitening.webp" alt="" className="w-96 h-96 object-cover rounded-full mix-blend-screen scale-150 blur-sm" />
                </div>

                <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-fade-in-up">
                        ABOUT US
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        About Us
                    </h1>
                    <p className="text-slate-400 font-medium animate-fade-in-up delay-200">
                        We are by your side for healthy smiles with our modern technology and expert staff. Get to know Nivdent Dental Clinic closely.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 max-w-7xl mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8 animate-fade-in-up">
                    <div className="space-y-4">
                        <h2 className="text-primary font-black uppercase tracking-widest text-sm">Who Are We?</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-background-dark leading-tight">
                            Modern and Innovative Approach <br /> in Oral and Dental Health
                        </h3>
                    </div>
                    <div className="prose prose-slate prose-lg text-slate-600 font-medium space-y-6">
                        <p>
                            As Nivdent Oral and Dental Health Center, our biggest priority is to understand our patients' needs and offer them the most accurate solutions. With our expert and smiling team in their fields, we focus on making your treatment processes as comfortable as possible using the current technologies of modern dentistry.
                        </p>
                        <p>
                            We are aware that dental health is a unique experience for every individual. For this reason, we work with great care to offer personalized treatment plans tailored for you. We take pride in adhering to transparent, honest, and completely ethical values in our work. Our goal is to always provide you with reliable health services that meet medical standards.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                            <div className="space-y-3">
                                <h4 className="text-xl font-black text-background-dark">Preliminary Examination</h4>
                                <p className="text-base text-slate-600 font-medium pb-4 border-b sm:border-b-0 sm:border-r border-slate-100 sm:pr-6 h-full">
                                    Your dental health is important to us. You can create an appointment for a personalized preliminary assessment. Our professional team will be with you throughout the process.
                                </p>
                            </div>

                            <div className="space-y-3 sm:pl-2">
                                <h4 className="text-xl font-black text-background-dark">Technological Infrastructure and Hygienic Environment</h4>
                                <p className="text-base text-slate-600 font-medium pb-4">
                                    We offer a safe treatment experience to our patients who care about oral and dental health in our hygienic clinical environment where our modern technological infrastructure and high-level sterilization protocols are applied.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative animate-fade-in-up delay-200">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="relative rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
                        <img
                            src="/hero1.webp"
                            alt="Nivdent Clinic Hero"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-background-dark text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-3 gap-12">
                    <div className="space-y-6 p-10 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-primary hover:text-background-dark transition-all duration-500 group">
                        <span className="material-symbols-outlined text-5xl text-primary group-hover:text-background-dark">visibility</span>
                        <h4 className="text-2xl font-black">Our Vision</h4>
                        <p className="text-sm text-slate-400 group-hover:text-background-dark font-medium leading-relaxed">
                            To make healthy smiles accessible to everyone as an industry leader in digital dentistry and advanced technology applications.
                        </p>
                    </div>
                    <div className="space-y-6 p-10 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-primary hover:text-background-dark transition-all duration-500 group">
                        <span className="material-symbols-outlined text-5xl text-primary group-hover:text-background-dark">rocket_launch</span>
                        <h4 className="text-2xl font-black">Our Mission</h4>
                        <p className="text-sm text-slate-400 group-hover:text-background-dark font-medium leading-relaxed">
                            To offer reliable, transparent, and scientific treatment methods in the field of oral and dental health, by observing patient rights and ethical principles.
                        </p>
                    </div>
                    <div className="space-y-6 p-10 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-primary hover:text-background-dark transition-all duration-500 group">
                        <span className="material-symbols-outlined text-5xl text-primary group-hover:text-background-dark">emergency</span>
                        <h4 className="text-2xl font-black">Our Values</h4>
                        <p className="text-sm text-slate-400 group-hover:text-background-dark font-medium leading-relaxed">
                            Transparency, honesty, sterilization discipline, and continuous education are our indispensable core values.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-black text-background-dark tracking-tight">
                        Meet the Nivdent Family
                    </h2>
                    <p className="text-base text-slate-500 font-medium max-w-2xl mx-auto">
                        Everything you need for a healthy future is waiting for you at Nivdent. Create your appointment now.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <Link href="/iletisim" className="bg-primary text-background-dark px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
                            Contact Us
                        </Link>
                        <Link href="/hekimlerimiz" className="bg-background-dark text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl">
                            See Our Doctors
                        </Link>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] w-full overflow-hidden border-t-8 border-primary">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.9319507233663!2d29.0822762!3d41.026744699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac94e7b21a061%3A0x82f1682b255c3e8c!2zTsSwVkTEsMWeIEHEn8SxeiB2ZSBEacWfIFNhxJ9sxLHEn8SxIE1lcmtlemk!5e0!3m2!1str!2str!4v1773579324527!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </div>
    );
}
