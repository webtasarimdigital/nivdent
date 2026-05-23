"use client";
import React, { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [feedback, setFeedback] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || (!formData.phone && !formData.email)) {
            setStatus("error");
            setFeedback("Please enter your name and contact information.");
            return;
        }
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus("success");
                setFeedback("Your message was sent successfully.");
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus("error");
                setFeedback("An error occurred while sending.");
            }
        } catch {
            setStatus("error");
            setFeedback("Connection error, please try again.");
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Slim Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                {/* Transparent Decorative Graphic */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-50 pointer-events-none">
                    <img src="/aesthetic_whitening.webp" alt="" className="w-96 h-96 object-cover rounded-full mix-blend-screen scale-150 blur-sm" />
                </div>

                <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-fade-in-up">
                        CONTACT US
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        Contact
                    </h1>
                    <p className="text-slate-400 font-medium animate-fade-in-up delay-200">
                        You can always contact us for questions, appointments, or detailed information.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                    {/* Left Side: Form */}
                    <div className="flex-1 p-10 md:p-16 space-y-10">
                        <div>
                            <h2 className="text-3xl font-black text-background-dark mb-4 tracking-tight">Write to Us</h2>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-md font-medium">
                                You can reach us through our contact information or fill out the form so we can call you to assist you faster.
                            </p>
                        </div>

                        {feedback && (
                            <div className={`p-4 rounded-xl text-sm font-bold ${status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {feedback}
                            </div>
                        )}
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="Your Name"
                                    required
                                    disabled={status === "loading"}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium text-slate-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    placeholder="Your email address"
                                    disabled={status === "loading"}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium text-slate-700"
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Phone</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    placeholder="Your phone number"
                                    disabled={status === "loading"}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium text-slate-700"
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Your Message</label>
                                <textarea
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    placeholder="Write your message here..."
                                    disabled={status === "loading"}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none font-medium text-slate-700"
                                ></textarea>
                            </div>
                            <div className="md:col-span-2 pt-4">
                                <button disabled={status === "loading"} className="bg-primary hover:bg-background-dark disabled:opacity-50 hover:text-white text-background-dark px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-3 w-full md:w-auto uppercase tracking-widest">
                                    {status === "loading" ? "SENDING..." : "SEND"} <span className="material-symbols-outlined">send</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Info Panel */}
                    <div className="lg:w-[400px] bg-slate-50/50 border-l border-slate-100 p-10 md:p-16 space-y-12">
                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-background-dark text-xs uppercase tracking-widest opacity-40">Address</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-bold">
                                    Tantavi, Mentesoglu Cd. No:25, 34764 Umraniye/Istanbul
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">call</span>
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-background-dark text-xs uppercase tracking-widest opacity-40">Call Us</h4>
                                <p className="text-sm text-slate-500 font-bold">
                                    +90 (530) 235 92 65
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">mail</span>
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-background-dark text-xs uppercase tracking-widest opacity-40">Email</h4>
                                <p className="text-sm text-slate-500 font-bold">
                                    info@nivdent.com
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">schedule</span>
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-background-dark text-xs uppercase tracking-widest opacity-40">Working Hours</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-bold">
                                    Monday - Sunday <br />
                                    (09:00 - 23:00)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <section className="h-[500px] w-full overflow-hidden">
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
