"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ContractedInstitutionsPage() {
    const [corpData, setCorpData] = useState({ kurum: '', eposta: '', yetkiliAdi: '', unvan: '', sektor: '', adres: '', il: '', ilce: '', alanKodu: '', telNo: '', calisanSayisi: '', guvence: '', talep: '' });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [feedback, setFeedback] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: corpData.yetkiliAdi || corpData.kurum,
                    email: corpData.eposta,
                    phone: `${corpData.alanKodu} ${corpData.telNo}`,
                    message: `Corporate Agreement Request:\nInstitution: ${corpData.kurum}\nTitle: ${corpData.unvan}\nSector: ${corpData.sektor}\nAddress: ${corpData.adres}, ${corpData.ilce}/${corpData.il}\nEmployees: ${corpData.calisanSayisi}\nInsurance: ${corpData.guvence}\n\nRequest:\n${corpData.talep}`
                }),
            });
            if (res.ok) {
                setStatus("success");
                setFeedback("Your request has been successfully received.");
                setCorpData({ kurum: '', eposta: '', yetkiliAdi: '', unvan: '', sektor: '', adres: '', il: '', ilce: '', alanKodu: '', telNo: '', calisanSayisi: '', guvence: '', talep: '' });
            } else setStatus("error"), setFeedback("An error occurred while sending.");
        } catch {
            setStatus("error"), setFeedback("Connection error.");
        }
    };

    const logos = [
        { name: "Akrida Schools", src: "/akridaokullari.webp" },
        { name: "Albaraka", src: "/albaraka.webp" },
        { name: "Çekmeköy Municipality", src: "/cekmekoybelediyesi.webp" },
        { name: "Doğa College", src: "/dogakolesji.webp" },
        { name: "Garanti BBVA", src: "/garantibbva.webp" },
        { name: "İGDAŞ", src: "/igdas.webp" },
        { name: "Modoko", src: "/modoko.webp" },
        { name: "QNB Finansbank", src: "/qnbfinansbank.webp" },
        { name: "Sevinç College", src: "/sevickoleji.webp" },
        { name: "Turkish Red Crescent", src: "/kizilay.webp" },
        { name: "Türk Telekom", src: "/turktelekom.webp" },
        { name: "Türkiye Finans", src: "/türkiyefinanas.webp" },
        { name: "Türkiye Sigorta", src: "/turkiyesigorta.webp" },
        { name: "TZH Foundation", src: "/tzh-vakfi-anlasmali-kurumlar.webp" },
        { name: "Vakıfbank Pension Fund", src: "/vakifbank-emekli-sandığı-vakfi.webp" },
        { name: "Yapı Kredi Pension Fund", src: "/yapi-kredi-emekli-sandigi-vakfi-anlasmali-kurumlar.jfif" },
        { name: "Ziraat Katılım", src: "/ziraatkatilim.webp" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Slim Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                {/* Transparent Decorative Graphic */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-50 pointer-events-none">
                    <img src="/technology_xray.webp" alt="" className="w-96 h-96 object-cover rounded-full mix-blend-screen scale-150 blur-sm" />
                </div>

                <div className="relative z-10 text-center space-y-4 px-6 max-w-4xl mx-auto">
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-fade-in-up">
                        STRONG COOPERATIONS
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        Contracted Institutions
                    </h1>
                    <p className="text-slate-400 font-medium animate-fade-in-up delay-200">
                        With our wide network of institutions, we are at your side to reach your health in the easiest and most advantageous way.
                    </p>
                </div>
            </section>

            {/* Logos Section */}
            <section className="py-24 max-w-7xl mx-auto px-6 md:px-20">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black text-background-dark">Institutions We Cooperate With</h2>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto uppercase tracking-widest text-sm">
                        Some of the distinguished institutions that trust Nivdent quality
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl flex flex-col items-center justify-between p-6 border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 animate-fade-in-up gap-4"
                            title={logo.name}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="flex items-center justify-center h-20 w-full">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://placehold.co/200x100?text=${logo.name}`;
                                    }}
                                />
                            </div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center mt-2">{logo.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Request Form Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 md:px-20">
                    <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
                        {/* Left Side: Form */}
                        <div className="flex-1 p-12 md:p-20 space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-black text-background-dark uppercase tracking-tight">Corporate Agreement Request Form</h2>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                    You can contact us through our contact addresses or leave a form for us to call you so that we can contact you more quickly.
                                </p>
                            </div>

                            {feedback && (
                                <div className={`p-4 rounded-xl text-sm font-bold ${status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                    {feedback}
                                </div>
                            )}
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={handleSubmit}>
                                {[
                                    { key: "kurum", label: "Institution Name", placeholder: "Institution Name" },
                                    { key: "eposta", label: "Email Address", placeholder: "Email Address", type: "email" },
                                    { key: "yetkiliAdi", label: "Authorized Person Name Surname", placeholder: "Authorized Person Name Surname" },
                                    { key: "unvan", label: "Authorized Person Title", placeholder: "Authorized Person Title" },
                                    { key: "sektor", label: "Sector", placeholder: "Sector" },
                                    { key: "adres", label: "Institution Address", placeholder: "Institution Address" },
                                    { key: "il", label: "Province", placeholder: "Province" },
                                    { key: "ilce", label: "District", placeholder: "District" },
                                    { key: "alanKodu", label: "Telephone Area Code", placeholder: "Telephone Area Code" },
                                    { key: "telNo", label: "Telephone Number", placeholder: "Telephone Number" },
                                    { key: "calisanSayisi", label: "Number of Employees", placeholder: "Number of Employees" },
                                    { key: "guvence", label: "Personnel Insurance", placeholder: "Personnel Insurance" },
                                ].map((field, i) => (
                                    <div key={i} className="space-y-1">
                                        <input
                                            type={field.type || "text"}
                                            placeholder={field.placeholder}
                                            required
                                            disabled={status === "loading"}
                                            value={(corpData as any)[field.key]}
                                            onChange={(e) => setCorpData({...corpData, [field.key]: e.target.value})}
                                            className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium placeholder:text-slate-300 shadow-sm text-sm disabled:opacity-50"
                                        />
                                    </div>
                                ))}
                                <div className="md:col-span-2 space-y-2">
                                    <textarea
                                        rows={5}
                                        placeholder="Requests and Suggestions"
                                        value={corpData.talep}
                                        onChange={(e) => setCorpData({...corpData, talep: e.target.value})}
                                        disabled={status === "loading"}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none font-medium placeholder:text-slate-300 shadow-sm text-sm disabled:opacity-50"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2 pt-6">
                                    <button disabled={status === "loading"} type="submit" className="bg-primary disabled:opacity-50 hover:bg-background-dark hover:text-white text-background-dark px-12 py-5 rounded-xl font-black text-lg transition-all shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-4 w-full md:w-auto uppercase tracking-widest group">
                                        <span className="material-symbols-outlined font-black">send</span> {status === "loading" ? "SENDING..." : "SEND"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Side: Info Panel */}
                        <div className="lg:w-[450px] bg-white p-12 md:p-20 flex flex-col justify-start space-y-12 border-l border-slate-100">
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-white text-3xl">location_on</span>
                                </div>
                                <div className="space-y-2 pt-2">
                                    <h4 className="font-black text-background-dark text-lg tracking-tight">Our Clinic Address</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-bold">
                                        Tantavi, Menteşoğlu Cd. No:25, <br /> 34764 Ümraniye/Istanbul
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-white text-3xl">call</span>
                                </div>
                                <div className="space-y-2 pt-2">
                                    <h4 className="font-black text-background-dark text-lg tracking-tight">Call Us</h4>
                                    <p className="text-xl text-slate-500 font-black">444 9 265</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-white text-3xl">mail</span>
                                </div>
                                <div className="space-y-2 pt-2">
                                    <h4 className="font-black text-background-dark text-lg tracking-tight">Email Address</h4>
                                    <p className="text-lg text-slate-500 font-bold">info@nivdent.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-white text-3xl">schedule</span>
                                </div>
                                <div className="space-y-2 pt-2">
                                    <h4 className="font-black text-background-dark text-lg tracking-tight">Working Hours</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-bold">
                                        Monday - Sunday <br />
                                        (09:00 - 23:00)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[600px] w-full overflow-hidden border-t-8 border-primary">
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
