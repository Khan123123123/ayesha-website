import React from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Video, Image as ImageIcon, Award } from 'lucide-react';

export function MediaPage() {
  const videos = [
    {
      title: 'Interview with Kanwal Cheema',
      description: 'In-depth conversation with the founder of SkillBridge AI Bootcamp about my AI journey',
      thumbnail: '/images/young_innovators_0.png',
    },
    {
      title: 'AI Tips Tutorial',
      description: 'Educational content teaching kids how to use AI tools effectively',
      thumbnail: '/images/young_innovators_8.jpg',
    },
    {
      title: 'Project Showcase',
      description: 'Demonstrating my AI projects and explaining how they work',
      thumbnail: '/images/ai_robotics_visuals_0.jpg',
    },
  ];

  const eventPhotos = [
    '/images/professional_tech_presentations_0.jpeg',
    '/images/professional_tech_presentations_1.png',
    '/images/professional_tech_presentations_2.jpeg',
    '/images/young_innovators_1.jpg',
    '/images/ai_robotics_visuals_1.jpg',
    '/images/modern_digital_interfaces_2.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-main">
      {/* Header */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-h1 font-semibold text-neutral-900">
              Media & Press
            </h1>
            <p className="text-lg md:text-xl text-neutral-700">
              Interviews, presentations, and event highlights
            </p>
          </div>
        </div>
      </section>

      {/* Featured Interview */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-8">
              Featured Interview
            </h2>
            <GlassCard className="p-6 md:p-8 space-y-4">
              <div className="aspect-video bg-neutral-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/images/young_innovators_0.png"
                  alt="Interview with Kanwal Cheema"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900">
                Interview with Kanwal Cheema
              </h3>
              <p className="text-lg text-neutral-700">
                A special conversation with Kanwal Cheema, founder of SkillBridge AI Bootcamp, 
                discussing my journey into AI and my vision for bringing tech education to Pakistani youth.
              </p>
              <a
                href="https://www.youtube.com/@aiwithayesha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600"
              >
                <Video size={20} />
                Watch Full Interview
              </a>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-12 md:py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-12">
            Video Content
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <GlassCard key={index} className="p-4 space-y-4">
                <div className="aspect-video bg-neutral-100 rounded-lg overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{video.title}</h3>
                <p className="text-sm text-neutral-700">{video.description}</p>
                <a
                  href="https://www.youtube.com/@aiwithayesha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 font-medium text-sm hover:text-primary-600"
                >
                  Watch Video
                </a>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Event Photos */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-12">
            Event Photos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {eventPhotos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square bg-neutral-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={photo}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-12">
            Press & Recognition
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    SkillBridge AI Bootcamp Interview
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Featured interview discussing special admission and achievements in AI education
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    STEM Expo Recognition
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Recognized as one of the youngest presenters at multiple STEM exhibitions
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    COMPEC EAP Participation
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Youngest participant in NUST SEECS Computing Competency Enhancement Program
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8 md:p-12 text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900">
              Media Inquiries
            </h2>
            <p className="text-lg text-neutral-700">
              Interested in featuring Ayesha's story or interviewing her about AI education? 
              Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 py-3 bg-primary-500 text-white rounded-sm font-semibold hover:bg-primary-600 transition-colors"
              >
                Contact for Media
              </a>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
