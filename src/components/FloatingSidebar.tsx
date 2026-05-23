"use client";
import React from "react";

export default function FloatingSidebar() {
    return (
        <div className="hidden lg:flex fixed right-6 bottom-6 z-[60] flex-col gap-2.5 pointer-events-none">
            {/* Appointment Button */}
            <button
                onClick={() => {
                    const url = "https://www.ddstablet.com/ONLINE_APPOINTMENT/?a=Vm1ZcTN0Nnc5eiRDJkYpSkBOY1JmVWpYblpyNHU3eCFBJUQqRy1LYVBkU2dWa1lwM3M1djh5L0I/RShIK01iUQ==&b=ZGRzMzE3Nw==";
                    const w = 600, h = 800;
                    const left = window.innerWidth / 2 - w / 2;
                    const top = window.innerHeight / 2 - h / 2;
                    window.open(url, "Online Appointment", `width=${w},height=${h},top=${top},left=${left},resizable=yes,scrollbars=yes`);
                }}
                className="w-13 h-13 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all pointer-events-auto group"
                title="Online Appointment"
            >
                <span className="material-symbols-outlined text-[28px] group-hover:animate-pulse">calendar_month</span>
            </button>

            {/* Facebook Button */}
            <a
                href="https://facebook.com/nivdent"
                target="_blank"
                className="w-13 h-13 bg-[#4267B2] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all pointer-events-auto"
                title="Facebook"
            >
                <i className="fab fa-facebook-f text-xl"></i>
            </a>

            {/* Instagram Button */}
            <a
                href="https://instagram.com/nivdent"
                target="_blank"
                className="w-13 h-13 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all pointer-events-auto"
                title="Instagram"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>

            {/* WhatsApp Button */}
            <a
                href="https://api.whatsapp.com/send/?phone=905302359265&text&type=phone_number&app_absent=0"
                target="_blank"
                className="w-13 h-13 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all pointer-events-auto group"
                title="WhatsApp"
            >
                <i className="fab fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
            </a>
        </div>
    );
}
