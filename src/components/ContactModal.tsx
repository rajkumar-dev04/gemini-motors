/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle, Mail, Phone, Clock, MapPin, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseText = `Hello Gemini Motors, my name is ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;
    const encodedText = encodeURIComponent(baseText);
    window.open(`https://wa.me/919422393288?text=${encodedText}`, '_blank');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        id="contact-popup-container"
      >
        {/* Header banner */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-900 px-6 py-6 text-white flex justify-between items-center">
          <div>
            <h3 className="font-display font-extrabold text-xl tracking-tight">
              Contact Gemini Motors
            </h3>
            <p className="text-xs text-blue-100 mt-1">
              Direct connection to our Goan headquarters and division managers
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal content body */}
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Left panel contacts */}
          <div className="md:col-span-2 bg-slate-50 p-6 border-r border-gray-100 text-sm flex flex-col justify-between">
            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 uppercase tracking-wide text-xs">
                Direct Contact Lines
              </h4>
              
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Direct Operations</p>
                  <p className="text-gray-600">+91 94223 93288</p>
                  <p className="text-[11px] text-gray-400">Available 9 AM - 6 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">General Support</p>
                  <p className="text-gray-600">agnel899@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Business Hours</p>
                  <p className="text-gray-600">Mon - Sat (24/7 For Fuels)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Central Hub</p>
                  <p className="text-gray-600 leading-tight">Mapusa Industrial Estate, Unit 4B, Goa</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200/60 pt-4 mt-6 text-xs text-gray-400">
              Your inquiry is prioritized by the designated business division.
            </div>
          </div>

          {/* Right panel form */}
          <div className="md:col-span-3 p-6">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={36} />
                </div>
                <h4 className="font-bold text-lg text-gray-900">Message Received!</h4>
                <p className="text-sm text-gray-600 mt-2 max-w-xs">
                  Thank you for reaching out. A division specialist will respond to you within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name" 
                    className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com" 
                      className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                      Contact Phone
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765..." 
                      className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Subject / Department
                  </label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option>General Enquiry</option>
                    <option>Light Commercial (LCV) Sales</option>
                    <option>Medium & Heavy (M&HCV) Fleet</option>
                    <option>Switch EV Mobility Demos</option>
                    <option>Leypower Diesel Generators</option>
                    <option>Goa Bulk Fuel Logistical Plans</option>
                    <option>Green Technologies (Solar/Waste)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Detailed Message
                  </label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify your fleet or technological requirements..."
                    rows={4}
                    className="w-full text-sm border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm uppercase tracking-wider"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
