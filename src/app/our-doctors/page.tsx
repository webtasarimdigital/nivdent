"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function OurDoctorsPage() {
    const doctors = [
        {
            name: "Dt. Hacer Katkıcı Dursun",
            slug: "hacer-katkici-dursun",
            title: "Chief Physician",
            image: "/Hacer-Katkici-Dursun.webp",
            skills: ["Chief Physician", "General Dentistry", "Aesthetic Dentistry"]
        },
        {
            name: "Uzm. Dt. Betül Nazlı Muştu",
            slug: "betul-nazli-mustu",
            title: "Orthodontist",
            image: "/Betül-Nazli-Muştu.webp",
            skills: ["Clear Aligner", "Braces", "Orthodontics"]
        },
        {
            name: "Uzm. Dt. Simge Durmuşlar",
            slug: "simge-durmuslar",
            title: "Pediatric Dentist",
            image: "/kadin-hekim-placeholder.webp",
            skills: ["Pedodontics", "Preventive Dentistry"]
        },
        {
            name: "Uzm. Dt. Beril Sağır",
            slug: "beril-sagir",
            title: "Periodontist",
            image: "/kadin-hekim-placeholder.webp",
            skills: ["Gum Diseases", "Pink Aesthetics", "Peri-Implant Tissues"]
        },
        {
            name: "Uzm. Dt. Mücahit Güner",
            slug: "mucahit-guner",
            title: "Prosthodontist",
            image: "/Mücahit-Guner.webp",
            skills: ["Zirconia", "E-MAX", "Smile Design"]
        },
        {
            name: "Uzm. Dt. Berk Atahan Ekinci",
            slug: "berk-atahan-ekinci",
            title: "Oral and Maxillofacial Surgeon",
            image: "/erkek-hekim-placeholder.webp",
            skills: ["Implant", "Impacted Tooth", "Maxillofacial Surgery"]
        },
        {
            name: "Uzm. Dt. Ayşe Melike Müftüoğlu",
            slug: "ayse-melike-muftuoglu",
            title: "Endodontist",
            image: "/kadin-hekim-placeholder.webp",
            skills: ["Root Canal Treatment", "Microscopic Endodontics"]
        },
        {
            name: "Dt. Senanur Atmaca",
            slug: "senanur-atmaca",
            title: "General Dentist",
            image: "/Senanur-Atmaca.webp",
            skills: ["Restorative", "Aesthetic Filling", "Whitening"]
        },
        {
            name: "Dt. Oğuzhan Sadıç",
            slug: "oguzhan-sadic",
            title: "General Dentist",
            image: "/erkek-hekim-placeholder.webp",
            skills: ["Restorative", "Root Canal Treatment"]
        },
        {
            name: "Dt. Aleyna Duru",
            slug: "aleyna-duru",
            title: "General Dentist",
            image: "/Aleyna-Duru.webp",
            skills: ["Preventive Dentistry", "Restorative"]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Slim Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                {/* Transparent Decorative Graphic */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-50 pointer-events-none">
                    <img src="/orthodontics_aligner.webp" alt="" className="w-96 h-96 object-cover rounded-full mix-blend-screen scale-150 blur-sm" />
                </div>

                <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-fade-in-up">
                        OUR PROFESSIONAL TEAM
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        Our Doctors
                    </h1>
                    <p className="text-slate-400 font-medium animate-fade-in-up delay-200 uppercase tracking-widest text-sm">
                        We are with you with our expert and experienced staff
                    </p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-24 max-w-7xl mx-auto px-6 md:px-20 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {doctors.map((doc, index) => (
                        <Link
                            href={`/our-doctors/${doc.slug}`}
                            key={index}
                            className="group block bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 opacity-0 animate-fade-in-up md:text-left text-center"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                        >
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={doc.image}
                                    alt={doc.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex justify-center md:justify-start gap-3">
                                        <span className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center text-background-dark hover:bg-white transition-all cursor-pointer">
                                            <i className="fab fa-linkedin-in text-sm"></i>
                                        </span>
                                        <span className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center text-background-dark hover:bg-white transition-all cursor-pointer">
                                            <i className="fab fa-instagram text-sm"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 space-y-4">
                                <div>
                                    <h4 className="text-xl font-black text-background-dark group-hover:text-primary transition-colors">{doc.name}</h4>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">{doc.title}</p>
                                </div>
                                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                    {doc.skills.map((skill, i) => (
                                        <span key={i} className="text-[10px] font-black bg-slate-50 text-slate-500 px-3 py-1 rounded-full uppercase tracking-tighter">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

        </div>
    );
}
