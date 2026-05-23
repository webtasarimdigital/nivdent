import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col bg-slate-50 flex-grow">
      <main className="flex-grow flex items-center justify-center py-24 px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute top-10 right-10 opacity-10 rotate-12 -z-10 pointer-events-none">
          <span className="material-symbols-outlined text-[200px] text-primary">dentistry</span>
        </div>
        <div className="absolute bottom-10 left-10 opacity-10 -rotate-12 -z-10 pointer-events-none">
          <span className="material-symbols-outlined text-[150px] text-background-dark">healing</span>
        </div>

        <div className="max-w-3xl w-full text-center space-y-10 z-10 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-8xl md:text-[150px] font-black text-background-dark drop-shadow-lg leading-none tracking-tighter mix-blend-multiply">
              4<span className="text-primary">0</span>4
            </h1>
            <div className="inline-block bg-background-dark text-primary px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-xl rotate-[-2deg]">
              Page Not Found
            </div>
          </div>

          <div className="space-y-6 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
              Looks Like You've Come <br className="hidden md:block"/> to the Wrong Place
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
              The page you are looking for may have been deleted, its name changed, or is temporarily unavailable. You can return to our home page to get your smile back.
            </p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="bg-primary text-background-dark px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-white hover:text-background-dark transition-all shadow-[0_5px_20px_rgba(251,192,52,0.4)] hover:shadow-xl flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">home</span>
              RETURN TO HOME
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-background-dark border-2 border-slate-200 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
