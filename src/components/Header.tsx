/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { AppDivision } from '../types';
import { APP_LOGOS } from '../data';
import Logo from './Logo';

interface HeaderProps {
  currentDivision: AppDivision;
  setDivision: (division: AppDivision) => void;
  onContactClick: () => void;
}

export default function Header({ currentDivision, setDivision, onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; id: AppDivision }[] = [
    { label: 'Gemini Motors', id: 'gemini-motors' },
    { label: 'EV', id: 'ev' },
    { label: 'Green Tech', id: 'green-tech' },
    { label: 'Auto Services', id: 'auto-services' },
    { label: 'About Us', id: 'about-us' },
  ];

  const handleNavClick = (id: AppDivision) => {
    setDivision(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full top-0 sticky z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur-md bg-opacity-95">
      <nav className="flex justify-between items-center h-20 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Brand Logo & Name */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => handleNavClick('gemini-motors')}
        >
          <Logo className="h-11 w-auto transition-transform hover:scale-105" />
          <span className="font-display text-xl font-extrabold tracking-tight text-gray-900 md:text-2xl">
            Gemini Motors
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-10 items-center h-full">
          {navItems.map((item) => {
            const isActive = currentDivision === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-base font-semibold tracking-wide transition-all duration-200 h-full flex items-center relative py-2 border-b-2 cursor-pointer ${
                  isActive 
                    ? 'text-blue-600 border-blue-600 font-bold' 
                    : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-gray-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onContactClick}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer select-none shadow-sm active:scale-95 duration-150 text-sm"
          >
            <Phone size={16} />
            Contact Us
          </button>

          <button 
            onClick={onContactClick}
            className="p-2.5 text-blue-600 hover:bg-blue-50 rounded-full transition-colors cursor-pointer"
            title="Chat Support"
          >
            <MessageSquare size={22} className="fill-current" />
          </button>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-xl z-50 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentDivision === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 font-bold' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
          >
            <Phone size={16} />
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
