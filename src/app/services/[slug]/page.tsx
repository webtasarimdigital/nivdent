"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { services } from "@/data/services";

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center space-y-6">
                    <h1 className="text-6xl font-black text-background-dark">404</h1>
                    <p className="text-xl text-slate-500 font-medium">Service not found.</p>
                    <Link href="/services" className="inline-block bg-primary text-background-dark px-10 py-4 rounded-xl font-black transition-all hover:scale-105 shadow-xl shadow-primary/20">
                        Back to All Services
                    </Link>
                </div>
            </div>
        );
    }

    const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);

    return (
        <div className="min-h-screen bg-white">
            {/* Slim Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                {/* Transparent Decorative Graphic */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-20 pointer-events-none">
                    <img src={service.image} alt="" className="w-96 h-96 object-cover rounded-full mix-blend-screen scale-150 blur-sm" />
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10 w-full text-center">
                    <div className="space-y-4 max-w-3xl mx-auto flex flex-col items-center">
                        <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all animate-fade-in-up">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> OUR SERVICES
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                            {service.title}
                        </h1>
                        <div className="h-1.5 w-24 bg-primary rounded-full animate-fade-in-up delay-200 mx-auto"></div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 max-w-7xl mx-auto px-6 md:px-20 grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-12">
                    <div className="prose prose-slate prose-xl max-w-none text-slate-600 leading-relaxed font-medium animate-fade-in-up">
                        <p className="border-l-4 border-primary pl-8 py-2 text-background-dark text-2xl font-bold italic leading-snug">
                            {service.shortDesc}
                        </p>
                        <div className="mt-12 space-y-8 animate-fade-in-up delay-100">
                            {service.description.split('. ').map((para, i) => (
                                <p key={i}>{para}.</p>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 space-y-6 animate-fade-in-up delay-200">
                        <h3 className="text-2xl font-black text-background-dark">Why Us?</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {['Expert Doctors', 'Modern Technology', 'Sterile Environment', 'Personalized Treatment'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-600 font-bold">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Additional Visuals Section */}
                    {service.contentImages && service.contentImages.length > 0 && (
                        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up delay-300">
                            {service.contentImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group opacity-0 animate-fade-in-up"
                                    style={{ animationDelay: `${(idx + 4) * 100}ms`, animationFillMode: 'forwards' }}
                                >
                                    <img
                                        src={img}
                                        alt={`${service.title} Image ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sidebar / Info */}
                <aside className="space-y-10">
                    <div className="bg-background-dark rounded-[2.5rem] p-10 text-white space-y-8 animate-fade-in-up">
                        <h3 className="text-2xl font-black">Book an Appointment</h3>
                        <p className="text-slate-400 font-medium">Contact us now to book an appointment with our expert doctors.</p>
                        <div className="space-y-4">
                            <Link href="/contact" className="block w-full bg-primary text-background-dark text-center py-5 rounded-2xl font-black hover:bg-white transition-all shadow-xl shadow-primary/10">
                                Contact Page
                            </Link>
                            <button
                                onClick={() => {
                                    const url = "https://www.ddstablet.com/ONLINE_APPOINTMENT/?a=Vm1ZcTN0Nnc5eiRDJkYpSkBOY1JmVWpYblpyNHU3eCFBJUQqRy1LYVBkU2dWa1lwM3M1djh5L0I/RShIK01iUQ==&b=ZGRzMzE3Nw==";
                                    const w = 600;
                                    const h = 800;
                                    const left = (window.innerWidth / 2) - (w / 2);
                                    const top = (window.innerHeight / 2) - (h / 2);
                                    window.open(url, "Online Appointment", `width=${w},height=${h},top=${top},left=${left},resizable=yes,scrollbars=yes`);
                                }}
                                className="block w-full bg-white/10 border border-white/20 text-white text-center py-5 rounded-2xl font-black hover:bg-white hover:text-background-dark transition-all"
                            >
                                Online Appointment
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6 animate-fade-in-up delay-100">
                        <h3 className="text-xl font-black text-background-dark border-l-4 border-primary pl-4">Our Other Services</h3>
                        <div className="space-y-4">
                            {otherServices.map((s) => (
                                <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md">
                                        <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-all" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-background-dark text-sm group-hover:text-primary transition-colors">{s.title}</h4>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{s.category}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link href="/services" className="inline-block text-slate-400 font-black text-xs uppercase tracking-widest hover:text-primary transition-colors">
                            See All Services +
                        </Link>
                    </div>
                </aside>
            </section>
        </div>
    );
}
