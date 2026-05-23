"use client";
import React from "react";
import Link from "next/link";

export default function MobileNavbar() {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/85 backdrop-blur-xl border-t border-slate-200/50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] px-1 py-1.5">
            <div className="flex items-center justify-between pointer-events-auto">
                
                {/* Home */}
                <Link
                    href="/"
                    onClick={() => typeof window !== "undefined" && window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex-1 flex flex-col items-center justify-center gap-1 py-1"
                >
                    <div className="w-[38px] h-[38px] bg-[#3b82f6] rounded-[10px] flex items-center justify-center shadow-sm text-white">
                        <span className="material-symbols-outlined text-[20px]">home</span>
                    </div>
                    <span className="text-[9px] font-black text-slate-700 tracking-wider">HOME</span>
                </Link>

                {/* Location */}
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Tantavi+Mente%C5%9Fo%C4%9Flu+Cd.+No:25+Umraniye+Istanbul"
                    target="_blank"
                    className="flex-1 flex flex-col items-center justify-center gap-1 py-1"
                >
                    <div className="w-[38px] h-[38px] bg-[#f59e0b] rounded-[10px] flex items-center justify-center shadow-sm text-white">
                        <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <span className="text-[9px] font-black text-slate-700 tracking-wider">LOCATION</span>
                </a>

                {/* Phone */}
                <a
                    href="tel:4449265"
                    className="flex-1 flex flex-col items-center justify-center gap-1 py-1"
                >
                    <div className="w-[38px] h-[38px] bg-[#10b981] rounded-[10px] flex items-center justify-center shadow-sm text-white">
                        <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <span className="text-[9px] font-black text-slate-700 tracking-wider">CALL</span>
                </a>

                {/* WhatsApp */}
                <a
                    href="https://api.whatsapp.com/send/?phone=905302359265&text&type=phone_number&app_absent=0"
                    target="_blank"
                    className="flex-1 flex flex-col items-center justify-center gap-1 py-1"
                >
                    <div className="w-[38px] h-[38px] bg-[#25D366] rounded-[10px] flex items-center justify-center shadow-sm text-white">
                        <i className="fab fa-whatsapp text-[22px]"></i>
                    </div>
                    <span className="text-[9px] font-black text-[#0f7669] tracking-wider relative z-10">WHATSAPP</span>
                </a>

            </div>
        </div>
    );
}
