import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Share2,
  AlertTriangle,
  ChevronRight,
  Bookmark
} from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-bg-dark text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md p-8 rounded-2xl bg-[#121212] border border-neutral-800">
          <AlertTriangle className="w-12 h-12 text-gold mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">Article Not Found</h2>
          <p className="text-sm text-neutral-400 mb-6">The requested article could not be found.</p>
          <Link
            to="/blog"
            className="px-6 py-2.5 rounded-xl bg-gold text-black font-bold text-xs uppercase inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-bg-dark text-white pb-16">
      <SecondaryNav />

      {/* Breadcrumbs */}
      <div className="bg-[#090909] border-b border-neutral-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-gold">Blog</Link>
            <span>/</span>
            <span className="text-neutral-200 font-semibold truncate max-w-xs">{post.title}</span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 text-gold hover:underline font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Meta Header */}
        <div className="space-y-4 pb-8 border-b border-neutral-800">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold/15 text-gold border border-gold/30">
              {post.category}
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold flex items-center justify-center font-bold text-gold">
              A
            </div>
            <div>
              <div className="text-sm font-bold text-white">{post.author}</div>
              <div className="text-xs text-neutral-500">Research & Editorial Division</div>
            </div>
          </div>
        </div>

        {/* Post Body */}
        <div className="py-8 space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed">
          {post.content.map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="font-display font-bold text-xl sm:text-2xl text-white pt-4 pb-1">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <li key={idx} className="ml-4 list-disc text-neutral-300">
                  {paragraph.replace('- ', '')}
                </li>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        {/* Informational Notice */}
        <DisclaimerBanner compact={true} />

        {/* Related Posts */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <h4 className="font-display font-bold text-lg text-white mb-4">
            More Articles
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="p-5 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-gold/40 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-gold uppercase">{rel.category}</span>
                  <h5 className="font-bold text-sm text-white group-hover:text-gold transition-colors mt-1">
                    {rel.title}
                  </h5>
                </div>
                <div className="mt-4 text-xs text-neutral-500 flex items-center justify-between">
                  <span>{rel.readTime}</span>
                  <ChevronRight className="w-4 h-4 text-gold" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
}
