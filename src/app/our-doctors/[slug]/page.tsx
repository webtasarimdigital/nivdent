import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

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

export async function generateStaticParams() {
    return doctors.map((doc) => ({
        slug: doc.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const doctor = doctors.find(d => d.slug === slug);
    
    if (!doctor) {
        return {
            title: 'Doctor Not Found',
        }
    }

    return {
        title: `${doctor.name} - ${doctor.title} | Nivdent Oral and Dental Health Center`,
        description: `${doctor.name} serves as a ${doctor.title} at Nivdent Oral and Dental Health Center.`
    }
}

export default async function DoctorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const doctor = doctors.find(d => d.slug === slug);

    if (!doctor) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Slim Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-fade-in-up">
                        DOCTOR PROFILE
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        {doctor.name}
                    </h1>
                    <p className="text-slate-400 font-medium animate-fade-in-up delay-200 uppercase tracking-widest text-sm">
                        {doctor.title}
                    </p>
                </div>
            </section>

            {/* Profile Detail Section */}
            <section className="py-24 max-w-5xl mx-auto px-6 md:px-20">
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                    {/* Image - Full width top with rounded corners */}
                    <div className="p-6 md:p-8">
                      <div className="w-full h-[350px] md:h-[450px] relative rounded-2xl md:rounded-3xl overflow-hidden">
                        <Image 
                            src={doctor.image} 
                            alt={doctor.name} 
                            fill
                            quality={90}
                            sizes="(max-width: 768px) 100vw, 900px"
                            className="object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-10 md:p-16 flex flex-col">
                        <h2 className="text-3xl font-black text-background-dark mb-2">{doctor.name}</h2>
                        <h3 className="text-lg text-primary font-bold mb-8">{doctor.title}</h3>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                            {doctor.skills.map((skill, index) => (
                                <span key={index} className="text-xs font-black bg-slate-100 text-slate-600 px-4 py-2 rounded-full uppercase tracking-wider">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                            <Link href="/our-doctors" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors text-sm uppercase tracking-wider">
                                <span className="material-symbols-outlined text-lg">arrow_back</span>
                                Back to Our Doctors
                            </Link>
                            <a href="https://www.ddstablet.com/ONLINE_APPOINTMENT/?a=Vm1ZcTN0Nnc5eiRDJkYpSkBOY1JmVWpYblpyNHU3eCFBJUQqRy1LYVBkU2dWa1lwM3M1djh5L0I/RShIK01iUQ==&b=ZGRzMzE3Nw==" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-background-dark font-black hover:bg-white border-2 border-primary hover:border-slate-200 transition-colors text-sm uppercase tracking-wider shadow-lg shadow-primary/20">
                                Book an Appointment
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
