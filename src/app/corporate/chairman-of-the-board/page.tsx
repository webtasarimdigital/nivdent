"use client";
import React, { useState } from "react";

export default function YonetimKuruluBaskaniPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; error?: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/yonetim-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus({ success: true });
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus({ error: result.error || "An error occurred. Please try again." });
            }
        } catch (error) {
            setSubmitStatus({ error: "A network connection error occurred. Please try again later." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Slim Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-50 pointer-events-none">
                    <img src="/aesthetic_whitening.webp" alt="" className="w-96 h-96 object-cover rounded-full mix-blend-screen scale-150 blur-sm" />
                </div>

                <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-fade-in-up">
                        CORPORATE
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        Chairman of the Board
                    </h1>
                </div>
            </section>

            {/* Profile and Mission Section */}
            <section className="py-20 md:py-24 max-w-6xl mx-auto px-6 md:px-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <div>
                            <h2 className="text-3xl font-black text-background-dark mb-6">We Are Always Listening to Your Voice</h2>
                            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
                                <p>
                                    Every process in our institution is meticulously designed for your comfort and health. However, any feedback, suggestions, or special situations you want to share to improve your experiences are of great importance to me.
                                </p>
                                <p>
                                    While aiming for excellence in our healthcare services, we always listen to your voice. You can be sure that I will personally evaluate every message you send me via the form below.
                                </p>
                                <p className="font-bold text-background-dark">
                                    For us, you are not just a "patient", but a member of the Nivdent family. With our transparent and accessible management approach, we are always by your side.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-3 scale-105"></div>
                            {/* Placeholder for the CEO photo. Ideally replace with the actual photo later */}
                            <img 
                                src="/Ahmet-Dursun.webp" 
                                alt="Chairman of the Board" 
                                className="relative rounded-[3rem] object-cover w-full h-[400px] shadow-2xl border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 pb-24 max-w-4xl mx-auto px-6 md:px-20">
                <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-14 border border-slate-100">
                    <div className="mb-10 text-center">
                        <h2 className="text-2xl font-black text-background-dark mb-4">Send a Message</h2>
                        <p className="text-slate-500 text-sm">
                            You can directly convey your feedback, suggestions, or special situations. Your messages will be personally evaluated.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-slate-700">Name Surname *</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="e.g.: John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number *</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    required 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="05XX XXX XX XX"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-slate-700">E-Mail Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="example@mail.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-slate-700">Your Message *</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required
                                rows={6}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                placeholder="You can write your message here..."
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-background-dark text-background-dark hover:text-white py-5 rounded-2xl font-black text-[15px] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed uppercase"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-background-dark/30 border-t-background-dark rounded-full animate-spin"></span>
                                        SENDING MESSAGE...
                                    </>
                                ) : (
                                    <>
                                        SEND MESSAGE
                                        <span className="material-symbols-outlined font-black">send</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {submitStatus?.success && (
                            <div className="mt-6 bg-green-50 text-green-700 p-5 rounded-xl border border-green-200 flex items-center gap-3 animate-fade-in-up">
                                <span className="material-symbols-outlined text-2xl">check_circle</span>
                                <p className="font-bold text-sm">Your message has been successfully sent. Thank you for your interest and trust.</p>
                            </div>
                        )}

                        {submitStatus?.error && (
                            <div className="mt-6 bg-red-50 text-red-700 p-5 rounded-xl border border-red-200 flex items-center gap-3 animate-fade-in-up">
                                <span className="material-symbols-outlined text-2xl">error</span>
                                <p className="font-bold text-sm">{submitStatus.error}</p>
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
}
