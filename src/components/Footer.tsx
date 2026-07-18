/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Globe, Share2, Building2, ChevronRight, Phone, Mail, Instagram } from 'lucide-react';
import { AppDivision } from '../types';
import growBizLogo from "../assets/images/growbiz_logo.png";
import { APP_LOGOS } from '../data';
import Logo from './Logo';

interface FooterProps {
  setDivision: (division: AppDivision) => void;
  onContactClick: () => void;
}

export default function Footer({ setDivision, onContactClick }: FooterProps) {
  const handleLinkClick = (division: AppDivision) => {
    setDivision(division);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto brightness-110" />
            <span className="font-display text-lg font-extrabold text-white tracking-tight">
              Gemini Motors
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Pioneering heavy commercial transport, sustainable organic green energy technology, and premium fuel supply networks across the Goan peninsula. Est. 1992.
          </p>
          <div className="text-xs text-gray-500">
            Registered Office:<br />
            Panaji, Goa, India - 403001
          </div>
        </div>

        {/* Divisions Navigation Column */}
        <div>
          <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-6 border-l-4 border-blue-500 pl-3">
            Business Divisions
          </h4>
          <ul className="space-y-3">
            <li>
              <button 
                onClick={() => handleLinkClick('gemini-motors')}
                className="flex items-center gap-1.5 hover:text-white hover:underline transition-colors text-sm font-medium cursor-pointer text-left"
              >
                <ChevronRight size={14} className="text-blue-500" />
                Commercial Fleet & Generators
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('ev')}
                className="flex items-center gap-1.5 hover:text-white hover:underline transition-colors text-sm font-medium cursor-pointer text-left"
              >
                <ChevronRight size={14} className="text-blue-500" />
                Switch EV Mobility
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('green-tech')}
                className="flex items-center gap-1.5 hover:text-white hover:underline transition-colors text-sm font-medium cursor-pointer text-left"
              >
                <ChevronRight size={14} className="text-blue-500" />
                Green Eco Technologies
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleLinkClick('auto-services')}
                className="flex items-center gap-1.5 hover:text-white hover:underline transition-colors text-sm font-medium cursor-pointer text-left"
              >
                <ChevronRight size={14} className="text-blue-500" />
                Goa Fuel Logistics & Lubricants
              </button>
            </li>
          </ul>
        </div>

        {/* Compliance & Quality Standards Column */}
        <div>
          <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-6 border-l-4 border-blue-500 pl-3">
            Compliance & Rules
          </h4>
          <ul className="space-y-3 text-sm text-gray-400 leading-relaxed">
            <li className="flex items-start gap-2">
              <ShieldCheck size={16} className="text-green-400 mt-0.5 shrink-0" />
              <span>BS-VI Fuel & Emission Standards certified</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck size={16} className="text-green-400 mt-0.5 shrink-0" />
              <span>CPCB II sound-proof guidelines compliant</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck size={16} className="text-green-400 mt-0.5 shrink-0" />
              <span>Weights & Measures approved dispensing</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck size={16} className="text-green-400 mt-0.5 shrink-0" />
              <span>ISO 9001:2015 safety operations</span>
            </li>
          </ul>
        </div>

        {/* Contacts & Social Media Column */}
        <div className="space-y-6">
          <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-6 border-l-4 border-blue-500 pl-3">
            Connect
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-400 shrink-0" />
              <a href="mailto:agnel899@gmail.com" className="hover:text-white hover:underline">
                agnel899@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-400 shrink-0" />
              <a href="tel:+919422393288" className="hover:text-white hover:underline">
                +91 94223 93288
              </a>
            </div>
            <div className="flex items-center gap-2 text-pink-400 font-medium">
              <Instagram size={16} className="shrink-0 animate-pulse" />
              <a href="https://instagram.com/geminigroupindia" target="_blank" rel="noreferrer" className="hover:text-white hover:underline text-gray-300">
                @geminigroupindia
              </a>
            </div>
          </div>
          
          <div className="flex gap-3 pt-2">
            <button 
              onClick={onContactClick}
              className="p-2.5 bg-gray-800 text-blue-400 rounded-lg hover:bg-gray-750 hover:text-white transition-all cursor-pointer"
              title="Global Office"
            >
              <Building2 size={18} />
            </button>
            <button 
              onClick={onContactClick}
              className="p-2.5 bg-gray-800 text-blue-400 rounded-lg hover:bg-gray-750 hover:text-white transition-all cursor-pointer"
              title="Official Website"
            >
              <Globe size={18} />
            </button>
            <button 
              onClick={onContactClick}
              className="p-2.5 bg-gray-800 text-blue-400 rounded-lg hover:bg-gray-750 hover:text-white transition-all cursor-pointer"
              title="Share Operations"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Sub-footer banner */}
      <div className="bg-gray-950 py-8 px-6 md:px-16 border-t border-gray-850">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} Gemini Motors Conglomerate. All rights reserved. 
            <br className="md:hidden" /> Developed in strict accordance with project MoM guidelines.
          </p>
          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-wider">
            <ShieldCheck size={16} className="text-blue-400" />
            <span>AUTHORISED DEALER - ASHOK LEYLAND & SWITCH MOBILITY</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 mt-8 text-center">
  <p className="text-gray-400 text-sm mb-3">
    Designed & Developed by
  </p>

  <div className="flex items-center justify-center gap-3">
    <img
      src={growBizLogo}
      alt="Grow Biz"
      className="h-12 w-auto object-contain"
    />

    <div className="text-left">
      <h4 className="text-white font-semibold">
        Grow Biz
      </h4>

      <p className="text-gray-400 text-sm">
        Web Design • Development • Digital Marketing
        Transforming Businesses with Digital Marketing & Web Solutions
      </p>
    </div>
  </div>
</div>
    </footer>
  );
}
