'use client';

import { useState, useEffect } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isMounted, setIsMounted] = useState(false); // untuk render dulu
  const [animateIn, setAnimateIn] = useState(false); // trigger animasi fade-in

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // kontrol buka/tutup dengan delay trigger animasi supaya transisi fade-in smooth
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOpen) {
      setIsMounted(true);
      timeout = setTimeout(() => setAnimateIn(true), 20); // delay trigger animasi
      document.body.style.overflow = 'hidden';
    } else {
      setAnimateIn(false);
      document.body.style.overflow = 'unset';
      timeout = setTimeout(() => setIsMounted(false), 300); // tunggu animasi fade-out selesai baru unmount
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  // ESC untuk close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // simulasi submit delay
      setSubmitStatus('success');

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        transition-opacity duration-300
        ${animateIn ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Backdrop */}
      <div
        className={`
          absolute inset-0 bg-black/80 backdrop-blur-xl
          transition-opacity duration-300
          ${animateIn ? "opacity-100" : "opacity-0"}
        `}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`
          relative w-full max-w-2xl mx-4 bg-white/5 rounded-2xl shadow-2xl
          border border-white/10 overflow-hidden transform
          transition-all duration-300
          ${animateIn ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/40">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            GET IN TOUCH
          </h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Close"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-white/80">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/80">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-white/80">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project or question..."
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center space-x-3 px-8 py-3 bg-white/10 border border-white/20 hover:border-white/30 text-gray-100 font-medium rounded-lg hover:bg-white/5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                {isSubmitting ? 'Sending...' :
                  submitStatus === 'success' ? 'Sent!' :
                    submitStatus === 'error' ? 'Error!' : 'Send Message'}
              </span>
              <FaPaperPlane
                className={`w-4 h-4 transition-transform ${
                  isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Status */}
          {submitStatus === 'success' && (
            <div className="text-green-400 text-sm text-center">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-400 text-sm text-center">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}