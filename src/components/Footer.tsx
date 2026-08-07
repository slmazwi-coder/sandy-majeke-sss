import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#A31621] text-white pt-10 pb-6 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

          {/* Col 1 — Logo + Name - blends with footer */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/logo/sandy-majeke-logo.jpg"
                alt="Sandy Majeke SSS Logo"
                className="h-14 w-auto max-w-[7rem] shrink-0 rounded-lg shadow-md object-contain bg-white/10"
              />
              <div>
                <h3 className="text-base font-bold leading-tight">Sandy Majeke Senior Secondary School</h3>
                <p className="text-sm italic mt-0.5 text-white/70">"Striving for Excellence"</p>
              </div>
            </div>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5" size={16} />
                <span>Mahlungulu location, Qumbu, 5180</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>076 278 8273 / 047 553 2147</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>principal.200400979@ecschools.org.za</span>
              </li>
            </ul>
          </div>

          {/* Col 3 — Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link to="/subjects" className="hover:text-white">Subjects</Link></li>
              <li><Link to="/staff" className="hover:text-white">Staff</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-4 text-center text-sm text-white/50">
          © 2026 Sandy Majeke Senior Secondary School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
