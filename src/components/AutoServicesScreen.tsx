/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import indianOilHero from "../assets/images/indian_oil.jpg";
import { 
  Fuel, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  Flame, 
  ShieldCheck, 
  Truck, 
  Layers, 
  Phone, 
  Mail, 
  MapPin, 
  Check,
  Award,
  AlertTriangle
} from 'lucide-react';
import { FUEL_SERVICES, HUBS } from '../data';

interface AutoServicesScreenProps {
  onContactClick: (prefilledSubject?: string) => void;
}

export default function AutoServicesScreen({ onContactClick }: AutoServicesScreenProps) {
  // Bulk enquiry state
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [serviceType, setServiceType] = useState('Bulk Fuel Supply');
  const [estVolume, setEstVolume] = useState('');
  const [requirements, setRequirements] = useState('');
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleQuotationRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !contactPerson.trim() || !estVolume.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setCompanyName('');
      setContactPerson('');
      setEstVolume('');
      setRequirements('');
    }, 5000);
  };

  const handleEnquiryScroll = () => {
    const el = document.getElementById('enquire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="z-10">
            <span className="font-mono text-xs font-bold text-blue-600 mb-4 block uppercase tracking-widest">
              Goa Division
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-gray-950 mb-6 tracking-tight leading-tight">
              Fuel Solutions That <br />
              <span className="text-blue-600">Keep You Moving</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              Premium fuels, lubricants, bowser supply, and transportation services. Providing the logistical backbone for Goa's transportation and industrial sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleQuotationRequest}
                className="px-8 py-4 bg-gray-950 text-white font-bold rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2 cursor-pointer text-sm shadow-md active:scale-95"
              >
                <span>Fleet Enquiry</span>
                <ArrowRight size={16} />
              </button>
              <a 
                href="https://wa.me/919422393288" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all flex items-center gap-2 text-sm active:scale-95"
              >
                <span>WhatsApp Us</span>
                <Send size={15} />
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-2xl -z-10 transform rotate-2 transition-all duration-700 opacity-80"></div>
            <img
  className="w-full h-[480px] object-cover rounded-xl shadow-2xl border border-gray-200"
  src={indianOilHero}
  alt="IndianOil Fuel Retailing & Pump - Goa Auto Services"
/>
          </div>

        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-16 space-y-16">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block">
            B2B & Retail Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-950 mb-4">
            Comprehensive Fuel Ecosystem
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Precision engineering meets dependable, secure supply chains. Our Goan terminals and modern infrastructure ensure your fleet never stops moving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Fuel Retailing (Span 8) */}
          <div className="md:col-span-8 bg-slate-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-500/40 transition-colors duration-300 group flex flex-col justify-between">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Fuel size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-950 mb-4">
                  {FUEL_SERVICES[0].title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  {FUEL_SERVICES[0].description}
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                    <CheckCircle size={14} className="text-blue-600 shrink-0" />
                    <span>BS-VI Ultra-Clean Low-Soot Fuels</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                    <CheckCircle size={14} className="text-blue-600 shrink-0" />
                    <span>High-Speed Auto-Shutoff Dispensers</span>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-xl bg-gray-100 border border-gray-200">
                <img 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                  src={FUEL_SERVICES[0].imageUrl}
                  alt="Modern Fuel Canopy Outlet at Night"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Premium Performance (Span 4) */}
          <div className="md:col-span-4 bg-slate-900 p-8 rounded-2xl border border-slate-800 text-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-400/20">
                <Award size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Premium Performance
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-8">
                {FUEL_SERVICES[1].description}
              </p>
            </div>

            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-750">
              <p className="font-mono text-[10px] uppercase tracking-wider text-blue-400 mb-1">
                AVAILABLE AT
              </p>
              <p className="text-sm font-bold text-white">
                All Major Goa Retailing Outlets
              </p>
            </div>
          </div>

          {/* Lubricants (Span 4) */}
          <div className="md:col-span-4 bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500/40 hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                <Layers size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-950 mb-4">
                 Lubricants
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                {FUEL_SERVICES[2].description}
              </p>

              {/* Image showcase */}
              <div className="h-40 overflow-hidden rounded-xl bg-gray-50 border border-gray-100 mb-6 relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                  src={FUEL_SERVICES[2].imageUrl}
                  alt="Servo Premium Lubricants & Oils"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-700">Genuine Factory Spares Only</span>
              <ShieldCheck size={18} className="text-emerald-500" />
            </div>
          </div>

          {/* Fuel Bowser Transport (Span 8) */}
          <div className="md:col-span-8 bg-slate-100 p-8 rounded-2xl border border-gray-200 flex flex-col justify-between group">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-blue-200/50 text-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Truck size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-950 mb-4">
                  Bowser Supply & Transport
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  {FUEL_SERVICES[3].description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-[10px] text-blue-600 font-mono font-bold uppercase">CAPACITY</p>
                    <p className="font-display text-xl font-extrabold text-gray-950 mt-1">12k - 20k L</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-[10px] text-blue-600 font-mono font-bold uppercase">RESPONSE</p>
                    <p className="font-display text-xl font-extrabold text-gray-950 mt-1">&lt; 4 Hours</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 h-64 overflow-hidden rounded-xl bg-gray-100 border border-gray-200">
                <img 
                  className="w-full h-full object-cover rounded-lg" 
                  src={FUEL_SERVICES[3].imageUrl}
                  alt="Fleet of Industrial Fuel Bowser Trucks"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Location Service Footprint Map Section */}
      <section className="bg-slate-50 py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Hubs */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-mono font-bold px-3 py-1.5 rounded-md uppercase tracking-wider mb-4 inline-block">
                  RAPID PENINSULA COVERAGE
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-950 mb-4">
                  Service Footprint
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Strategically located bulk supply hubs, retail outlets, and emergency breakdown stations positioned across North and South Goa for lightning-fast dispatch.
                </p>
              </div>

              <div className="space-y-4">
                {HUBS.map((hub) => (
                  <div 
                    key={hub.id} 
                    className="p-5 bg-white rounded-xl border-l-4 border-blue-600 border-r border-y border-gray-200/80 shadow-sm hover:translate-x-1 transition-transform"
                  >
                    <h4 className="font-bold text-gray-950 text-sm">{hub.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{hub.address}</p>
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100 text-[11px] text-gray-400">
                      <span className="font-medium text-blue-600">{hub.type}</span>
                      <span>{hub.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Stylized Map */}
            <div className="lg:col-span-7 h-[520px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15370.435728511721!2d73.8055653!3d15.6133917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc154cbfa6db7%3A0xc31922c231364ff0!2sMapusa%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gemini Motors Mapusa Industrial Estate Goa Map"
              ></iframe>
              
              {/* Overlay legend badge */}
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs z-10">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-600"></span>
                  </span>
                  <p className="text-xs font-bold text-gray-900 leading-relaxed">
                    Gemini Motors Active Service Zone
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-16" id="enquire">
        <div className="bg-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-800">
          
          {/* Form left banner info */}
          <div className="p-12 md:w-1/3 flex flex-col justify-between bg-blue-600 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
            
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight mb-6">
                Fleet & Bulk <br />Enquiries
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed mb-10">
                Scale your Goan logistics operations with a highly reliable, state-certified energy partner. Our bulk fuel experts will tailor a contract plan matching your exact monthly logistics volumes.
              </p>
            </div>

            <div className="space-y-4 text-xs pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-200 shrink-0" />
                <div>
                  <p className="opacity-70">Direct Operations Desk</p>
                  <p className="font-bold text-sm text-white">+91 94223 93288</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-200 shrink-0" />
                <div>
                  <p className="opacity-70">Logistics Procurement</p>
                  <p className="font-bold text-sm text-white">agnel899@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form inputs */}
          <div className="p-12 md:w-2/3 bg-white relative text-gray-900">
            {success && (
              <div className="absolute inset-0 bg-white/95 z-25 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mb-4">
                  <Check size={28} />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-gray-950">
                  Quotation Request Sent!
                </h3>
                <p className="text-sm text-gray-600 mt-2 max-w-sm leading-relaxed">
                  Thank you, <strong className="text-blue-600">{contactPerson}</strong> from <strong className="text-gray-950">{companyName}</strong>. We have received your query for <strong className="text-gray-950">{serviceType}</strong> at an estimated volume of <strong className="text-blue-600">{estVolume}</strong>.
                </p>
                <p className="text-xs text-gray-400 mt-4 font-mono">
                  An official customized PDF rate sheet will be mailed to your procurement team shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleQuotationRequest} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {errorMsg && (
                <div className="md:col-span-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2">
                  <AlertTriangle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                  COMPANY NAME
                </label>
                <input 
                  type="text" 
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Goa Logi-Corps Pvt Ltd" 
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                  CONTACT PERSON
                </label>
                <input 
                  type="text" 
                  required
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  placeholder="e.g. John DeSouza" 
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                  SERVICE REQUIRED
                </label>
                <select 
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                >
                  <option>Bulk Fuel Supply (Diesel)</option>
                  <option>Bowser Site Deployment</option>
                  <option>Wholesale Lubricant Contract</option>
                  <option>Port Terminal Storage</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                  EST. MONTHLY VOLUME
                </label>
                <input 
                  type="text" 
                  required
                  value={estVolume}
                  onChange={(e) => setEstVolume(e.target.value)}
                  placeholder="e.g. 15,000 Litres" 
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                  ADDITIONAL REQUIREMENTS
                </label>
                <textarea 
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Tell us about your fleet schedule, specific site delivery coordinates, or custom billing demands..." 
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <div className="md:col-span-2 pt-2">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all uppercase tracking-widest text-xs shadow-md active:scale-[0.99] cursor-pointer"
                >
                  Request Quotation
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
