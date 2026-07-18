/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import mrAgnel from "../assets/images/mragnel.jpeg";
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Cpu, 
  Users, 
  History, 
  Milestone,
  CheckCircle2,
  Wrench,
  Settings,
  ShieldCheck,
  Flame,
  Send
} from 'lucide-react';

interface AboutUsScreenProps {
  onContactClick: (prefilledSubject?: string) => void;
}

export default function AboutUsScreen({ onContactClick }: AboutUsScreenProps) {
  const companyMilestones = [
    { year: '2000', title: 'Energy & Fuel Transport', desc: 'Initiated transport operations for petroleum products and furnace oil, partnering with Indian Oil Corporation.' },
    { year: '2005', title: 'Company Established', desc: 'Officially incorporated the company, starting as an authorized dealer for premium Tata spare parts.' },
    { year: '2011', title: 'Green Tech Division', desc: 'Pioneered energy and power-saving industrial engineering solutions division.' },
    { year: '2014', title: 'Tata LCV Dealership', desc: 'Acquired the prestigious Tata Light Commercial Vehicle (LCV) dealership for Goa.' },
    { year: '2024', title: 'Strategic Partnership', desc: 'Welcomed a key strategic partner to co-lead the rapid growth of the Green Technologies business, with the remaining divisions managed Authoritatively by the founder.' },
  ];

  const coreExpertise = [
    { title: 'Indigenization Projects', desc: 'Specialized in reverse-engineering and localizing international components to Indian manufacturing standards.' },
    { title: 'JIS to IS Conversion', desc: 'Converting Japanese Industrial Standards (JIS) mechanical designs seamlessly into Indian Standards (IS).' },
    { title: 'Full Lifecycle Engineering', desc: 'End-to-end design, custom fabrication, precise erection, and complete project handover.' },
    { title: 'Mechanical Expertise', desc: 'Decades of deep mechanical design and engineering expertise in plants and industrial machinery.' }
  ];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Hello Mr. Agnel, I visited your About Us section and would like to discuss business opportunities.");
    window.open(`https://wa.me/919422393288?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#f8f9ff] text-slate-900 min-h-screen animate-in fade-in duration-300">
      
      {/* Hero Banner Section */}
      <section className="relative bg-[#0c111d] text-white py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-3xl">
            <span className="text-blue-500 font-mono text-xs tracking-widest uppercase font-bold px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
              MEET THE VISIONARY LEADERSHIP
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mt-6 tracking-tight leading-none">
              Engineering Trust <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white">
                Since 2000
              </span>
            </h1>
            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              From an independent spare parts dealer to a leading multi-division conglomerate in Goa, our journey has been fueled by deep technical expertise, unwavering standards, and direct client commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Founder Biography + Company Overview */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Founder Headshot & Professional Cards */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100/80 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>
              
              {/* Founder Image */}
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-gray-200 relative">
                <img
  src={mrAgnel}
  alt="Mr. Agnel - Founder"
  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
/>
              </div>

              {/* Founder Tag */}
              <div className="mt-6 text-center pb-2">
                <h3 className="font-display font-extrabold text-2xl text-gray-900">Mr. Agnel</h3>
                <p className="text-blue-600 font-semibold text-sm tracking-wide mt-1">Founder & Managing Director</p>
                <p className="text-xs text-gray-500 mt-2 font-mono">B.E. Mechanical (Bombay University, 1986) | PGDBM</p>
              </div>

              {/* Instant WhatsApp Connection */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.47 2.01 14.002.97 11.4 1.01c-5.43 0-9.85 4.37-9.854 9.8.001 1.778.475 3.517 1.378 5.061L1.874 20.1l4.773-1.254z" />
                  </svg>
                  Connect Automatically on WhatsApp
                </button>
              </div>
            </div>

            {/* Quick Stats Block */}
            <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl border border-slate-800">
              <h4 className="font-display font-extrabold text-lg text-blue-400 mb-6 flex items-center gap-2">
                <Users size={18} />
                Operations & Team
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-black text-white">70+</p>
                  <p className="text-xs text-gray-400 mt-1 uppercase font-semibold tracking-wider">Skilled Employees</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">26+</p>
                  <p className="text-xs text-gray-400 mt-1 uppercase font-semibold tracking-wider">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-7 space-y-12 text-gray-700">
            
            
            <div className="space-y-6">
              <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 tracking-tight">
                Visionary Engineering Leadership
              </h2>
              <p className="leading-relaxed">
                A distinguished Mechanical Engineering graduate from Bombay University (1986), Mr. Agnel spent over 17 years as a core industry expert handling major industrial setups before launching his own enterprise. Having secured admission into the highly prestigious IIT Madras, he chose to focus on building heavy industrial engineering businesses, culminating in a highly diversified Goan corporate conglomerate.
              </p>
            </div>

            {/* Founder Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">Academic Rigor</h4>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    B.E. Mechanical Engineering (1986)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    Post Graduate Diploma in Business Management (PGDBM)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    Admitted to IIT Madras (Selected Industry instead)
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Award size={20} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">Industrial Accreditation</h4>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    Certified Energy Auditor by Ministry of Power, Govt of India
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    Worked on complex industrial energy conservation audits
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 font-bold">•</span>
                    17 Years of heavy machinery technical field experience
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Competencies / Expertise */}
            <div className="space-y-6 pt-6 border-t border-gray-200/60">
              <h3 className="font-display font-extrabold text-2xl text-gray-900">
                Primary Engineering Expertise
              </h3>
              <p className="text-sm text-gray-500">
                Under the direct technical supervision of the founder, our engineering team handles highly specialized mechanical operations and localization mandates:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {coreExpertise.map((exp, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-1">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{exp.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Execution Capabilities */}
              <div className="bg-blue-50/70 rounded-2xl p-6 border border-blue-100 mt-6">
                <h4 className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-3">Field Engineering Domain Experience</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-bold text-blue-950">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    Plant Maintenance
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    Plant Erection
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    Shutdown Planning
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    Industrial Machinery
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Milestones */}
            <div className="space-y-6 pt-6 border-t border-gray-200/60">
              <h3 className="font-display font-extrabold text-2xl text-gray-900">
                Our Timeline of Growth
              </h3>
              
              <div className="space-y-8 mt-6">
                {companyMilestones.map((milestone, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    {idx !== companyMilestones.length - 1 && (
                      <div className="absolute top-10 left-5 bottom-0 w-0.5 bg-gray-200 -mb-8"></div>
                    )}
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shrink-0 z-10 font-mono text-xs font-bold text-blue-600 shadow-sm">
                      {milestone.year.slice(2)}'
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {milestone.year}
                      </span>
                      <h4 className="font-bold text-gray-900 text-base mt-1">{milestone.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action connecting to whatsapp */}
            <div className="bg-[#0c111d] text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div>
                <h4 className="font-display font-bold text-xl text-white">Have a Project or Procurement Requirement?</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Connect authoritatively with our executive team. All inquiries route directly to Mr. Agnel on WhatsApp for immediate and personalized commercial attention.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.47 2.01 14.002.97 11.4 1.01c-5.43 0-9.85 4.37-9.854 9.8.001 1.778.475 3.517 1.378 5.061L1.874 20.1l4.773-1.254z" />
                  </svg>
                  Connect on WhatsApp
                </button>
                <button
                  onClick={() => onContactClick('Procurement Inquiry')}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  General Inquiries
                  <Send size={14} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
