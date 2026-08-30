import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../../data/blog';

export default function FeaturedBlog() {
  const featuredPost = BLOG_POSTS[0];
  const recentPosts = BLOG_POSTS.slice(1, 3);

  return (
    <section className="py-14 bg-bg-dark border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-gold text-xs font-bold tracking-widest uppercase mb-1">
              <Newspaper className="w-3.5 h-3.5" />
              <span>INDUSTRY INSIGHTS</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Latest Articles & <span className="gold-gradient-text">Updates</span>
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              In-depth research on RNG certification, cybersecurity standards, and the evolution of digital gaming.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:text-gold-bright hover:underline transition-colors shrink-0"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog layout: Featured hero card on left, 2 secondary cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Featured Post */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#161616] via-[#121212] to-[#0A0A0A] border border-gold/30 hover:border-gold p-6 sm:p-8 transition-all group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold text-black">
                  FEATURED
                </span>
                <span className="text-xs text-neutral-400 font-medium">
                  {featuredPost.category}
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-gold transition-colors leading-snug mb-3">
                {featuredPost.title}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {featuredPost.summary}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
              <span className="text-xs text-neutral-500">
                By {featuredPost.author} • {featuredPost.date}
              </span>
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gold group-hover:underline"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Secondary Posts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="flex-1 flex flex-col justify-between rounded-2xl bg-[#121212] border border-neutral-800 hover:border-gold/40 p-6 transition-all group hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold text-gold tracking-wide uppercase">
                      {post.category}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-[11px] text-neutral-400">{post.readTime}</span>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-gold transition-colors mb-2 leading-snug">
                    {post.title}
                  </h4>

                  <p className="text-xs text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80">
                  <span className="text-[11px] text-neutral-500">{post.date}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-bold text-gold group-hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
