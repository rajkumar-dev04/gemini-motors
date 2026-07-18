/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import GeminiMotorsScreen from './components/GeminiMotorsScreen';
import EVScreen from './components/EVScreen';
import AutoServicesScreen from './components/AutoServicesScreen';
import GreenTechScreen from './components/GreenTechScreen';
import AboutUsScreen from './components/AboutUsScreen';
import { AppDivision } from './types';

export default function App() {
  const [currentDivision, setCurrentDivision] = useState<AppDivision>('gemini-motors');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [prefilledSubject, setPrefilledSubject] = useState('');

  const handleContactOpen = (subject?: string) => {
    const baseText = subject 
      ? `Hello, I am interested in your services regarding "${subject}". Please connect me with Mr. Agnel.`
      : "Hello, I would like to enquire about Gemini Motors and associated services.";
    const encodedText = encodeURIComponent(baseText);
    window.open(`https://wa.me/919422393288?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] font-sans flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header section */}
      <Header 
        currentDivision={currentDivision} 
        setDivision={setCurrentDivision} 
        onContactClick={() => handleContactOpen()} 
      />

      {/* Main interactive screen contents based on active division tab */}
      <main className="flex-grow">
        {currentDivision === 'gemini-motors' && (
          <GeminiMotorsScreen onContactClick={handleContactOpen} />
        )}

        {currentDivision === 'ev' && (
          <EVScreen onContactClick={handleContactOpen} />
        )}

        {currentDivision === 'auto-services' && (
          <AutoServicesScreen onContactClick={handleContactOpen} />
        )}

        {currentDivision === 'green-tech' && (
          <GreenTechScreen onContactClick={handleContactOpen} />
        )}

        {currentDivision === 'about-us' && (
          <AboutUsScreen onContactClick={handleContactOpen} />
        )}
      </main>

      {/* Corporate footer */}
      <Footer 
        setDivision={setCurrentDivision} 
        onContactClick={() => handleContactOpen()} 
      />

      {/* Floating fast lead generation FAB matching the image specs */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
        {/* WhatsApp Lead FAB */}
        <a 
          href="https://wa.me/919422393288" 
          target="_blank" 
          rel="noreferrer" 
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 group relative cursor-pointer"
          title="WhatsApp Support"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.47 2.01 14.002.97 11.4 1.01c-5.43 0-9.85 4.37-9.854 9.8.001 1.778.475 3.517 1.378 5.061L1.874 20.1l4.773-1.254z" />
          </svg>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-bold text-sm whitespace-nowrap">
            Fast Enquire
          </span>
        </a>
      </div>

      {/* Dynamic contact and departments inquiry popup modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

    </div>
  );
}
