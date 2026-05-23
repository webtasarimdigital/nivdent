"use client";
import React, { useState } from "react";

export default function IsBasvurusuPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; error?: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.currentTarget);
        
        // Basic validation for PDF format (optional depending on frontend input type="file" accept=".pdf")
        const cvFile = formData.get("cv") as File;
        if (cvFile && cvFile.size > 0 && cvFile.type !== "application/pdf") {
            setSubmitStatus({ error: "Please upload your CV in PDF format only." });
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("/api/apply", {
                method: "POST",
                body: formData, // FormData sends multipart/form-data natively
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ success: true });
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus({ error: data.error || "An error occurred. Please try again." });
            }
        } catch (error) {
            setSubmitStatus({ error: "A communication network error occurred. Please try again later." });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        CAREER & HUMAN RESOURCES
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        Job Application
                    </h1>
                    <p className="text-slate-400 font-medium animate-fade-in-up delay-200">
                        You can send us your application to become a part of the Nivdent family. We are looking for dynamic talents to join our team.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 max-w-4xl mx-auto px-6 md:px-20">
                <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-14 border border-slate-100">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-black text-background-dark mb-4">Application Form</h2>
                        <p className="text-slate-500 font-medium text-sm">
                            Please fill out the information below completely. Do not forget to attach your resume in PDF format.
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
                                <label htmlFor="position" className="text-sm font-bold text-slate-700">Applied Position *</label>
                                <input 
                                    type="text" 
                                    id="position" 
                                    name="position" 
                                    required 
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="e.g.: Dentist Assistant, Accounting Specialist"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
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
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-slate-700">Cover Letter / Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                placeholder="You can briefly tell about yourself or your experiences..."
                            ></textarea>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="cv" className="text-sm font-bold text-slate-700">Upload Resume (CV) (PDF) *</label>
                            <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-6 bg-slate-50 hover:bg-primary/5 hover:border-primary transition-all text-center group">
                                <input 
                                    type="file" 
                                    id="cv" 
                                    name="cv" 
                                    accept=".pdf"
                                    required 
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <div className="space-y-2 pointer-events-none">
                                    <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary transition-colors">upload_file</span>
                                    <p className="text-sm font-medium text-slate-600">
                                        Drag and drop your CV or click to select
                                    </p>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                                        Maximum file size: 5MB (PDF only)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-background-dark text-background-dark hover:text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-background-dark/30 border-t-background-dark rounded-full animate-spin"></span>
                                        SENDING...
                                    </>
                                ) : (
                                    <>
                                        COMPLETE APPLICATION
                                        <span className="material-symbols-outlined font-black">arrow_forward</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {submitStatus?.success && (
                            <div className="mt-6 bg-green-50 text-green-700 p-5 rounded-xl border border-green-200 flex items-center gap-3 animate-fade-in-up">
                                <span className="material-symbols-outlined text-2xl">check_circle</span>
                                <p className="font-bold text-sm">Your application has been successfully received. Our human resources team will get back to you as soon as possible.</p>
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
