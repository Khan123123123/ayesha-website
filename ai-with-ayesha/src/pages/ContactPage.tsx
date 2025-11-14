import React, { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { supabase } from '@/lib/supabase';
import { Mail, MessageCircle, Instagram, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    purpose: 'talk',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const { data, error } = await supabase.functions.invoke('contact-form-submit', {
        body: formData,
      });

      if (error) throw error;

      // Check for nested data structure from edge function
      const responseData = data?.data || data;

      if (responseData?.success) {
        setStatus({
          type: 'success',
          message: responseData.message || 'Thank you! We will respond within 24-48 hours.',
        });
        setFormData({
          name: '',
          email: '',
          organization: '',
          purpose: 'talk',
          message: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try WhatsApp instead.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-main">
      {/* Header */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-h1 font-semibold text-neutral-900">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-neutral-700">
              Have questions? Want to book a speaking engagement? Let's connect!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <GlassCard className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-4 bg-white/30 backdrop-blur-[8px] border border-white/25 rounded-sm text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-4 bg-white/30 backdrop-blur-[8px] border border-white/25 rounded-sm text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="sehrishva@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-neutral-900 mb-2">
                    School / Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full h-14 px-4 bg-white/30 backdrop-blur-[8px] border border-white/25 rounded-sm text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="Your school or organization"
                  />
                </div>

                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-neutral-900 mb-2">
                    Purpose *
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-4 bg-white/30 backdrop-blur-[8px] border border-white/25 rounded-sm text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  >
                    <option value="talk">Speaking Engagement</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="media">Media Interview</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/30 backdrop-blur-[8px] border border-white/25 rounded-sm text-neutral-900 placeholder:text-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {status && (
                  <div className={`p-4 rounded-sm ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {status.message}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>

            <p className="text-center text-sm text-neutral-600 mt-4">
              We'll respond within 24-48 hours
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-h2 font-semibold text-neutral-900 text-center mb-12">
            Other Ways to Connect
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <GlassCard className="p-6 text-center space-y-4">
              <MessageCircle className="w-12 h-12 mx-auto text-primary-500" />
              <h3 className="text-xl font-semibold text-neutral-900">WhatsApp</h3>
              <p className="text-neutral-700 text-sm">
                For quick inquiries and direct communication
              </p>
              <a
                href="https://wa.me/923162092866"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-500 font-medium hover:text-primary-600"
              >
                Chat on WhatsApp
              </a>
            </GlassCard>

            <GlassCard className="p-6 text-center space-y-4">
              <Instagram className="w-12 h-12 mx-auto text-primary-500" />
              <h3 className="text-xl font-semibold text-neutral-900">Instagram</h3>
              <p className="text-neutral-700 text-sm">
                Follow for updates and AI tips
              </p>
              <a
                href="https://instagram.com/aiwithayesha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-500 font-medium hover:text-primary-600"
              >
                Follow on Instagram
              </a>
            </GlassCard>

            <GlassCard className="p-6 text-center space-y-4">
              <Mail className="w-12 h-12 mx-auto text-primary-500" />
              <h3 className="text-xl font-semibold text-neutral-900">Email</h3>
              <p className="text-neutral-700 text-sm">
                For formal inquiries and partnerships
              </p>
              <a
                href="mailto:ayesha@aiwithayesha.com"
                className="inline-block text-primary-500 font-medium hover:text-primary-600"
              >
                Send an Email
              </a>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
