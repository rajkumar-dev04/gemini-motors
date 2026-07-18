/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import switchAward from "../assets/images/switch_ev_award.jpg";
import switchIEV3 from "../assets/images/switch_iev3.jpg";
import { motion } from 'motion/react';
import { 
  Zap, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  Leaf, 
  BatteryCharging, 
  ArrowRight,
  Calculator,
  Compass,
  FileText
} from 'lucide-react';
import { VEHICLES } from '../data';

interface EVScreenProps {
  onContactClick: (prefilledSubject?: string) => void;
}

export default function EVScreen({ onContactClick }: EVScreenProps) {
  // EV State Managers
  const [activeModel, setActiveModel] = useState<'eiv12' | 'iev3'>('eiv12');
  
  // Savings Calculator States
  const [dailyDistance, setDailyDistance] = useState<number>(180);
  const [dieselPrice, setDieselPrice] = useState<number>(92);
  const [fleetSize, setFleetSize] = useState<number>(5);

  // Constants for TCO calculations
  const DIESEL_EFFICIENCY = 5.5; // km per Litre for commercial medium/light trucks
  const ELEC_EFFICIENCY = 1.3; // km per kWh for equivalent EV
  const ELEC_PRICE_PER_KWH = 8.5; // ₹ per kWh commercial tariff in Goa
  const CO2_EMISSIONS_PER_LITRE = 2.68; // kg CO2 per Litre of diesel

  // Calculations
  const monthlyDieselCost = Math.round((dailyDistance * 30 * dieselPrice) / DIESEL_EFFICIENCY * fleetSize);
  const monthlyElectricCost = Math.round((dailyDistance * 30 * ELEC_PRICE_PER_KWH) / ELEC_EFFICIENCY * fleetSize);
  const monthlySavings = Math.max(0, monthlyDieselCost - monthlyElectricCost);
  const monthlyCO2Reduction = Math.round(((dailyDistance * 30) / DIESEL_EFFICIENCY) * CO2_EMISSIONS_PER_LITRE * fleetSize);

  // Brochure download success state
  const [brochureSent, setBrochureSent] = useState(false);

  const handleBrochureDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setBrochureSent(true);
    setTimeout(() => setBrochureSent(false), 5000);
  };

  return (
    <div className="bg-[#080d17] text-slate-100 min-h-screen animate-in fade-in duration-300">
      
      {/* EV Hero Section with glowing ambient elements */}
      <section className="relative overflow-hidden pt-28 pb-20 border-b border-slate-800 bg-gradient-to-br from-[#080d17] via-[#0f182c] to-[#040810]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-6">
              <Zap size={12} className="text-emerald-400 animate-bounce" />
              100% Zero-Emission Fleet Logistics
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Switch Mobility <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                The Electric Evolution
              </span>
            </h1>
            <p className="text-base text-slate-300 mb-8 leading-relaxed max-w-xl">
              Partnering with SWITCH Mobility to power Goan public transit and corporate supply chains. Lower your Total Cost of Ownership (TCO) by up to 60% while complying with environmental mandates.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                onClick={() => onContactClick('SWITCH EV Fleet Demo Booking')}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-lg flex items-center gap-2 text-sm uppercase tracking-wider cursor-pointer shadow-lg shadow-emerald-500/10 active:scale-95 transition-all"
              >
                <span>Book Fleet Demo</span>
                <ArrowRight size={15} />
              </button>
              <a 
                href="#tco-calculator"
                className="bg-slate-800/80 hover:bg-slate-850 text-white border border-slate-700 font-bold px-6 py-3.5 rounded-lg flex items-center gap-2 text-sm uppercase tracking-wider transition-all"
              >
                <Calculator size={15} className="text-emerald-400" />
                <span>Calculate Savings</span>
              </a>
            </div>

            {/* Quick stats banner */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800 max-w-lg">
              <div>
                <span className="font-display text-2xl md:text-3xl font-bold text-emerald-400 block">60%+</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Fuel Cost Saved</span>
              </div>
              <div>
                <span className="font-display text-2xl md:text-3xl font-bold text-emerald-400 block">250 KM</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Max Single Charge</span>
              </div>
              <div>
                <span className="font-display text-2xl md:text-3xl font-bold text-emerald-400 block">ZERO</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Tailpipe Carbon</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive model showcase with premium spec images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-2xl -z-10"></div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
              {/* Image Toggle Buttons */}
              <div className="flex gap-2 mb-4 bg-slate-950 p-1.5 rounded-xl border border-slate-800/60">
                <button 
                  onClick={() => setActiveModel('eiv12')}
                  className={`flex-1 text-center py-2.5 text-xs font-mono font-bold rounded-lg transition-all ${activeModel === 'eiv12' ? 'bg-emerald-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  EiV 12 BUS AWARD
                </button>
                <button 
                  onClick={() => setActiveModel('iev3')}
                  className={`flex-1 text-center py-2.5 text-xs font-mono font-bold rounded-lg transition-all ${activeModel === 'iev3' ? 'bg-emerald-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  IeV 3 TRUCK SPECS
                </button>
              </div>

              {/* Dynamic Image Canvas */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative group">
       <img
  src={activeModel === "eiv12" ? switchAward : switchIEV3}
  alt={
    activeModel === "eiv12"
      ? "Switch EiV 12 Electric City Bus"
      : "Switch IeV 3 Smart Electric Cargo Truck"
  }
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  loading="lazy"
/>
              </div>

              {/* Specs Panel */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                  <span className="text-slate-400 font-mono">PRODUCT TYPE</span>
                  <span className="font-bold text-white">{activeModel === 'eiv12' ? 'Low Floor Electric City Bus' : 'Smart Electric Cargo Truck'}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                  <span className="text-slate-400 font-mono">BATTERY TECH</span>
                  <span className="font-bold text-white">Advanced Li-Ion Pouch Cell (Highly Safe)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-mono">EST. REAL RANGE</span>
                  <span className="font-bold text-emerald-400 text-sm">{activeModel === 'eiv12' ? '250 KM+ Per Charge' : '120 KM+ Per Charge'}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* EV Technological Edge Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-xl hover:border-emerald-500/30 transition-all duration-300">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mb-6">
            <BatteryCharging size={24} />
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-3">Modular Battery Tech</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Equipped with proprietary Advanced Lithium-Ion liquid-cooled battery chemistry. Ensures zero thermal runaway risks and high durability even under peak Goan summer humidity.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-xl hover:border-emerald-500/30 transition-all duration-300">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mb-6">
            <TrendingUp size={24} />
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-3">Ultra Low Operating Cost</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Eliminate diesel price volatility. Electric propulsion is highly energy efficient, reducing operational fuel costs down to just ₹1.2 to ₹1.8 per kilometer driven.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-xl hover:border-emerald-500/30 transition-all duration-300">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center mb-6">
            <Award size={24} />
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-3">Breakthrough Engineering</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Award-winning commercial frameworks built with state-of-the-art diagnostic and telematics controllers. Real-time GPS, health reports, and battery cell health monitoring.
          </p>
        </div>
      </section>

      {/* Interactive Savings Calculator (TCO) */}
      <section id="tco-calculator" className="py-20 border-y border-slate-800/60 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">PROJECTION ENGINE</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4">
              Simulate Your Savings
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Drag the sliders below to see the estimated operating cost difference between your current diesel fleet and a clean Switch EV commercial fleet in Goa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive sliders input panel */}
            <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 p-8 rounded-2xl space-y-8">
              <h3 className="font-display text-lg font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Calculator size={18} className="text-emerald-400" />
                Fleet Usage Parameters
              </h3>

              {/* Slider 1: Distance */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">Daily Distance Driven Per Vehicle:</span>
                  <span className="text-emerald-400 font-bold font-mono">{dailyDistance} KM</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="500" 
                  step="10"
                  value={dailyDistance} 
                  onChange={(e) => setDailyDistance(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>50 KM</span>
                  <span>250 KM</span>
                  <span>500 KM</span>
                </div>
              </div>

              {/* Slider 2: Diesel price */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">Current Diesel Price:</span>
                  <span className="text-emerald-400 font-bold font-mono">₹{dieselPrice} / Litre</span>
                </div>
                <input 
                  type="range" 
                  min="80" 
                  max="125" 
                  step="1"
                  value={dieselPrice} 
                  onChange={(e) => setDieselPrice(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>₹80</span>
                  <span>₹100</span>
                  <span>₹125</span>
                </div>
              </div>

              {/* Slider 3: Fleet Size */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">Total Active Fleet Size:</span>
                  <span className="text-emerald-400 font-bold font-mono">{fleetSize} Trucks / Buses</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  step="1"
                  value={fleetSize} 
                  onChange={(e) => setFleetSize(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1 Vehicle</span>
                  <span>25 Vehicles</span>
                  <span>50 Vehicles</span>
                </div>
              </div>
            </div>

            {/* Calculations Output Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-gradient-to-br from-emerald-950/40 via-emerald-900/10 to-[#0c1322] border border-emerald-500/30 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Leaf size={140} className="text-emerald-400" />
                </div>

                <span className="font-mono text-[10px] font-bold text-emerald-400 tracking-widest block uppercase mb-2">
                  ESTIMATED OPERATIONAL PAYBACK
                </span>
                
                <span className="font-display text-4xl md:text-5xl font-extrabold text-white block">
                  ₹{monthlySavings.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-slate-300 block mt-1 font-medium">
                  Net Estimated Fuel Cost Savings Per Month
                </span>

                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800/80">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">MONTHLY DIESEL BILL</span>
                    <span className="text-base font-bold text-slate-300 font-mono mt-0.5 block">₹{monthlyDieselCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">EV ELECTRIC BILL</span>
                    <span className="text-base font-bold text-emerald-400 font-mono mt-0.5 block">₹{monthlyElectricCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Environmental Carbon impact card */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl flex items-center gap-6">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center shrink-0">
                  <Leaf size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Carbon Footprint Reduced</span>
                  <span className="text-xl font-bold text-white block mt-0.5">
                    {monthlyCO2Reduction.toLocaleString('en-IN')} kg CO₂ / Month
                  </span>
                  <p className="text-xs text-slate-400 mt-1">
                    Equivalent to planting approximately {Math.round(monthlyCO2Reduction / 22)} mature forest trees in Goa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead capture form / Catalog request for EV */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Get SWITCH Catalog & Technical Dossier
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Download complete blueprints, operating checklists, battery cell warranties, and service level pricing catalogs for Goa logistics networks.
            </p>

            <ul className="space-y-3 text-xs text-slate-400 font-medium">
              <li className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>SWITCH IeV 3 & IeV 4 Electric Truck brochures</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>SWITCH EiV 12 Electric Bus operational guide</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Complete TCO and battery warranty sheet</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-850">
            {brochureSent ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-emerald-500/15 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-2">Brochure Requested</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We've successfully generated the secure download link. Our EV team will reach out with the files on WhatsApp/Email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBrochureDownload} className="space-y-4">
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    YOUR NAME
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name" 
                    className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    WORK EMAIL / MOBILE
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter email or WhatsApp number" 
                    className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <FileText size={14} />
                  <span>Request EV Catalogues</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
