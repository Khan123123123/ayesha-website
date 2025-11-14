import React, { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Code, Bot, Gamepad2, Video, Database, Sparkles, BookOpen } from 'lucide-react';

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'bot',
      icon: Bot,
      title: 'AI Tip Bot',
      description: 'WhatsApp bot using n8n + GPT that sends automated daily AI tips to subscribers',
      tools: ['n8n', 'ChatGPT API', 'WhatsApp'],
      image: '/images/ai_robotics_visuals_0.jpg',
    },
    {
      id: 2,
      category: 'ai',
      icon: Sparkles,
      title: 'Custom GPT Systems',
      description: 'Multiple custom GPTs designed specifically for kids and students to learn AI concepts',
      tools: ['ChatGPT', 'Custom Instructions'],
      image: '/images/modern_digital_interfaces_2.jpg',
    },
    {
      id: 3,
      category: 'game',
      icon: Gamepad2,
      title: 'Tunnel Storm Game',
      description: 'Python 3D game with Ursina engine featuring neon-style graphics and immersive gameplay',
      tools: ['Python', 'Ursina Engine'],
      image: '/images/modern_digital_interfaces_3.jpg',
    },
    {
      id: 4,
      category: 'app',
      icon: Code,
      title: 'AI Whiteboard App',
      description: 'Python drawing tool with custom UI for creating and sharing digital artwork',
      tools: ['Python', 'Tkinter'],
      image: '/images/ai_robotics_visuals_1.jpg',
    },
    {
      id: 5,
      category: 'app',
      icon: Database,
      title: 'Firebase Student App',
      description: 'Full-stack application with authentication and database, featuring login and dashboard',
      tools: ['Firebase', 'Authentication', 'Realtime Database'],
      image: '/images/modern_digital_interfaces_5.jpg',
    },
    {
      id: 6,
      category: 'video',
      icon: Video,
      title: 'Patriotic AI Video',
      description: '1-minute professional video using ChatGPT for script, Veo3 for generation, and Filmora 14 for editing',
      tools: ['ChatGPT', 'Veo3', 'Filmora 14'],
      image: '/images/ai_robotics_visuals_9.JPG',
    },
    {
      id: 7,
      category: 'content',
      icon: BookOpen,
      title: 'AI Learning Content',
      description: 'Educational reels and tutorials teaching AI concepts to kids in simple, fun ways',
      tools: ['Video Editing', 'Content Creation'],
      image: '/images/young_innovators_8.jpg',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'bot', label: 'AI Bots' },
    { id: 'game', label: 'Games' },
    { id: 'video', label: 'Videos' },
    { id: 'app', label: 'Apps' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-main">
      {/* Header */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-h1 font-semibold text-neutral-900">
              AI Projects & Tech Skills
            </h1>
            <p className="text-lg md:text-xl text-neutral-700">
              A showcase of my AI projects, applications, and creative work
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-18 z-40 bg-gradient-main/80 backdrop-blur-[15px] border-b border-white/25">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-fast ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white shadow-solid'
                    : 'bg-white/40 text-neutral-900 hover:bg-white/50 border border-white/25'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <GlassCard key={project.id} className="p-6 space-y-4 group">
                  <div className="aspect-video bg-neutral-100 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 flex-1">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-neutral-700">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8 md:p-12 text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900">
              Want to Learn More?
            </h2>
            <p className="text-lg text-neutral-700">
              Follow me on Instagram and YouTube to see my latest projects and AI tutorials
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
