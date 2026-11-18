import React, { useState } from 'react';
import { X, User, Building2, Mail, Phone, MessageSquare, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOTEL_CONFIG, generateWhatsAppMeetingLink } from '../../data/hotelConfig';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeetingModal: React.FC<MeetingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventDate: '',
    attendees: '15-25',
    eventType: 'Corporate Meeting / Conference',
    requirements: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedState, setSubmittedState] = useState<null | {
    whatsappUrl: string;
    summary: string;
  }>(null);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.company.trim()) newErrors.company = 'Please enter your company or organization';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }

    const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.eventDate) newErrors.eventDate = 'Please select a preferred event date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const waUrl = generateWhatsAppMeetingLink({
        name: formData.name,
        company: formData.company,
        date: formData.eventDate,
        attendees: formData.attendees,
        eventType: formData.eventType
      });
      setSubmittedState({
        whatsappUrl: waUrl,
        summary: `${formData.eventType} on ${formData.eventDate} for ${formData.attendees} attendees (${formData.company})`
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#FAF7F2] w-full max-w-xl rounded-sm shadow-2xl border border-ayora-border overflow-hidden my-8 relative animate-fade-in">
        
        {/* Header */}
        <div className="bg-ayora-dark text-white px-6 py-5 flex items-center justify-between border-b border-ayora-border-dark">
          <div>
            <span className="text-[11px] uppercase tracking-luxury text-ayora-gold font-semibold">
              Corporate &amp; Group Enquiries
            </span>
            <h3 className="text-xl font-serif text-white mt-0.5">
              Enquire for Meetings &amp; Events
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submittedState ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 bg-ayora-gold/15 text-ayora-gold rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-serif text-ayora-charcoal">
                  Event Enquiry Prepared
                </h4>
                <p className="text-xs text-ayora-muted mt-2 max-w-md mx-auto">
                  Your event specifications for <strong className="text-ayora-charcoal">{submittedState.summary}</strong> are ready.
                </p>
              </div>

              <div className="bg-amber-50/80 border border-amber-200/80 rounded p-3.5 text-left text-xs text-amber-900 flex items-start space-x-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-amber-800">
                    Direct Email Delivery Status
                  </p>
                  <p className="text-[11px] leading-relaxed text-amber-700">
                    Direct email dispatch to <strong>{HOTEL_CONFIG.contact.primaryEmail}</strong> will be active upon configuring mail services. To discuss hall availability, seating layouts, and corporate rates right now, please connect directly via WhatsApp.
                  </p>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={submittedState.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Meeting Enquiry via WhatsApp</span>
                </a>

                <p className="text-[11px] text-ayora-muted">
                  Or speak directly with our corporate team: <a href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`} className="text-ayora-charcoal font-semibold underline">{HOTEL_CONFIG.contact.primaryPhone}</a>
                </p>
              </div>

              <div className="pt-4 border-t border-ayora-border">
                <button
                  type="button"
                  onClick={() => setSubmittedState(null)}
                  className="text-xs text-ayora-muted hover:text-ayora-charcoal"
                >
                  &larr; Edit Event Details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-ayora-muted absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Contact person"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-white border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                        errors.name ? 'border-red-400' : 'border-ayora-border'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Company / Organization *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-ayora-muted absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-white border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                        errors.company ? 'border-red-400' : 'border-ayora-border'
                      }`}
                    />
                  </div>
                  {errors.company && <p className="text-[11px] text-red-600 mt-1">{errors.company}</p>}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-ayora-muted absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-white border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                        errors.email ? 'border-red-400' : 'border-ayora-border'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Phone / Mobile *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-ayora-muted absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="+91 99800 28502"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 bg-white border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                        errors.phone ? 'border-red-400' : 'border-ayora-border'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Event Date & Attendees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className={`w-full px-3 py-2.5 bg-white border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold ${
                        errors.eventDate ? 'border-red-400' : 'border-ayora-border'
                      }`}
                    />
                  </div>
                  {errors.eventDate && <p className="text-[11px] text-red-600 mt-1">{errors.eventDate}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                    Number of Attendees
                  </label>
                  <select
                    value={formData.attendees}
                    onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-ayora-border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold"
                  >
                    <option value="5-15">5 – 15 Persons</option>
                    <option value="15-30">15 – 30 Persons</option>
                    <option value="30-60">30 – 60 Persons</option>
                    <option value="60+">60+ Persons</option>
                  </select>
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                  Event / Gathering Type
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-ayora-border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold"
                >
                  <option value="Board Meeting / Conference">Board Meeting / Conference</option>
                  <option value="Corporate Workshop / Training">Corporate Workshop / Training</option>
                  <option value="Executive Accommodation + Meeting">Executive Accommodation + Meeting</option>
                  <option value="Team Gathering / Annual Meet">Team Gathering / Annual Meet</option>
                  <option value="Other Corporate Gathering">Other Corporate Gathering</option>
                </select>
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block text-xs font-semibold text-ayora-charcoal uppercase tracking-wider mb-1">
                  Requirements &amp; Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Seating layout preference, audio-visual requirements, catering needs, corporate stay rooms..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-ayora-border text-xs text-ayora-charcoal rounded-sm focus:outline-none focus:border-ayora-gold resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-ayora-gold hover:bg-ayora-gold-deep text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Meeting Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
