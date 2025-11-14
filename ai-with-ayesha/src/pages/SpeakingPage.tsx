import React from 'react';
import { Link } from 'react-router-dom';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Lightbulb, School, Shield, Zap, Rocket, Clock, Globe, Languages } from 'lucide-react';

export function SpeakingPage() {
  const topics = [
    {
      icon: Lightbulb,
      title: 'AI for Kids',
      description: 'What is AI, how it works, and why kids should learn it early',
    },
    {
      icon: School,
      title: 'How to Use AI in School',
      description: 'Practical ways students can use AI tools for learning and homework',
    },
    {
      icon: Shield,
      title: 'AI Safety',
      description: 'Understanding AI risks and how to use AI responsibly',
    },
    {
      icon: Zap,
      title: 'Simple Automations',
      description: 'Creating basic AI bots and automation tools',
    },
    {
      icon: Rocket,
      title: 'Future of Technology',
      description: 'How AI and tech will shape our future careers and lives',
    },
  ];

  const formats = [
    {
      icon: Clock,
      title: 'Duration',
      details: '20-40 minutes',
    },
    {
      icon: Globe,
      title: 'Format',
      details: 'Online or In-person',
    },
    {
      icon: Languages,
      title: 'Languages',
      details: 'English + Urdu',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-main">
      {/* Header */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-h1 font-semibold text-neutral-900">
              Speaking Engagements
            </h1>
            <p className="text-lg md:text-xl text-neutral-700">
              For schools, events, and institutions looking to inspire students with AI and technology
            </p>
          </div>
        </div>
      </section>

      {/* Speaking Intro */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900">
                Bringing AI to Young Minds
              </h2>
              <p className="text-lg text-neutral-700">
                As an 11-year-old AI creator, I speak the language kids understand. 
                My presentations make AI fun, accessible, and inspiring for students of all ages.
              </p>
              <p className="text-neutral-700">
                I've presented at schools, STEM expos, and educational events, 
                helping hundreds of students discover the exciting world of artificial intelligence.
              </p>
            </div>
            <div>
              <img
                src="/images/professional_tech_presentations_0.jpeg"
                alt="Ayesha speaking"
                className="w-full h-auto rounded-lg object-cover shadow-glass"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12 md:py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-12">
            Speaking Topics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <GlassCard key={index} className="p-6 space-y-4">
                  <Icon className="w-12 h-12 text-primary-500" />
                  <h3 className="text-xl font-semibold text-neutral-900">{topic.title}</h3>
                  <p className="text-neutral-700">{topic.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Format Details */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-12">
            Session Details
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {formats.map((format, index) => {
              const Icon = format.icon;
              return (
                <GlassCard key={index} className="p-6 space-y-4 text-center">
                  <Icon className="w-12 h-12 mx-auto text-primary-500" />
                  <h3 className="text-xl font-semibold text-neutral-900">{format.title}</h3>
                  <p className="text-lg text-neutral-700">{format.details}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Speaking */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-12">
            Past Presentations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard className="p-6 space-y-4">
              <img
                src="/images/professional_tech_presentations_2.jpeg"
                alt="Roots International presentation"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-neutral-900">
                Roots International School
              </h3>
              <p className="text-neutral-700">
                Delivered a 45-minute presentation on AI fundamentals and practical applications for students
              </p>
            </GlassCard>
            <GlassCard className="p-6 space-y-4">
              <img
                src="/images/professional_tech_presentations_1.png"
                alt="STEM Expo"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-neutral-900">
                STEM Expo & Events
              </h3>
              <p className="text-neutral-700">
                Multiple presentations at STEM exhibitions showcasing AI projects and demonstrating technology
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8 md:p-12 text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900">
              Invite Ayesha to Speak
            </h2>
            <p className="text-lg text-neutral-700">
              Book me for your school assembly, tech event, or educational workshop. 
              Let's inspire the next generation of AI creators together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Send Speaking Request</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a 
                  href="https://wa.me/923162092866" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp Inquiry
                </a>
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
