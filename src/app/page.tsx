"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { useCountUp } from "@/hooks/useCountUp";

const AnimatedStat = ({ end, label, suffix = "", icon }: { end: number, label: string, suffix?: string, icon: string }) => {
  const [inView, setInView] = useState(false);
  const count = useCountUp(inView ? end : 0, 0, 2000);

  return (
    <div
      className="flex flex-col items-center justify-center space-y-4 px-4 relative z-10"
      ref={(el) => {
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) setInView(true);
        }, { threshold: 0.1 });
        observer.observe(el);
      }}
    >
      <div className="w-16 h-16 rounded-full bg-background-dark/90 flex items-center justify-center mb-2 shadow-lg hover:scale-110 transition-transform duration-300">
        <span className="material-symbols-outlined text-white text-3xl font-light">{icon}</span>
      </div>
      <div className="text-4xl md:text-5xl font-black text-white drop-shadow-sm leading-none">
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs font-bold text-background-dark uppercase tracking-[0.15em] text-center max-w-[180px] leading-relaxed">
        {label}
      </div>
    </div>
  );
};


export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formFeedback, setFormFeedback] = useState("");

  const slides = [
    {
      image: "/hero1.webp",
      badge: "# SMILE DESIGN",
      title: "LIFE IS WORTH SMILING AT NIVDENT WHERE WE SERVE WITH OUR EXPERT STAFF",
      text: "Nivdent is always with you to help you achieve the smile of your dreams with its expert team.",
      highlights: ["NIVDENT", "SMILING"]
    },
    {
      image: "/hero2.webp",
      badge: "# IMPLANT AND AESTHETICS",
      title: "RENEW YOUR SMILE WITH MODERN TECHNOLOGY AND OUR EXPERT STAFF",
      text: "For a bright white and healthy smile, Nivdent's expert physician staff and digital treatment methods are always by your side.",
      highlights: ["MODERN", "EXPERT", "RENEW"]
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits
    const val = e.target.value.replace(/\D/g, "");
    setFormData(prev => ({ ...prev, phone: val }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormStatus("error");
      setFormFeedback("Please enter your name and phone number.");
      return;
    }
    setFormStatus("loading");
    setFormFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setFormStatus("success");
        setFormFeedback(data.message || "Your message has been successfully sent.");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setFormStatus("error");
        setFormFeedback(data.error || "An error occurred.");
      }
    } catch (err) {
      setFormStatus("error");
      setFormFeedback("Connection error, please try again.");
    }
  };

  return (
    <>
      {/* Hero Slider Section */}
      <section className="relative h-[700px] md:h-[900px] flex items-center overflow-hidden bg-background-dark">
        {slides.map((slide: any, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === activeSlide ? "opacity-100 scale-105" : "opacity-0 scale-100 pointer-events-none"
              }`}
          >
            <img
              className="w-full h-full object-cover object-right"
              alt={slide.title}
              src={slide.image}
            />
            {/* Very light overlay to let the background logo ("nivdent") show through clearly */}
            <div className="absolute inset-0 bg-black/10 z-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/40 via-transparent to-transparent z-20"></div>
          </div>
        ))}

        <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-30 w-full flex flex-col md:flex-row items-center justify-between gap-12 pb-48 md:pb-0">
          <div className="max-w-4xl">
            {slides.map((slide, index) => (
              index === activeSlide && (
                <div key={index} className="space-y-6">
                  <div className="overflow-hidden pb-1">
                    <div className="animate-reveal-up">
                      <h6 className="inline-block bg-primary text-background-dark px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl">
                        {slide.badge}
                      </h6>
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-[54px] font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] uppercase max-w-2xl flex flex-wrap">
                    {slide.title.split(" ").map((word: any, i: number) => {
                      const isHighlighted = slide.highlights.some(h => word.includes(h));
                      // We wrap each word (or group) in overflow hidden, then slide it up with a staggered delay
                      return (
                        <span key={i} className="overflow-hidden inline-block mr-[0.25em] pb-2">
                          <span className={`inline-block animate-reveal-up ${isHighlighted ? "text-primary" : ""}`} style={{ animationDelay: `${150 + (i * 100)}ms` }}>
                            {word}
                          </span>
                        </span>
                      );
                    })}
                  </h1>

                  <div className="overflow-hidden pb-2">
                    <p className="text-white text-sm md:text-lg font-bold max-w-2xl leading-relaxed drop-shadow-lg animate-reveal-up delay-400">
                      {slide.text}
                    </p>
                  </div>

                  <div className="overflow-hidden pt-4 pb-4">
                    <div className="flex flex-row gap-3 animate-reveal-up delay-500">
                      <Link
                        href="/contact"
                        className="bg-primary hover:bg-white text-background-dark px-4 py-3 md:px-10 md:py-5 rounded-2xl font-black text-[10px] md:text-[12px] uppercase tracking-widest transition-all shadow-2xl flex items-center gap-2 md:gap-4 group"
                      >
                        CONTACT <span className="material-symbols-outlined font-black text-xs md:text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                      <Link
                        href="/about-us"
                        className="bg-primary hover:bg-white text-background-dark px-4 py-3 md:px-10 md:py-5 rounded-2xl font-black text-[10px] md:text-[12px] uppercase tracking-widest transition-all shadow-2xl flex items-center gap-2 md:gap-4 group"
                      >
                        ABOUT US <span className="material-symbols-outlined font-black text-xs md:text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

        </div>

        {/* Slider Arrows */}
        <div className="absolute bottom-6 left-6 md:inset-y-0 md:left-0 md:top-1/2 md:-translate-y-1/2 w-auto md:w-full flex gap-4 md:justify-between px-0 md:px-12 z-20 pointer-events-none">
          <button
            onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-primary hover:text-background-dark text-white border border-white/20 flex items-center justify-center transition-all backdrop-blur-md pointer-events-auto shadow-2xl group"
          >
            <span className="material-symbols-outlined font-black text-2xl md:text-4xl group-hover:-translate-x-1 transition-transform">chevron_left</span>
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-primary hover:text-background-dark text-white border border-white/20 flex items-center justify-center transition-all backdrop-blur-md pointer-events-auto shadow-2xl group"
          >
            <span className="material-symbols-outlined font-black text-2xl md:text-4xl group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeSlide ? "w-10 bg-primary" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
            ></button>
          ))}
        </div>
      </section>


      {/* About Section */}
      <section id="about-us" className="py-20 max-w-7xl mx-auto px-6 md:px-20">

        {/* ── DESKTOP LAYOUT (lg+) ───────────────────────────────── */}
        <div className="hidden lg:flex gap-10">
          {/* Left col: text + hekim image with no gap */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-primary font-black uppercase tracking-widest text-lg mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-black text-background-dark leading-tight mb-5">
              Nivdent Oral and Dental Health Center
            </h3>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              As Nivdent, we aim to offer all the possibilities of modern dentistry to our patients at the highest level. We perfect diagnosis and treatment processes with digital dentistry and our advanced technology imaging systems.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              With our expert physician staff and experienced healthcare personnel, we aim to achieve the best results by creating individual treatment plans for each of our patients. Patient satisfaction and safety are always our priority in our clinic.
            </p>
            {/* Hekim image — no gap, immediate after text */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/nivdent-doctors-group.webp" alt="Nivdent expert doctors"
                width={1200} height={700} quality={95} className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Right col: team image + CTA */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg max-h-[500px]">
              <Image src="/nivdent-employees.webp" alt="Nivdent clinic team"
                width={1200} height={1600} quality={95} priority className="w-full h-full object-cover" />
            </div>
            <a href="tel:+904449265" className="flex items-center gap-5 bg-gradient-to-r from-primary/15 to-primary/5 hover:from-primary/25 hover:to-primary/10 transition-all rounded-2xl px-8 py-5 group">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                <span className="material-symbols-outlined text-white text-2xl">call</span>
              </div>
              <div>
                <p className="text-3xl font-black text-background-dark tracking-wide">444 9 265</p>
                <p className="text-sm text-slate-500 font-semibold">Contact Us Now</p>
              </div>
            </a>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">verified_user</span>
                <div><p className="font-bold text-background-dark">Expert Staff</p><p className="text-sm text-slate-500">Expert physicians in their field</p></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">biotech</span>
                <div><p className="font-bold text-background-dark">Modern Technology</p><p className="text-sm text-slate-500">State-of-the-art equipment</p></div>
              </div>
            </div>
            <Link href="/contact" className="bg-background-dark text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-colors w-fit">
              More Information <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
        </div>

        {/* ── MOBILE LAYOUT (<lg) ────────────────────────────────── */}
        <div className="flex flex-col gap-6 lg:hidden">
          {/* 1. Text */}
          <div>
            <h2 className="text-primary font-black uppercase tracking-widest text-lg mb-2">About Us</h2>
            <h3 className="text-3xl font-black text-background-dark leading-tight mb-5">
              Nivdent Oral and Dental Health Center
            </h3>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              As Nivdent, we aim to offer all the possibilities of modern dentistry to our patients at the highest level. We perfect diagnosis and treatment processes with digital dentistry and our advanced technology imaging systems.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              With our expert physician staff and experienced healthcare personnel, we aim to achieve the best results by creating individual treatment plans for each of our patients. Patient satisfaction and safety are always our priority in our clinic.
            </p>
          </div>
          {/* 2. Team image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image src="/nivdent-employees.webp" alt="Nivdent clinic team"
              width={1200} height={1600} quality={95} priority className="w-full h-auto object-cover" />
          </div>
          {/* 3. CTA */}
          <a href="tel:+904449265" className="flex items-center gap-5 bg-gradient-to-r from-primary/15 to-primary/5 rounded-2xl px-6 py-4 group">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-xl">call</span>
            </div>
            <div>
              <p className="text-2xl font-black text-background-dark">444 9 265</p>
              <p className="text-sm text-slate-500 font-semibold">Contact Us Now</p>
            </div>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">verified_user</span>
              <div><p className="font-bold text-background-dark">Expert Staff</p><p className="text-sm text-slate-500">Expert physicians in their field</p></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">biotech</span>
              <div><p className="font-bold text-background-dark">Modern Technology</p><p className="text-sm text-slate-500">State-of-the-art equipment</p></div>
            </div>
          </div>
          <Link href="/contact" className="bg-background-dark text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-colors w-fit">
            More Information <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>
          {/* 4. Hekim image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image src="/nivdent-doctors-group.webp" alt="Nivdent expert doctors"
              width={1200} height={700} quality={95} className="w-full h-auto object-cover" />
          </div>
        </div>

      </section>

      {/* Animated Stats Section */}
      <section className="hidden md:block py-16 md:py-20 bg-primary w-full shadow-inner relative overflow-hidden border-t border-b border-black/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black rounded-full blur-[120px] -ml-48 -mb-48"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
            <AnimatedStat end={14550} suffix="" label="Treated Patients" icon="dentistry" />
            <AnimatedStat end={350} suffix="" label="Satisfied Patient Reviews" icon="clean_hands" />
            <AnimatedStat end={12} suffix="" label="Expert Doctors" icon="groups" />
            <AnimatedStat end={12} suffix="" label="Years of Healthcare Management Experience" icon="military_tech" />
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center mb-16">
          <h2 className="text-primary font-black uppercase tracking-widest text-lg mb-2 animate-fade-in-up">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-background-dark animate-fade-in-up delay-200">
            Expert Treatments For Flawless Smiles
          </h3>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Implant Treatment",
              slug: "implant-treatment",
              description: "We offer the most natural and robust alternative to your missing teeth with our expert staff.",
              image: "/s1.webp"
            },
            {
              title: "Zirconium Crown",
              slug: "zirconium-crown",
              description: "Redesign your smile with durable crowns in natural tooth color.",
              image: "/zirkonyum-kaplama.webp"
            },
            {
              title: "Orthodontics",
              slug: "orthodontics",
              description: "An aligned smile with clear aligner or braces treatments suitable for all ages.",
              image: "/s3.webp"
            },
            {
              title: "Teeth Whitening",
              slug: "teeth-whitening",
              description: "Professional whitening sessions for a brighter and whiter smile.",
              image: "/s4.webp"
            },
            {
              title: "Porcelain Laminate",
              slug: "porcelain-veneer",
              description: "Aesthetic and impressive results in a short time with minimal intervention to the tooth tissue.",
              image: "/porselen-kaplama.webp"
            },
            {
              title: "Pedodontics",
              slug: "pedodontics",
              description: "We protect the oral and dental health of our children with love and prepare them for the future.",
              image: "/s6.webp"
            }
          ].map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group relative bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Slide-up background */}
              <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="h-56 rounded-3xl overflow-hidden mb-8 shadow-md">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={service.title}
                    src={service.image}
                  />
                </div>
                <div className="space-y-4 flex-grow">
                  <h4 className="text-2xl font-black text-background-dark group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 group-hover:text-white/90 transition-colors duration-300 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
                <div className="pt-8 flex items-center gap-3 text-primary group-hover:text-white font-black uppercase text-xs tracking-widest transition-colors duration-300">
                  <span>Details</span>
                  <div className="w-8 h-8 rounded-full border-2 border-primary group-hover:border-white flex items-center justify-center transition-colors duration-300">
                    <span className="material-symbols-outlined text-sm">north_east</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link href="/services" className="bg-primary text-background-dark px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20 inline-flex items-center gap-3">
            SEE ALL OUR SERVICES <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
      {/* Promotional Video Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="relative h-[550px] rounded-[4rem] overflow-hidden shadow-2xl group animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Nivdent Promotional Video Background"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background-dark/50 backdrop-blur-[2px] flex flex-col items-center justify-center text-center px-10">
              <div className="space-y-6 max-w-3xl">
                <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-sm mb-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-pulse">
                  + VISIT OUR CLINIC
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
                  Nivdent <span className="text-primary italic">Promotional</span> Video
                </h2>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="mx-auto bg-white text-background-dark px-12 py-6 rounded-[2rem] font-black flex items-center gap-6 hover:bg-primary hover:text-white transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 group/btn"
                >
                  <span className="text-xl tracking-tight">Watch Promotion</span>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center group-hover/btn:bg-background-dark transition-all duration-500 rotate-0 group-hover/btn:rotate-[360deg]">
                    <span className="material-symbols-outlined text-3xl">play_arrow</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nivdent Section */}
      <section className="pt-2 pb-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <div className="text-center mb-12 space-y-4">
            <span className="text-primary font-black uppercase tracking-widest text-lg flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-primary/30"></span>
              WHY CHOOSE US
              <span className="w-8 h-[2px] bg-primary/30"></span>
            </span>
            <h2 className="text-4xl font-black text-background-dark tracking-tight">
              Why Nivdent?
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              We Are By Your Side With Our Patient-Oriented and Professional Service Approach.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-12">
              <div className="group flex flex-row lg:flex-row items-center gap-6 text-left lg:text-right">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300 order-first lg:order-last">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">groups</span>
                </div>
                <div className="space-y-2 lg:order-first">
                  <h4 className="text-xl font-bold text-background-dark group-hover:text-primary transition-colors">Expert Staff</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We serve with experienced dentists and healthcare personnel who are experts in their fields.
                  </p>
                </div>
              </div>

              <div className="group flex flex-row lg:flex-row items-center gap-6 text-left lg:text-right">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300 order-first lg:order-last">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">person_check</span>
                </div>
                <div className="space-y-2 lg:order-first">
                  <h4 className="text-xl font-bold text-background-dark group-hover:text-primary transition-colors">Personalized Treatment</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We offer tailored treatment solutions suitable for the individual needs of each of our patients.
                  </p>
                </div>
              </div>

              <div className="group flex flex-row lg:flex-row items-center gap-6 text-left lg:text-right">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300 order-first lg:order-last">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">payments</span>
                </div>
                <div className="space-y-2 lg:order-first">
                  <h4 className="text-xl font-bold text-background-dark group-hover:text-primary transition-colors">Transparent Pricing</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We clearly share our treatment processes and offer affordable prices.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Column (Realistic 3D tooth with rotating particles) */}
            <div className="relative py-20 lg:py-0">
              {/* Glow Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[550px] md:h-[550px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>

              {/* Orbital Particle System */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Orbit 1 (Inner) */}
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`o1-${i}`}
                      className="absolute w-2.5 h-2.5 bg-[#fbc034] rounded-full shadow-[0_0_15px_#fbc034] opacity-90"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 60}deg) translate(160px) rotate(-${i * 60}deg)`,
                      }}
                    ></div>
                  ))}
                </div>
                {/* Orbit 2 (Middle) */}
                <div className="absolute inset-0 animate-[spin_18s_linear_infinite_reverse]">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`o2-${i}`}
                      className="absolute w-2 h-2 bg-[#fbc034] rounded-full shadow-[0_0_20px_#fbc034] opacity-70"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 45 + 22}deg) translate(220px) rotate(-${i * 45 + 22}deg)`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mx-auto w-64 h-64 md:w-[380px] md:h-[380px] flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full flex items-center justify-center animate-float">
                  <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                    <img
                      src="/realistic-tooth.webp"
                      alt="Realistic 3D Tooth"
                      className="w-full h-full object-contain scale-125 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div className="group flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">bolt</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-background-dark group-hover:text-primary transition-colors">Fast Appointment</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We value your time and provide fast and easy appointment processes.
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">neurology</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-background-dark group-hover:text-primary transition-colors">Aesthetic Dentistry</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We produce professional solutions in smile design and aesthetic treatments.
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">biotech</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-background-dark group-hover:text-primary transition-colors">Latest Technology</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We use the most advanced technologies and modern devices in treatment processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Appointment Form Section (Customized for Yellow/Dark theme) */}
      <section className="bg-primary py-16 overflow-hidden border-t border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-center lg:justify-between max-w-7xl mx-auto h-full">
            {/* Left Side: Text Box */}
            <div className="lg:w-[45%] h-full flex flex-col justify-between animate-fade-in-up md:pr-10 text-center lg:text-left pt-6 pb-6">
              <div className="space-y-6">
                <span className="text-black font-black uppercase tracking-widest text-[13px] flex items-center justify-center lg:justify-start gap-4 w-max">
                  <span className="w-16 h-[2px] bg-black/60 rounded-full"></span>
                  DETAILED EXAMINATION
                </span>
                <h2 className="text-4xl md:text-[54px] font-black text-background-dark tracking-tighter leading-[1.05] uppercase drop-shadow-sm">
                  Make An Appointment Now <br />
                  <span className="text-white drop-shadow-md">For Detailed Examination</span>
                </h2>
              </div>
              
              <div className="mt-auto pt-10">
                <p className="text-background-dark/90 text-lg md:text-xl font-bold leading-relaxed max-w-lg">
                  By making an appointment from our Oral and Dental Health Center, you can have all your problems related to your oral health checked by our expert physicians and create your personalized treatment plan.
                </p>
                <div className="mt-6 flex items-center gap-3 text-background-dark font-black uppercase tracking-widest text-sm">
                  <span className="material-symbols-outlined text-white bg-background-dark/20 p-2 rounded-full">health_and_safety</span>
                  OUR PRIORITY IS YOUR HEALTH BECAUSE WE ARE NIVDENT
                </div>
              </div>
            </div>

            {/* Right Side: Form Box */}
            <div className="lg:w-[50%] w-full h-full flex flex-col justify-center animate-fade-in-up delay-200">
              <div className="bg-background-dark p-10 md:p-14 lg:p-16 rounded-[2.5rem] shadow-2xl relative w-full border border-white/5">
                <form onSubmit={handleFormSubmit} className="space-y-8 relative z-10 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <input
                        type="text"
                        placeholder="Name Surname"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-slate-800/80 text-white placeholder:text-slate-400/80 px-6 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm font-medium border border-white/5"
                        disabled={formStatus === "loading"}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full bg-slate-800/80 text-white placeholder:text-slate-400/80 px-6 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm font-medium border border-white/5"
                        disabled={formStatus === "loading"}
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-slate-800/80 text-white placeholder:text-slate-400/80 px-6 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm font-medium border border-white/5 resize-none"
                      disabled={formStatus === "loading"}
                    ></textarea>
                  </div>

                  {formFeedback && (
                    <div className={`p-4 rounded-xl text-sm font-bold text-center ${formStatus === "success" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                      {formFeedback}
                    </div>
                  )}

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="bg-primary text-background-dark px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-white hover:text-background-dark transition-all shadow-[0_5px_20px_rgba(251,192,52,0.4)] hover:shadow-xl flex items-center justify-center gap-3 group disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {formStatus === "loading" ? "SENDING..." : "CREATE APPOINTMENT"}
                      <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center mb-16 space-y-4">
          <span className="text-primary font-black uppercase tracking-widest text-lg flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-primary/30"></span>
            GET TO KNOW NIVDENT
            <span className="w-8 h-[2px] bg-primary/30"></span>
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, video: "/tanitim1.mp4", title: "Smile Design Experience" },
              { id: 2, video: "/tanitim2.mp4", title: "Modern Clinic Tour" },
              { id: 3, video: "/tanitim3.mp4", title: "Expert Doctor Opinions" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative aspect-video md:aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl animate-fade-in-up border border-slate-100 bg-slate-900"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <video
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1s]"
                  muted
                  loop
                  playsInline
                  preload="none"
                  onMouseOver={(e) => e.currentTarget.play().catch(() => { })}
                  onMouseOut={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                  onTouchStart={(e) => e.currentTarget.play().catch(() => { })}
                  ref={(el) => {
                    // Start playing initially low volume or just rely on interaction
                    if (el && typeof window !== 'undefined' && window.innerWidth < 1024) {
                      // Autoplay can be tricky on mobile without interaction, so we add touchStart above. 
                      // We can try to play it anyway if muted.
                      el.play().catch(() => { });
                    }
                  }}
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 space-y-4 pointer-events-none">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-125 transition-transform duration-500">
                    <span className="material-symbols-outlined text-2xl">play_arrow</span>
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xl tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                      Nivdent Dental Clinic
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-widest text-lg flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary/30"></span>
                CURRENT INFORMATION
              </span>
              <h2 className="text-4xl font-black text-background-dark tracking-tight">
                Dental Health <span className="text-primary">Blog</span>
              </h2>
            </div>
            <Link href="/blog" className="text-background-dark font-black uppercase text-sm tracking-widest hover:text-primary transition-colors flex items-center gap-2 group">
              SEE ALL POSTS <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={index} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up flex flex-col" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="h-64 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black text-primary uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="p-10 space-y-4">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    {post.date}
                  </div>
                  <h4 className="text-2xl font-black text-background-dark group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {post.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-background-dark font-black uppercase text-xs tracking-widest pt-4 group/link">
                    READ MORE <span className="material-symbols-outlined text-primary group-hover/link:translate-x-1 transition-transform">arrow_right_alt</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Side: Text Content */}
            <div className="space-y-8 sticky top-0 flex flex-col justify-start animate-fade-in-up">
              <div className="space-y-4">
                <span className="text-primary font-black uppercase tracking-widest text-lg flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-primary/30"></span>
                  INFORMATION CENTER
                </span>
                <h2 className="text-4xl font-black text-background-dark tracking-tight leading-tight">
                  Curiosities & <br /> <span className="text-primary">Frequently Asked Questions</span>
                </h2>
              </div>
              <div className="space-y-6 text-slate-600 font-medium leading-[1.8]">
                <p className="text-lg">
                  You can find all the details you wonder about our Oral and Dental Health Center in this section.
                </p>
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border-l-4 border-primary space-y-4">
                  <p className="italic">
                    "Although we can research on our own on the internet and find general results about the cause of the problem, we should not forget that every case is unique and a specialist must be consulted for the most accurate solution."
                  </p>
                  <p className="font-black text-background-dark text-sm uppercase tracking-widest">
                    — NIVDENT EXPERT TEAM
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <Link href="/faq" className="bg-background-dark text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-background-dark transition-all duration-300 shadow-xl flex items-center gap-3">
                  SEE ALL QUESTIONS <span className="material-symbols-outlined">chat</span>
                </Link>
              </div>
            </div>

            {/* Right Side: Accordion Cards */}
            <div className="space-y-6">
              {[
                {
                  q: "Does teeth whitening damage teeth?",
                  a: "Professional teeth whitening procedures performed under the supervision of a specialist physician have no permanent damage on tooth enamel. Only short-term mild sensitivity may be seen."
                },
                {
                  q: "What is the lifespan of zirconium crowns?",
                  a: "With correct oral care and regular physician checks, zirconium crowns can be safely used for 10-15 years or even longer."
                },
                {
                  q: "When should children go to the dentist for the first time?",
                  a: "The first examination should be done after the first primary teeth erupt or at the latest by the age of 1, which is of great importance for future oral health."
                },
                {
                  q: "How long does smile design take?",
                  a: "Although the treatment period varies depending on the procedures to be performed, you can get your new smile within 1 week with digital design processes usually completed in 2-3 sessions."
                }
              ].map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`group rounded-[2.5rem] border transition-all duration-500 animate-fade-in-up ${isOpen
                      ? 'bg-white border-primary/20 shadow-2xl shadow-primary/5'
                      : 'bg-slate-50 border-transparent hover:border-primary/10 hover:bg-white'
                      }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full text-left outline-none"
                    >
                      <div className="flex items-center justify-between p-10 font-black text-background-dark transition-colors duration-500">
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

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                      <div className="px-10 pb-10 text-slate-500 font-medium leading-relaxed">
                        <div className="pt-4 border-t border-slate-100">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {
        isVideoOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <div
              className="absolute inset-0 bg-background-dark/95 backdrop-blur-sm"
              onClick={() => setIsVideoOpen(false)}
            ></div>
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 animate-scale-in">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <iframe
                src="https://www.youtube.com/embed/wqEQxMk1_5o?autoplay=1"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )
      }
    </>
  );
}
