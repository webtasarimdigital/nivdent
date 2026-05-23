"use client";
import React from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
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
                        LATEST INFORMATION
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-100">
                        Dental Health Blog
                    </h1>
                    <p className="text-slate-400 font-medium animate-fade-in-up delay-200">
                        Read the most up-to-date information on oral and dental health, treatment processes, and our recommendations for a healthy smile.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 max-w-7xl mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up flex flex-col"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black text-primary uppercase tracking-widest">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">{post.date}</span>
                                <h3 className="text-2xl font-black text-background-dark mb-4 group-hover:text-primary transition-colors tracking-tight line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                                    {post.desc}
                                </p>
                                <div className="mt-auto text-primary font-black text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                    READ MORE <span className="material-symbols-outlined">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
