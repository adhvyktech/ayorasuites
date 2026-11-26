import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { HOTEL_CONFIG } from '../../data/hotelConfig';

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "How far is Ayora Suites from Bengaluru Kempegowda International Airport (BLR)?",
    answer: "Ayora Suites is located approximately 15 minutes (~12 km) from Kempegowda International Airport (BLR) along the New International Airport Road corridor. Our 24/7 reception desk assists guests with airport transit, taxi coordination, and smooth transfers."
  },
  {
    question: "Where exactly is Ayora Suites located and what are the prominent landmarks?",
    answer: "Ayora Suites is located at Building No: 1997/1289/9/32, New International Airport Road, Chikkajala, Kadigenahalli Gate, Bengaluru 562157. We are within 2 minutes walking distance of Decathlon Chikkajala and just 12 minutes from the KIADB Aerospace & IT Park."
  },
  {
    question: "What room categories are available for booking at Ayora Suites?",
    answer: "We offer four thoughtfully furnished accommodation categories: Deluxe Rooms (king bed sanctuary with work desk), Twin Sharing Rooms (dual twin beds ideal for corporate colleagues and friends), Executive Rooms (spacious suites with plush seating and dedicated workspace), and our signature Suite Rooms (separate master bedroom with private living and lounge area)."
  },
  {
    question: "Does Ayora Suites provide conference and corporate meeting venues?",
    answer: "Yes, Ayora Suites features dedicated executive conference and boardroom facilities equipped with modern audio-visual presentation equipment, flexible seating configurations, high-speed Wi-Fi, and customizable corporate catering packages."
  },
  {
    question: "What are the standard check-in and check-out timings?",
    answer: "Our standard check-in is 12:00 PM and check-out is 11:00 AM. Our front desk operates 24/7, making it seamless for guests arriving on late-night or early-morning flights. Early check-in or late check-out is subject to room availability upon request."
  },
  {
    question: "Is high-speed Wi-Fi and vehicle parking provided complimentary?",
    answer: "Yes, complimentary high-speed Wi-Fi is provided throughout all rooms, suites, and public spaces. Secure on-site vehicle parking is also available free of charge for resident guests and conference attendees."
  },
  {
    question: "How can I make a direct booking for the best tariff privileges?",
    answer: "You can enquire and book directly through our website, call our reservations desk directly at +91 99800 28502, or send a message via WhatsApp (+91 91487 03006 / +91 99800 28502) for instant room availability and direct booking privileges."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] relative border-t border-ayora-border/60" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-ayora-gold" />
            <span className="text-xs font-semibold uppercase tracking-luxury text-ayora-gold flex items-center">
              <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
              Frequently Asked Questions
            </span>
            <span className="w-6 h-[1px] bg-ayora-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ayora-charcoal font-normal leading-tight">
            Helpful Information for Your Stay
          </h2>
          <p className="text-xs sm:text-sm text-ayora-muted mt-3 max-w-xl mx-auto font-light leading-relaxed">
            Everything you need to know about our boutique accommodations, BLR airport transit, conference spaces, and direct booking benefits.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-ayora-border rounded-sm transition-all duration-200 overflow-hidden shadow-xs hover:border-ayora-gold/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-ayora-charcoal pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-ayora-gold text-white rotate-180' : 'bg-ayora-beige text-ayora-charcoal'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-ayora-muted leading-relaxed border-t border-ayora-border/40 animate-fade-in font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Bar */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-ayora-border/80 rounded-sm shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg text-ayora-charcoal">Have a specific question or requirement?</h4>
            <p className="text-xs text-ayora-muted mt-1">Our reservations team is available 24/7 to assist you.</p>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <a
              href={`tel:${HOTEL_CONFIG.contact.primaryPhoneClean}`}
              className="inline-flex items-center px-4 py-2.5 border border-ayora-border hover:border-ayora-gold text-ayora-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-ayora-gold" />
              <span>Call Us</span>
            </a>
            <a
              href={HOTEL_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-sm shadow-sm transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
