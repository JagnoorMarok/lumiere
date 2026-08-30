import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Mail, Phone, MapPin, Clock, CheckCircle, Send, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface ContactViewProps {
  onBackToHome: () => void;
  preselectedService?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onBackToHome,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: preselectedService || 'Editorial',
    timeline: 'Q2 2026',
    budget: '£10k – £25k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = [
    'Editorial',
    'Architecture & Interior',
    'Fashion & Lookbook',
    'Travel & Destination',
    'Portrait Sessions',
    'Commercial Campaign',
  ];

  const timelines = ['Immediate (1-2 weeks)', 'Q2 2026', 'Q3/Q4 2026', '2027 Inquiries'];

  const budgets = ['Under £5,000', '£5,000 – £10,000', '£10,000 – £25,000', '£25,000+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      category: 'Editorial',
      timeline: 'Q2 2026',
      budget: '£10k – £25k',
      message: '',
    });
  };

  return (
    <div id="contact-page-view" className="pt-28 sm:pt-36 pb-20 md:pb-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Button & Header */}
        <div className="space-y-6 border-b border-[#E6E6DF] pb-10">
          <button
            id="contact-back-home-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#52574A] hover:text-[#1E201B] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#52574A] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1E201B]"></span>
                Inquiries & Commissions
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#1E201B] tracking-tight">
                Let’s begin the story.
              </h1>
            </div>
            <p className="lg:col-span-4 text-sm text-[#52574A] font-light leading-relaxed">
              Whether you are commissioning a global editorial campaign or seeking architectural documentation, our studio is ready to consult.
            </p>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-[#F2F2EC] p-8 border border-[#E6E6DF] space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#6B6E66] font-semibold block">
                [Studio Locations]
              </span>

              {/* London Office */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1E201B]">
                  <MapPin className="w-4 h-4 text-[#52574A]" />
                  <span>London Flagship Studio</span>
                </div>
                <p className="text-xs text-[#52574A] pl-6 leading-relaxed">
                  {SITE_INFO.contact.address}
                </p>
              </div>

              {/* Paris Office */}
              <div className="space-y-2 pt-2 border-t border-[#ECECE6]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1E201B]">
                  <MapPin className="w-4 h-4 text-[#52574A]" />
                  <span>Paris Studio Atelier</span>
                </div>
                <p className="text-xs text-[#52574A] pl-6 leading-relaxed">
                  {SITE_INFO.contact.parisOffice}
                </p>
              </div>
            </div>

            {/* Direct Connect Card */}
            <div className="rounded-3xl bg-[#F7F7F2] p-8 border border-[#E6E6DF] space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#6B6E66] font-semibold block">
                [Direct Dispatch]
              </span>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#52574A]" />
                  <div>
                    <span className="text-[#6B6E66] block">General & Editorial:</span>
                    <a href={`mailto:${SITE_INFO.contact.email}`} className="text-[#1E201B] font-medium hover:underline">
                      {SITE_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#52574A]" />
                  <div>
                    <span className="text-[#6B6E66] block">Phone / Studio Concierge:</span>
                    <a href={`tel:${SITE_INFO.contact.phone}`} className="text-[#1E201B] font-medium hover:underline">
                      {SITE_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#ECECE6]">
                  <Clock className="w-4 h-4 text-[#52574A]" />
                  <div>
                    <span className="text-[#6B6E66] block">Office Hours:</span>
                    <span className="text-[#1E201B]">{SITE_INFO.contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#F7F7F2] p-8 sm:p-12 border border-[#E6E6DF]">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1E201B] text-[#FAFAF7] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl font-normal text-[#1E201B]">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-[#52574A] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-[#1E201B]">{formData.name}</span>. Our studio producers have received your treatment brief and will reply to <span className="font-semibold text-[#1E201B]">{formData.email}</span> within 24 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F2F2EC] border border-[#E6E6DF] text-xs text-[#6B6E66] max-w-sm mx-auto">
                    <span>Reference ID: LUM-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-[#1E201B] text-xs uppercase tracking-wider font-semibold text-[#1E201B] hover:bg-[#1E201B] hover:text-[#FAFAF7] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-[#52574A] font-semibold block">
                      Production Treatment Brief
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-[#1E201B]">
                      Project Consultation Form
                    </h3>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider font-medium text-[#52574A] block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#D8D8CF] text-xs text-[#1E201B] focus:outline-none focus:border-[#1E201B]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider font-medium text-[#52574A] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@studio.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#D8D8CF] text-xs text-[#1E201B] focus:outline-none focus:border-[#1E201B]"
                      />
                    </div>
                  </div>

                  {/* Project Category Selection */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-medium text-[#52574A] block">
                      Photography Discipline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {categories.map((cat) => (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => setFormData({ ...formData, category: cat })}
                          className={`px-3 py-2 rounded-xl text-xs text-left transition-all border cursor-pointer ${
                            formData.category === cat
                              ? 'bg-[#1E201B] text-[#FAFAF7] border-[#1E201B]'
                              : 'bg-[#FAFAF7] text-[#52574A] border-[#D8D8CF] hover:border-[#9C9E97]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & Budget Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider font-medium text-[#52574A] block">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#D8D8CF] text-xs text-[#1E201B] focus:outline-none focus:border-[#1E201B]"
                      >
                        {timelines.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider font-medium text-[#52574A] block">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#D8D8CF] text-xs text-[#1E201B] focus:outline-none focus:border-[#1E201B]"
                      >
                        {budgets.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider font-medium text-[#52574A] block">
                      Project Details & Vision *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of your concept, locations, target deliverables, or aesthetic references..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#D8D8CF] text-xs text-[#1E201B] focus:outline-none focus:border-[#1E201B] resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#1E201B] text-[#FAFAF7] text-xs uppercase tracking-widest font-semibold hover:bg-[#34382E] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
