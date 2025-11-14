import React, { useEffect, useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { supabase } from '@/lib/supabase';
import { Clock, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  category: string;
  tags: string[];
  read_time: number;
  created_at: string;
}

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'ai-tips', label: 'AI Tips' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'guides', label: 'Simple Guides' },
    { id: 'reflections', label: 'Event Reflections' },
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  const placeholderPosts = [
    {
      id: '1',
      title: 'Getting Started with AI: A Guide for Kids',
      excerpt: 'Learn the basics of artificial intelligence in simple, fun ways that anyone can understand.',
      category: 'ai-tips',
      tags: ['beginner', 'ai-basics'],
      read_time: 5,
      created_at: new Date().toISOString(),
      featured_image: '/images/modern_digital_interfaces_5.jpg',
    },
    {
      id: '2',
      title: 'How I Built My First AI Bot',
      excerpt: 'A step-by-step walkthrough of creating an AI WhatsApp bot using n8n and ChatGPT.',
      category: 'tutorials',
      tags: ['tutorial', 'chatgpt', 'automation'],
      read_time: 8,
      created_at: new Date().toISOString(),
      featured_image: '/images/ai_robotics_visuals_0.jpg',
    },
    {
      id: '3',
      title: '5 Ways Kids Can Use AI for School Projects',
      excerpt: 'Practical AI tools and techniques that students can use to enhance their learning and homework.',
      category: 'guides',
      tags: ['education', 'school', 'practical'],
      read_time: 6,
      created_at: new Date().toISOString(),
      featured_image: '/images/modern_digital_interfaces_3.jpg',
    },
  ];

  const displayPosts = posts.length > 0 ? filteredPosts : placeholderPosts;

  return (
    <div className="min-h-screen bg-gradient-main">
      {/* Header */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-h1 font-semibold text-neutral-900">
              AI Tips & Tutorials
            </h1>
            <p className="text-lg md:text-xl text-neutral-700">
              Easy-to-understand guides, tutorials, and tips for learning AI and technology
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-18 z-40 bg-gradient-main/80 backdrop-blur-[15px] border-b border-white/25">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-fast ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-solid'
                    : 'bg-white/40 text-neutral-900 hover:bg-white/50 border border-white/25'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center text-neutral-700">Loading posts...</div>
          ) : displayPosts.length === 0 ? (
            <div className="text-center">
              <GlassCard className="p-12 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Coming Soon
                </h3>
                <p className="text-neutral-700">
                  New blog posts are on the way! Check back soon for AI tips, tutorials, and guides.
                </p>
              </GlassCard>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPosts.map((post) => (
                <GlassCard key={post.id} className="p-0 overflow-hidden group">
                  <div className="aspect-video bg-neutral-100 overflow-hidden">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      {post.category && (
                        <span className="flex items-center gap-1">
                          <Tag size={14} />
                          {post.category}
                        </span>
                      )}
                      {post.read_time && (
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.read_time} min read
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-700">{post.excerpt}</p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8 md:p-12 text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900">
              Stay Updated
            </h2>
            <p className="text-lg text-neutral-700">
              Follow me on Instagram and YouTube for the latest AI tips and tutorials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/aiwithayesha"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-500 text-white rounded-sm font-semibold hover:bg-primary-600 transition-colors"
              >
                Follow on Instagram
              </a>
              <a
                href="https://www.youtube.com/@aiwithayesha"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/40 text-neutral-900 border border-white/40 rounded-sm font-semibold hover:bg-white/50 transition-colors"
              >
                Subscribe on YouTube
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
