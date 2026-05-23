"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SSS() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "Does teeth whitening damage teeth?",
            a: "Professional teeth whitening procedures performed under the supervision of a specialist doctor have no permanent damage on tooth enamel. Only mild, short-term sensitivity may occur."
        },
        {
            q: "What is the lifespan of zirconium veneers?",
            a: "With proper oral care and regular doctor check-ups, zirconium veneers can be used safely for 10-15 years or even longer."
        },
        {
            q: "When should children go to the dentist for the first time?",
            a: "Having the first examination after the first primary teeth emerge or by the age of 1 at the latest is of great importance for future oral health."
        },
        {
            q: "How long does smile design take?",
            a: "Although the treatment time varies depending on the procedures to be performed, you can achieve your new smile within 1 week with digital design processes that are generally completed in 2-3 sessions."
        },
        {
            q: "Is implant treatment a painful procedure?",
            a: "Since implant surgery is performed under local anesthesia, no pain or ache is felt during the procedure. Mild discomfort that may occur afterwards can be easily controlled with painkillers prescribed by the doctor."
        },
        {
            q: "Can orthodontic treatment (braces) be applied at any age?",
            a: "Yes, orthodontic treatments can be applied to individuals of all age groups. Anyone with good dental and gingival health can benefit from this treatment for both aesthetic and functional purposes."
        },
        {
            q: "What should I do to make an appointment?",
            a: "You can fill out the form on our contact page, reach us from our phone numbers, or quickly create your appointment using the online appointment and WhatsApp icons on the bottom right."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header Banner */}
            <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-background-dark overflow-hidden flex items-center justify-center text-center px-6">
                {/* Visual Background Elements */}
                <div className="absolute inset-0 opacity-50 pointer-events-none">
                    <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full mix-blend-screen" />

                    {/* SVG Graphic (matching other headers) */}
                    <div className="absolute right-[5%] top-[10%] opacity-50 text-white/5 pointer-events-none">
                        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.686 2 6 4.686 6 8C6 10.42 7.425 12.518 9.5 13.486V20C9.5 21.105 10.395 22 11.5 22H12.5C13.605 22 14.5 21.105 14.5 20V13.486C16.575 12.518 18 10.42 18 8C18 4.686 15.314 2 12 2Z" />
                        </svg>
                    </div>
                </div>

                <div className="relative z-10 space-y-4 max-w-2xl animate-fade-in-up">
                    <span className="text-primary font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                        <span className="w-8 h-[2px] bg-primary/30"></span>
                        INFORMATION CENTER
                        <span className="w-8 h-[2px] bg-primary/30"></span>
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                        Frequently Asked <span className="text-primary italic font-serif">Questions</span>
                    </h1>
                    <p className="text-slate-400 font-medium text-base lg:text-lg">
                        We answered the most frequently asked questions about our oral and dental health processes for you.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-24 max-w-4xl mx-auto px-6">
                <div className="space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaqIndex === index;
                        return (
                            <div
                                key={index}
                                className={`group rounded-[2.5rem] border transition-all duration-500 animate-fade-in-up ${isOpen
                                    ? 'bg-white border-primary/20 shadow-2xl shadow-primary/5'
                                    : 'bg-white border-slate-100 hover:border-primary/20 hover:shadow-lg'
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                    className="w-full text-left outline-none"
                                >
                                    <div className="flex items-center justify-between p-8 md:p-10 font-black text-background-dark transition-colors duration-500">
                                        <span className={`text-xl pr-6 leading-tight transition-colors duration-500 ${isOpen ? 'text-primary' : ''}`}>
                                            {faq.q}
                                        </span>
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${isOpen
                                            ? 'bg-primary border-primary text-white rotate-180'
                                            : 'border-slate-200 group-hover:border-primary text-background-dark'
                                            }`}>
                                            <span className="material-symbols-outlined text-2xl font-black">expand_more</span>
                                        </div>
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-8 md:p-10 pt-0 text-slate-500 font-medium leading-[1.8]">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center animate-fade-in-up delay-700">
                    <p className="text-slate-500 mb-6 font-medium">Couldn't find the answer you were looking for?</p>
                    <Link href="/contact" className="bg-primary text-background-dark px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20 inline-flex items-center gap-3">
                        CONTACT US <span className="material-symbols-outlined text-lg border-2 border-background-dark rounded-full w-8 h-8 flex items-center justify-center">arrow_right_alt</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
