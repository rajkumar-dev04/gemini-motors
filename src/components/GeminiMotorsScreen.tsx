/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  ArrowRight, 
  ChevronLeft, 
  Zap, 
  Download, 
  MapPin, 
  PhoneCall, 
  Calendar, 
  Check, 
  FileText,
  BadgeAlert,
  HelpCircle,
  Wrench
} from 'lucide-react';
import { VEHICLES, GENSETS } from '../data';
import { VehicleSubTab } from '../types';

interface GeminiMotorsScreenProps {
  onContactClick: (prefilledSubject?: string) => void;
}

export default function GeminiMotorsScreen({ onContactClick }: GeminiMotorsScreenProps) {
  const [activeSubTab, setActiveSubTab] = useState<VehicleSubTab>('lcv');
  
  // Service Booking states
  const [selectedModel, setSelectedModel] = useState('L-Series 2.5T');
  const [regNo, setRegNo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('09:00 AM - 11:00 AM');
  
  // Custom interactive calendar states
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonthIdx, setCurrentMonthIdx] = useState(6); // July (matching user prompt timestamp July 2026!)
  const [selectedDay, setSelectedDay] = useState(8); // Default to current day July 8
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [brochureSuccess, setBrochureSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Refs for scrolling to sections
  const inventoryRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    if (currentMonthIdx === 0) {
      setCurrentMonthIdx(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonthIdx(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIdx === 11) {
      setCurrentMonthIdx(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonthIdx(prev => prev + 1);
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regNo.trim()) {
      setErrorMsg('Please specify your registration number.');
      return;
    }
    if (!contactPhone.trim()) {
      setErrorMsg('Please enter your contact phone.');
      return;
    }
    
    setErrorMsg('');
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setRegNo('');
      setCompanyName('');
      setContactPerson('');
      setContactPhone('');
    }, 4500);
  };

  // Days in month calculator (simplified)
  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Generate blank leading days for calendar grid
  const startDayOfWeek = (month: number, year: number) => {
    return new Date(year, month, 1).getDay(); // 0 = Sunday, 1 = Monday etc
  };

  const totalDays = daysInMonth(currentMonthIdx, currentYear);
  const leadingBlankDays = startDayOfWeek(currentMonthIdx, currentYear);

  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
  const leadingBlanks = Array.from({ length: leadingBlankDays === 0 ? 6 : leadingBlankDays - 1 }, (_, i) => i); // Match Mon as first day of week

  // Filtered vehicles
  const lcvVehicles = VEHICLES.filter(v => v.category === 'lcv');
  const mhcvVehicles = VEHICLES.filter(v => v.category === 'mhcv');

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#0c111d] bg-gradient-to-br from-[#0c111d] via-[#121a2c] to-[#080d17] py-24 text-white">
        {/* IndianOil Petrol Pump In Motion Background with Low Opacity */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.img 
            src="/src/assets/images/indianoil_pump_motion_1784018549511.jpg"
            alt="IndianOil Pump Background"
            className="w-full h-full object-cover opacity-[0.14] filter brightness-90 saturate-[0.85] scale-105"
            animate={{ 
              scale: [1.02, 1.07, 1.02],
              x: [0, 8, 0],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-blue-300 mb-6">
              <Sparkles size={12} className="text-blue-400" />
              Reliability Powered by Engineering
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Powering Every <br />
              <span className="text-blue-400">Business Journey</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Commercial Vehicles, Electric Mobility & Reliable Power Solutions. Contact Us for Pricing. From urban last-mile distribution to cross-continental bulk transport, Gemini Motors provides the fleet performance you can trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection(inventoryRef)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all cursor-pointer text-sm uppercase tracking-wider"
              >
                Explore Fleet
              </button>
              <button 
                onClick={() => scrollToSection(serviceRef)}
                className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg active:scale-95 transition-all cursor-pointer text-sm uppercase tracking-wider"
              >
                Book Service
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-xl -z-10 animate-pulse"></div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-slate-800/80 rounded-xl p-1.5 border border-slate-700/60 shadow-2xl relative overflow-hidden group"
            >
              <img 
                src="/src/assets/images/indianoil_pump_motion_1784018549511.jpg"
                alt="IndianOil Petrol Pump Station - Gemini Motors"
                className="w-full h-[380px] object-cover rounded-lg group-hover:scale-[1.03] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-lg border border-slate-800/60">
                <p className="text-xs font-mono font-bold text-blue-400">OFFICIAL PARTNER</p>
                <p className="text-sm font-semibold text-white mt-1">Ashok Leyland & Switch Mobility Distributor</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </section>

      {/* Sticky Division / Category Toggles */}
      <div className="sticky top-20 z-40 bg-slate-50 border-b border-gray-200/80 shadow-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex overflow-x-auto no-scrollbar scroll-smooth">
          {(['lcv', 'mhcv', 'gensets'] as VehicleSubTab[]).map((tab) => {
            const labels: Record<VehicleSubTab, string> = {
              lcv: 'LIGHT COMMERCIAL (LCV)',
              mhcv: 'MEDIUM & HEAVY (M&HCV)',
              ev: 'SWITCH MOBILITY (EV)',
              gensets: 'DIESEL GENERATORS'
            };
            const isActive = activeSubTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`flex-shrink-0 px-8 py-5 text-xs font-mono font-bold tracking-wider border-b-2 cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-blue-600'
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div ref={inventoryRef} className="max-w-7xl mx-auto px-6 md:px-16 py-20 space-y-24 scroll-mt-36">

        {/* LCV Section */}
        {activeSubTab === 'lcv' && (
          <section className="animate-in fade-in slide-in-from-bottom-6 duration-300">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-gray-950 mb-2">
                  Light Commercial Vehicles
                </h2>
                <p className="text-gray-500">
                  The robust backbone of last-mile logistics, express delivery, and urban distribution.
                </p>
              </div>
              <div className="h-1 w-24 bg-blue-600 hidden md:block rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lcvVehicles.map((vehicle) => (
                <div 
                  key={vehicle.id} 
                  className="bg-white border border-gray-200/80 p-1.5 rounded-xl hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="h-56 overflow-hidden rounded-lg bg-gray-100 relative">
                      <img 
                        src={vehicle.imageUrl} 
                        alt={vehicle.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-6 h-12 overflow-hidden">
                        {vehicle.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 border-y border-gray-100 py-4 mb-6">
                        {vehicle.specs.map((spec, sidx) => (
                          <div key={sidx}>
                            <span className="text-[10px] font-mono font-semibold tracking-wider text-gray-400 block">
                              {spec.label}
                            </span>
                            <span className="text-sm font-bold text-gray-900 mt-0.5 block">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <button 
                      onClick={() => onContactClick(`Quotation request: ${vehicle.name}`)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Contact for Pricing</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}



        {/* M&HCV Section */}
        {activeSubTab === 'mhcv' && (
          <section className="animate-in fade-in slide-in-from-bottom-6 duration-300">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-gray-950 mb-2">
                  Medium & Heavy Commercial Vehicles
                </h2>
                <p className="text-gray-500">
                  Engineered with heavy bogie suspensions and durable frames to transport bulk industrial cargo over extreme distances.
                </p>
              </div>
              <div className="h-1 w-24 bg-gray-900 hidden md:block rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mhcvVehicles.map((vehicle) => (
                <div 
                  key={vehicle.id} 
                  className="bg-white border border-gray-200/80 rounded-xl overflow-hidden flex flex-col md:flex-row group hover:shadow-xl hover:border-blue-400/40 transition-all duration-300"
                >
                  <div className="md:w-1/2 overflow-hidden bg-gray-50 min-h-[250px] relative">
                    <img 
                      src={vehicle.imageUrl} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-gray-950 mb-2">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-6">
                        {vehicle.description}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {vehicle.specs.map((spec, sidx) => (
                          <div key={sidx} className="flex justify-between border-b border-gray-100 pb-2 text-xs">
                            <span className="text-gray-400">{spec.label}</span>
                            <span className="font-bold text-gray-900">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => onContactClick(`Heavy Fleet Enquiry: ${vehicle.name}`)}
                      className="w-full bg-gray-950 hover:bg-blue-600 text-white font-bold py-3 rounded-lg text-sm transition-colors cursor-pointer text-center"
                    >
                      Contact for Fleet Pricing
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Diesel Generators Section */}
        {activeSubTab === 'gensets' && (
          <section className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-300">
            <div className="bg-slate-50 p-8 md:p-12 border border-gray-200/80 rounded-2xl flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3">
                <h2 className="font-display text-3xl font-extrabold text-gray-950 mb-4">
                  Ashok Leyland Diesel Generators
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Uninterrupted clean power backup solutions for hotels, multi-specialty hospitals, cold storage networks, and residential complexes across Goa. Gemini Motors provides the official Leypower Genset range from 5kVA up to 2500kVA.
                </p>
                
                <ul className="space-y-4 mb-8 text-sm">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    <span>CPCB II Emission standard compliant</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    <span>Lowest operating cost in class</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-blue-600">✓</span>
                    <span>24/7 official service support guaranteed</span>
                  </li>
                </ul>

                <button 
                  onClick={() => {
                    setBrochureSuccess(true);
                    setTimeout(() => setBrochureSuccess(false), 4000);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-lg flex items-center gap-2 cursor-pointer transition-colors text-xs uppercase tracking-wider shadow-sm"
                >
                  <Download size={14} />
                  <span>{brochureSuccess ? 'Downloading...' : 'Download Brochure'}</span>
                </button>
                {brochureSuccess && (
                  <p className="text-xs text-green-600 font-semibold mt-2 animate-in fade-in duration-200">
                    ✓ Brochure PDF download initiated successfully!
                  </p>
                )}
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {GENSETS.map((genset) => (
                  <div key={genset.id} className="bg-white p-6 border border-gray-200/60 rounded-xl shadow-sm flex flex-col justify-between group">
                    <div>
                      <div className="h-44 overflow-hidden rounded-lg bg-gray-50 mb-4 relative">
                        <img 
                          src={genset.imageUrl} 
                          alt={genset.name} 
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="font-display text-lg font-bold text-gray-950 mb-1">
                        {genset.name}
                      </h4>
                      <span className="font-mono text-xs font-bold text-blue-600 tracking-wider block mb-3">
                        {genset.range}
                      </span>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        {genset.description}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => onContactClick(`Leypower Genset Quote: ${genset.name} (${genset.range})`)}
                      className="text-gray-900 hover:text-blue-600 font-bold text-xs border-b border-gray-900 hover:border-blue-600 pb-1 mt-4 transition-all w-max cursor-pointer align-bottom uppercase tracking-wider"
                    >
                      Enquire Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>

      {/* Service Appointment Booking System */}
      <section ref={serviceRef} className="bg-gray-50 py-24 border-t border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Side */}
            <div className="lg:col-span-5 bg-slate-900 p-8 md:p-12 text-white rounded-2xl border border-slate-800 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div>
                <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-400/20 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-blue-300 mb-6">
                  <Wrench size={12} />
                  Minimize Fleet Downtime
                </span>
                <h2 className="font-display text-3xl font-extrabold tracking-tight mb-6">
                  Book a Fleet <br />Service Appointment
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-10">
                  Minimize heavy commercial truck downtime with our fast prioritized fleet servicing. Schedule regular maintenance, breakdown service, or specialized engine diagnostic repairs at our central service hubs.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <span className="font-bold block text-sm">Service Hub North</span>
                      <span className="text-xs text-gray-400">Mapusa Industrial Estate, Unit 4B, Goa</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                      <PhoneCall size={18} />
                    </span>
                    <div>
                      <span className="font-bold block text-sm">24/7 Priority Helpline</span>
                      <span className="text-xs text-gray-400">+1 (800) GEMINI-TRUX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-6 mt-12 flex items-center gap-2 text-xs text-slate-500 font-mono">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Authorized Leyland Spares & Technicians</span>
              </div>
            </div>

            {/* Right Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200/60 relative">
              
              {bookingSuccess && (
                <div className="absolute inset-0 bg-white/95 z-30 rounded-2xl flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4 border border-green-200">
                    <Check size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-gray-900">
                    Appointment Scheduled!
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 max-w-sm leading-relaxed">
                    We have reserved your prioritize fleet slot for <strong className="text-blue-600">{selectedModel}</strong> on <strong className="text-gray-900">{months[currentMonthIdx]} {selectedDay}, {currentYear}</strong> at <strong className="text-gray-900">{selectedTimeSlot}</strong>.
                  </p>
                  <p className="text-xs text-gray-400 mt-4 font-mono">
                    A verification SMS and service code have been generated.
                  </p>
                </div>
              )}

              <form onSubmit={handleBookService} className="space-y-6">
                
                {errorMsg && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700 text-sm">
                    <BadgeAlert size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                      VEHICLE MODEL
                    </label>
                    <select 
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full text-sm border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>L-Series 2.5T</option>
                      <option>X-Utility Plus</option>
                      <option>Urban-Pro Van</option>
                      <option>Hercules 5525 Tractor</option>
                      <option>Rhino 2825 Tipper</option>
                      <option>Switch EV commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                      REGISTRATION NUMBER
                    </label>
                    <input 
                      type="text" 
                      required
                      value={regNo}
                      onChange={(e) => setRegNo(e.target.value)}
                      placeholder="e.g. GA-03-X-1234" 
                      className="w-full text-sm border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                      COMPANY NAME
                    </label>
                    <input 
                      type="text" 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Fleet Corp Ltd." 
                      className="w-full text-sm border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                      CONTACT PERSON
                    </label>
                    <input 
                      type="text" 
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder="John Doe" 
                      className="w-full text-sm border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                      PHONE NUMBER
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="e.g. +91 9..." 
                      className="w-full text-sm border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                    SELECT SERVICE HOUR SLOT
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['09:00 AM - 11:00 AM', '11:00 AM - 01:00 PM', '02:00 PM - 04:00 PM', '04:00 PM - 06:00 PM'].map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer ${
                            isSelected 
                              ? 'bg-blue-600 border-blue-600 text-white shadow-sm' 
                              : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {slot.split(' - ')[0]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Interactive Calendar */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                    SELECT DATE FROM INDUSTRIAL CALENDAR
                  </label>
                  
                  <div className="border border-gray-300 rounded-xl p-4 bg-slate-50">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-slate-800 text-sm font-mono uppercase tracking-wide">
                        {months[currentMonthIdx]} {currentYear}
                      </span>
                      <div className="flex gap-1">
                        <button 
                          type="button" 
                          onClick={handlePrevMonth}
                          className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 cursor-pointer"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button 
                          type="button" 
                          onClick={handleNextMonth}
                          className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-600 cursor-pointer"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center">
                      {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                        <span key={day} className="text-[10px] text-gray-400 font-bold py-1">
                          {day}
                        </span>
                      ))}

                      {/* Render empty leading blocks */}
                      {leadingBlanks.map(blank => (
                        <div key={`blank-${blank}`} className="p-2"></div>
                      ))}

                      {/* Render day blocks */}
                      {daysArray.map(day => {
                        const isSelected = selectedDay === day;
                        const dateObj = new Date(currentYear, currentMonthIdx, day);
                        const isSunday = dateObj.getDay() === 0;

                        return (
                          <button
                            key={`day-${day}`}
                            type="button"
                            disabled={isSunday}
                            onClick={() => setSelectedDay(day)}
                            className={`p-2 text-xs rounded-lg transition-all text-center font-medium font-mono select-none ${
                              isSunday 
                                ? 'bg-slate-100 text-slate-300 cursor-not-allowed' 
                                : isSelected 
                                  ? 'bg-blue-600 text-white font-bold shadow-md' 
                                  : 'bg-white border border-gray-200/50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg tracking-wider text-xs uppercase shadow-lg shadow-blue-600/10 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
