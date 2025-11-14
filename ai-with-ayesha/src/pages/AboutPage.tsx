import React from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Award, Target, Heart, TrendingUp } from 'lucide-react';

export function AboutPage() {
  const timeline = [
    {
      year: '2022',
      age: 'Age 9',
      title: 'The Beginning',
      description: 'Started learning about AI and technology, fascinated by how machines can learn and help people.',
    },
    {
      year: '2023',
      age: 'Age 10',
      title: 'First Projects',
      description: 'Created my first AI projects and started sharing what I learned with other kids.',
    },
    {
      year: '2024',
      age: 'Age 11',
      title: 'SkillBridge Admission',
      description: 'Gained special admission to SkillBridge AI Bootcamp. Successfully completed quizzes and started speaking at schools.',
    },
    {
      year: '2024',
      age: 'Age 11',
      title: 'STEM & COMPEC',
      description: 'Presented at STEM Expos and joined COMPEC EAP program at NUST SEECS, recognized as youngest participant.',
    },
  ];

  const recognitions = [
    {
      icon: Award,
      title: 'COMPEC EAP',
      organization: 'NUST SEECS',
      description: 'Computing Competency Enhancement Program - Youngest participant',
    },
    {
      icon: TrendingUp,
      title: 'SkillBridge AI Bootcamp',
      organization: 'Special Admission',
      description: 'Youngest member with special admission at age 11',
    },
    {
      icon: Target,
      title: 'STEM Expo Speaker',
      organization: 'Multiple Events',
      description: 'Presented AI projects and concepts at school exhibitions',
    },
    {
      icon: Heart,
      title: 'Roots International',
      organization: 'School Presentations',
      description: '45-minute AI presentation and multiple classroom sessions',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-main">
      {/* Header */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-h1 font-semibold text-neutral-900">
              About Ayesha
            </h1>
            <p className="text-lg md:text-xl text-neutral-700">
              An 11-year-old on a mission to make AI accessible and fun for every child in Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-12">
              My Journey
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                {timeline.slice(0, 2).map((item, index) => (
                  <GlassCard key={index} className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="text-primary-500 font-bold text-lg">{item.year}</div>
                      <div className="text-sm text-neutral-600">{item.age}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-700">{item.description}</p>
                  </GlassCard>
                ))}
              </div>
              <div className="space-y-8">
                <div className="hidden md:block">
                  <img
                    src="/images/young_innovators_1.jpg"
                    alt="Ayesha at events"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                {timeline.slice(2).map((item, index) => (
                  <GlassCard key={index} className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="text-primary-500 font-bold text-lg">{item.year}</div>
                      <div className="text-sm text-neutral-600">{item.age}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-700">{item.description}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard className="p-8 space-y-4">
              <Target className="w-12 h-12 text-primary-500" />
              <h3 className="text-2xl font-semibold text-neutral-900">Vision</h3>
              <p className="text-lg text-neutral-700">
                Every child in Pakistan learns AI early, understands how it works, 
                and uses it to solve real problems in their communities.
              </p>
            </GlassCard>
            <GlassCard className="p-8 space-y-4">
              <Heart className="w-12 h-12 text-primary-500" />
              <h3 className="text-2xl font-semibold text-neutral-900">Mission</h3>
              <p className="text-lg text-neutral-700">
                Create simple AI tools, explain technology in fun and easy ways, 
                and inspire other kids to start their own AI journey.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Recognitions */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-12">
            Recognition & Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard key={index} className="p-6 space-y-4 text-center">
                  <Icon className="w-12 h-12 mx-auto text-primary-500" />
                  <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                  <div className="text-sm text-primary-600 font-medium">{item.organization}</div>
                  <p className="text-sm text-neutral-700">{item.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <GlassCard className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900">
                    Quick Facts
                  </h2>
                  <div className="space-y-4 text-neutral-700">
                    <div>
                      <div className="font-semibold text-neutral-900">Name</div>
                      <div>Ayesha Arif</div>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Age</div>
                      <div>11 years old</div>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Brand</div>
                      <div>AI With Ayesha</div>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Specialization</div>
                      <div>AI Projects, Youth Tech Education, Public Speaking</div>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Location</div>
                      <div>Pakistan</div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="/images/professional_tech_presentations_1.png"
                    alt="Ayesha presenting"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
