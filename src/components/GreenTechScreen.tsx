/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Sun, 
  Flame, 
  Lightbulb, 
  Trash2, 
  Calculator, 
  CheckCircle, 
  Zap, 
  Leaf, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import { GREEN_TECH_PRODUCTS } from '../data';

interface GreenTechScreenProps {
  onContactClick: (prefilledSubject?: string) => void;
}

export default function GreenTechScreen({ onContactClick }: GreenTechScreenProps) {
  // Calculator states
  const [businessType, setBusinessType] = useState('Hotel & Resort');
  const [monthlyBill, setMonthlyBill] = useState(150000); // in Rupees
  const [isCalculated, setIsCalculated] = useState(true);

  // Simple clean calculation logic
  const calculateSavings = () => {
    const ratePerUnit = 8.5; // Average commercial electricity rate in Goa
    const estimatedUnits = monthlyBill / ratePerUnit;
    
    // Average 1kW solar yields about 120 units of energy per month in sunny Goa
    const recommendedKW = Math.round((estimatedUnits * 0.8) / 120); // Targeting 80% solar offset
    const areaRequired = recommendedKW * 9; // ~9 sq meters per kW
    const monthlySavings = Math.round(monthlyBill * 0.75); // ~75% reduction on bill
    const yearlySavings = monthlySavings * 12;
    
    // Rough estimate of solar installation cost: ₹55,000 per kW in India
    const estimatedInvestment = recommendedKW * 55000;
    const paybackPeriodYears = (estimatedInvestment / yearlySavings).toFixed(1);
    
    const co2Avoided = Math.round(recommendedKW * 1.2 * 25); // ~1.2 tons CO2 per kW per year over 25 year life

    return {
      kw: recommendedKW,
      area: areaRequired,
      savings: monthlySavings,
      payback: parseFloat(paybackPeriodYears) < 1.5 ? 1.8 : parseFloat(paybackPeriodYears),
      co2: co2Avoided,
      investment: estimatedInvestment
    };
  };

  const results = calculateSavings();

  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-slate-900 text-white py-20 border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 mb-6">
              <Leaf size={12} className="text-emerald-400 animate-pulse" />
              Goan Sustainable Initiative
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Powering <br />
              <span className="text-emerald-400">Sustainable Growth</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 mb-8 leading-relaxed max-w-xl">
              Solar, energy-efficient lighting, and waste management solutions. Equipping hotels, industries, and municipal corporations across Goa with sustainable eco-technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 text-xs font-mono font-bold text-slate-400 uppercase">
              <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-lg border border-slate-700/50">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>Zero Carbon footprint</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 p-3 rounded-lg border border-slate-700/50">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>State Subsidies approved</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-800/95 p-8 rounded-2xl shadow-2xl border border-slate-700/80 relative">
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1">
                <Award size={12} />
                <span>Subsidy Registered</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2 text-white">
                <Calculator size={18} className="text-emerald-400" />
                <span>Solar PV Calculator</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Estimate required solar roof space and monthly financial savings dynamically for Goan commercial tariffs.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                    SELECT BUSINESS SECTOR
                  </label>
                  <select 
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full text-sm bg-slate-900 border border-slate-700 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    <option>Hotel & Resort</option>
                    <option>Manufacturing Factory</option>
                    <option>Cold Chain / Warehouse</option>
                    <option>Multi-Specialty Hospital</option>
                    <option>Residential Apartment Block</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                    <span>MONTHLY ELECTRICITY BILL</span>
                    <span className="text-emerald-400 font-bold">₹ {monthlyBill.toLocaleString('en-IN')}</span>
                  </div>
                  <input 
                    type="range" 
                    min={20000} 
                    max={1000000} 
                    step={10000}
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 mt-1 font-mono">
                    <span>₹ 20k</span>
                    <span>₹ 500k</span>
                    <span>₹ 10L</span>
                  </div>
                </div>

                {isCalculated && (
                  <div className="bg-slate-900 rounded-xl p-4 border border-slate-750/80 grid grid-cols-2 gap-4 mt-6 animate-in fade-in duration-300">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">RECOMMENDED SIZE</span>
                      <span className="text-lg font-mono font-bold text-emerald-400 mt-0.5 block">{results.kw} kWp</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">SAVINGS / MONTH</span>
                      <span className="text-lg font-mono font-bold text-white mt-0.5 block">₹ {results.savings.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="border-t border-slate-750 pt-2 col-span-2 grid grid-cols-2 gap-2 text-[10px] text-slate-400 font-mono">
                      <span>Area: <strong className="text-slate-200">{results.area} m²</strong></span>
                      <span>ROI: <strong className="text-slate-200">{results.payback} Years</strong></span>
                      <span className="col-span-2">CO2 offset: <strong className="text-emerald-400">{results.co2} Metric Tons</strong></span>
                    </div>
                  </div>
                )}

                <button 
                  onClick={() => onContactClick(`Solar PV Proposal for ${businessType} (${results.kw} kWp plan)`)}
                  className="w-full bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  Request Solar Site Survey
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Product Divisions bento section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-16 space-y-16">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block">
            Eco-Friendly Compliance
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-950 mb-4">
            Green Technologies Covered
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            In compliance with our latest Website Development discussion, we present robust, premium products dedicated to Goan energy saving and biological recycling goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GREEN_TECH_PRODUCTS.map((product) => {
            const icons: Record<string, any> = {
              'solar-pv': Sun,
              'solar-thermal': Flame,
              'led-solutions': Lightbulb,
              'garbage-mgmt': Trash2
            };
            const IconComponent = icons[product.id] || Sun;

            return (
              <div 
                key={product.id} 
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-400/40 transition-all duration-300 flex flex-col group"
              >
                <div className="h-64 overflow-hidden relative bg-gray-50 border-b border-gray-100">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white p-3 rounded-xl border border-slate-800/40 flex items-center gap-2.5">
                    <IconComponent size={18} className="text-emerald-400" />
                    <span className="text-xs font-bold tracking-wide">{product.title.split(' & ')[0]}</span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gray-950 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {product.benefits.map((benefit, bidx) => (
                        <div key={bidx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-tight">
                          <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-6 mb-6">
                      {product.stats.map((stat, sidx) => (
                        <div key={sidx} className="p-3 bg-slate-50 rounded-lg text-center border border-gray-100">
                          <span className="text-[9px] font-mono font-bold text-gray-400 block uppercase tracking-wide">
                            {stat.label}
                          </span>
                          <span className="text-xs font-extrabold text-slate-900 block mt-1">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => onContactClick(`Green Tech Proposal: ${product.title}`)}
                      className="w-full bg-slate-950 hover:bg-emerald-500 hover:text-slate-950 text-white font-bold py-3 px-4 rounded-lg text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer text-center"
                    >
                      Request Technical Brochure
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
