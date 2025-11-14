import React from 'react';
import { Link } from 'react-router-dom';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Sparkles, Users, Presentation, Code, Award, Trophy, Instagram, Youtube, MessageCircle, ExternalLink } from 'lucide-react';

export function HomePage() {
  const highlights = [
    { icon: Award, label: 'Age 11', description: 'Young AI Creator' },
    { icon: Trophy, label: 'SkillBridge AI', description: 'Special Admission' },
    { icon: Users, label: 'COMPEC EAP', description: 'NUST SEECS Program' },
    { icon: Presentation, label: 'STEM Expo', description: 'Multiple Presentations' },
    { icon: Code, label: '10+ Projects', description: 'AI & Tech Portfolio' },
    { icon: Sparkles, label: 'Tech Speaker', description: 'School Talks' },
  ];

  const quickActions = [
    {
      title: 'AI Projects',
      description: 'Explore my portfolio of AI bots, games, and applications',
      link: '/projects',
      icon: Code,
    },
    {
      title: 'School Talks',
      description: 'Book me for educational presentations on AI and technology',
      link: '/speaking',
      icon: Presentation,
    },
    {
      title: 'Bot Building',
      description: 'Learn how I create WhatsApp AI bots and custom GPTs',
      link: '/projects',
      icon: Sparkles,
    },
    {
      title: 'AI Tips',
      description: 'Read my latest tutorials and guides on AI for kids',
      link: '/blog',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-hero py-12 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative px-5 py-2.5 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 rounded-full text-sm font-semibold shadow-glow border border-primary-200/50">
                  Pakistan's Top AI Kid
                </div>
              </div>
              <h1 className="text-4xl md:text-hero font-bold text-neutral-900 leading-tight">
                I'm Ayesha — Pakistan's Youngest AI Creator & Youth Tech Speaker
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                At 11 years old, I'm building AI projects, teaching kids about technology, 
                and speaking at schools and events across Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <a 
                    href="https://www.youtube.com/@ai_with_ayesha" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Watch My Latest Video
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/speaking">Invite Me to Speak</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in">
              <GlassCard className="p-4 overflow-hidden">
                <img
                  src="/images/young_innovators_0.png"
                  alt="Ayesha Arif - AI Creator"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-12 md:py-24 bg-gradient-main">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <GlassCard
                  key={index}
                  className="p-6 text-center space-y-3"
                  hover
                >
                  <Icon className="w-8 h-8 mx-auto text-primary-500" />
                  <div className="font-semibold text-neutral-900">{highlight.label}</div>
                  <div className="text-sm text-neutral-700">{highlight.description}</div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Section - Prominent */}
      <section className="py-12 md:py-20 bg-gradient-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(186,104,200,0.3),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(156,39,176,0.2),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-h2 font-bold text-white">
              Connect With Me
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Join my community and follow my AI journey on social media
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@ai_with_ayesha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <GlassCard className="p-8 text-center space-y-4 bg-white/20 border-white/30 hover:bg-white/30 hover:scale-105 hover:shadow-glow-strong transition-all duration-300">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/40 transition-all"></div>
                  <Youtube className="w-16 h-16 mx-auto text-white relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">YouTube</h3>
                <p className="text-white/90">
                  Watch my AI tutorials and project demos
                </p>
                <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
                  <span>Subscribe Now</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </GlassCard>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/ai_with_ayesha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <GlassCard className="p-8 text-center space-y-4 bg-white/20 border-white/30 hover:bg-white/30 hover:scale-105 hover:shadow-glow-strong transition-all duration-300">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/40 transition-all"></div>
                  <Instagram className="w-16 h-16 mx-auto text-white relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Instagram</h3>
                <p className="text-white/90">
                  See behind-the-scenes and daily updates
                </p>
                <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
                  <span>Follow Me</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </GlassCard>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/923162092866" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <GlassCard className="p-8 text-center space-y-4 bg-white/20 border-white/30 hover:bg-white/30 hover:scale-105 hover:shadow-glow-strong transition-all duration-300">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/40 transition-all"></div>
                  <MessageCircle className="w-16 h-16 mx-auto text-white relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
                <p className="text-white/90">
                  Message me directly for collaborations
                </p>
                <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium">
                  <span>Chat Now</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </GlassCard>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-12 md:py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900">
              Featured Interview
            </h2>
            <p className="text-lg text-neutral-700">
              Watch my interview with Kanwal Cheema, founder of SkillBridge AI Bootcamp
            </p>
            <GlassCard className="p-4 md:p-8">
              <div className="aspect-video bg-neutral-100 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-4xl">🎬</div>
                  <p className="text-neutral-700">
                   
                  </p>
                  <Button variant="primary" asChild>
                    <a 
                      href="https://youtu.be/k1_R8qlMRU8?si=mwQMCc8B_awNBe3R" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Watch on YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="py-12 md:py-24 bg-gradient-main">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-12">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} to={action.link}>
                  <GlassCard className="p-6 h-full space-y-4 hover:scale-105">
                    <Icon className="w-12 h-12 text-primary-500" />
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {action.title}
                    </h3>
                    <p className="text-neutral-700">{action.description}</p>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8 md:p-12 text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900">
              Let's Work Together
            </h2>
            <p className="text-lg text-neutral-700">
              Interested in having me speak at your school or event? 
              Want to collaborate on an AI project? Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a 
                  href="https://wa.me/923162092866" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp Me
                </a>
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
