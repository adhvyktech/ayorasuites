import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';
import { submitToWeb3Forms } from '../../services/web3forms';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedState, setSubmittedState] = useState<null | {
    whatsappUrl: string;
    summary: string;
    isEmailSent: boolean;
    statusMessage: string;
  }>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your full name';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact number';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid contact number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or question';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const msg = `Hello Ayora Suites, my name is ${formData.name} (${formData.email}, ${formData.phone}). Subject: ${formData.subject}. Message: ${formData.message}`;
    const waUrl = `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;

    const web3Result = await submitToWeb3Forms(
      {
        enquiry_type: 'General Contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      },
      `Ayora Suites – Contact: ${formData.subject} from ${formData.name}`
    );

    setIsSubmitting(false);

    setSubmittedState({
      whatsappUrl: waUrl,
      summary: `${formData.subject} from ${formData.name}`,
      isEmailSent: web3Result.success,
      statusMessage: web3Result.message
    });
  };

  return (
    <div className="bg-white rounded-sm border border-ayora-border shadow-luxury p-6 sm:p-8">
      {submittedState ? (
        <div className="text-center py-6 space-y-6">
          <div className="w-14 h-14 bg-ayora-gold/15 text-ayora-gold rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h4 className="text-xl font-serif text-ayora-charcoal">
              Message {submittedState.isEmailSent ? 'Sent Successfully' : 'Prepared'}
            </h4>
            <p className="text-xs text-ayora-muted mt-2 max-w-sm mx-auto">
              Your inquiry regarding <strong className="text-ayora-charcoal">{submittedState.summary}</strong> has been processed.
            </p>
          </div>

          {submittedState.isEmailSent ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded p-3.5 text-left text-xs text-emerald-900 flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-emerald-800">Email Dispatched Successfully</p>
                <p className="text-[11px] text-emerald-700 mt-0.5">{submittedState.statusMessage}</p>
              </div>
            </div>
          ) : (
            <div className="bg-amber-50/80 border border-amber-200/80 rounded p-3.5 text-left text-xs text-amber-900 flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-amber-800">
                  Web3Forms Dispatch Notice
                </p>
                <p className="text-[11px] leading-relaxed text-amber-700">
                  Web3Forms key is awaiting entry. To reach the front desk immediately, tap below to chat on WhatsApp.
                </p>
              </div>
            </div>
          )}

          <div className="pt-2 space-y-3">
            <a
              href={submittedState.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send Message to WhatsApp Concierge</span>
            </a>

            <button
              type="button"
              onClick={() => setSubmittedState(null)}
              className="text-xs text-ayora-muted hover:text-ayora-charcoal block mx-auto"
            >
              &larr; Write another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-ayora-border/60 pb-3 mb-4">
            <h3 className="font-serif text-xl text-ayora-charcoal">
              Send us a Message
            </h3>
            <p className="text-xs text-ayora-muted mt-1">
              We respond promptly to room reservations, event enquiries, and general questions.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-ayora-muted absolute left-3 top-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF7F2] border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                  errors.name ? 'border-red-400' : 'border-ayora-border'
                }`}
              />
            </div>
            {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-ayora-muted absolute left-3 top-3 pointer-events-none" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF7F2] border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                    errors.email ? 'border-red-400' : 'border-ayora-border'
                  }`}
                />
              </div>
              {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-ayora-muted absolute left-3 top-3 pointer-events-none" />
                <input
                  type="tel"
                  placeholder="+91 99800 28502"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 bg-[#FAF7F2] border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                    errors.phone ? 'border-red-400' : 'border-ayora-border'
                  }`}
                />
              </div>
              {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
              Subject
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3 py-2.5 bg-[#FAF7F2] border border-ayora-border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold"
            >
              <option value="General Enquiry">General Enquiry</option>
              <option value="Room Booking Assistance">Room Booking Assistance</option>
              <option value="Corporate / Conference Hall">Corporate / Conference Hall</option>
              <option value="Airport Transit & Location">Airport Transit &amp; Location</option>
              <option value="Long Stay / Group Booking">Long Stay / Group Booking</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
              Message *
            </label>
            <textarea
              rows={4}
              placeholder="How can our hospitality team assist you today?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-3 py-2.5 bg-[#FAF7F2] border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold resize-none ${
                errors.message ? 'border-red-400' : 'border-ayora-border'
              }`}
            />
            {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 mr-1" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
