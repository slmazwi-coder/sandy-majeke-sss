import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl p-6 border-2 border-red-100 bg-red-50">
              <h2 className="text-lg font-bold text-school-blue mb-4">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">Physical Address</p>
                    <p className="text-sm text-gray-500">Qumbu, 5180</p>
                    <p className="text-sm text-gray-500">Private Bag X 462, Qumbu, 5180</p>
                    <p className="text-sm text-gray-500">Eastern Cape, South Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Phone className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">Telephone / Mobile</p>
                    <p className="text-sm text-gray-500">076 278 8273 / 047 553 2147</p>
                    <p className="text-xs text-gray-400">(School office)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Mail className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-500">sandymajeke400979@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Clock className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">School Hours</p>
                    <p className="text-sm text-gray-500">Monday – Friday: 08:00 – 14:30</p>
                    <p className="text-sm text-gray-500">Closed on weekends and public holidays</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 border-2 border-red-100 bg-red-50">
              <h2 className="text-lg font-bold text-school-blue mb-2">2027 Admissions</h2>
              <p className="text-sm text-gray-600 mb-4">Applications for the 2027 academic year are open for Grades 8 – 10. Contact the school office or apply online.</p>
              <a href="/admissions" className="btn-primary inline-block text-sm">Apply Online</a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 min-h-[400px]">
            <iframe
              title="Sandy Majeke SSS Location"
              src="https://www.google.com/maps?q=-31.163,28.8706&z=15&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
