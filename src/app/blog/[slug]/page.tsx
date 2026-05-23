"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogPosts } from "@/data/blog";

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Find the current blog post
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-black text-background-dark">Post Not Found</h1>
                    <Link href="/blog" className="text-primary hover:underline font-bold">
                        Return to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Slim Header Section */}
            <section className="relative bg-background-dark pt-10 pb-8 overflow-hidden border-b border-white/10">
                {/* Transparent Decorative Graphic */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-20 pointer-events-none">
                    <img src={post.image} alt="" className="w-96 h-96 object-cover rounded-full mix-blend-screen scale-150 blur-sm" />
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10 w-full text-center">
                    <div className="space-y-4 max-w-3xl mx-auto flex flex-col items-center">
                        <Link href="/blog" className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all animate-fade-in-up">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> ALL POSTS
                        </Link>

                        <div className="flex items-center gap-4 text-slate-400 text-sm font-bold uppercase tracking-widest animate-fade-in-up delay-100">
                            <span>{post.category}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                            <span>{post.date}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight animate-fade-in-up delay-200">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Post Content & Sidebar */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden animate-fade-in-up delay-300">
                            <div className="h-64 sm:h-96 w-full relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-8 md:p-12 lg:p-16">
                                <div
                                    className="prose prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:text-background-dark prose-headings:tracking-tight prose-a:text-primary prose-a:font-bold hover:prose-a:text-background-dark transition-all prose-li:font-medium prose-p:text-slate-600 prose-p:font-medium text-justify prose-img:rounded-3xl prose-img:shadow-lg"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8 animate-fade-in-up delay-400">
                            {/* Other Posts Component */}
                            <div className="bg-white rounded-[2rem] shadow-xl p-8">
                                <h3 className="text-2xl font-black text-background-dark border-b border-background-dark/10 pb-4 mb-6">
                                    Other Posts
                                </h3>
                                <div className="space-y-6">
                                    {blogPosts.filter(p => p.slug !== post.slug).map((otherPost, idx) => (
                                        <Link href={`/blog/${otherPost.slug}`} key={idx} className="group flex gap-4 items-center">
                                            <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden shadow-md border border-background-dark/5">
                                                <img src={otherPost.image} alt={otherPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">{otherPost.category}</span>
                                                <h4 className="text-sm font-bold text-background-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug mt-1">
                                                    {otherPost.title}
                                                </h4>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Help / CTA Box */}
                            <div className="bg-primary rounded-[2rem] shadow-xl p-8 text-center text-background-dark">
                                <div className="w-16 h-16 mx-auto mb-4 bg-black/10 rounded-full flex items-center justify-center shadow-inner">
                                    <span className="material-symbols-outlined text-4xl leading-none">support_agent</span>
                                </div>
                                <h3 className="text-xl font-black mb-2 tracking-tight">Do You Have Questions?</h3>
                                <p className="text-sm font-bold opacity-80 mb-6 px-2">Contact us to meet with our expert medical staff and get detailed information.</p>
                                <Link href="/contact" className="inline-block bg-background-dark text-white font-black tracking-widest text-xs uppercase px-8 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
