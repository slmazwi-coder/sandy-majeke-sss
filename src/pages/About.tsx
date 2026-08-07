import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="section-title">About Sandy Majeke SSS</h1>

        {/* Our School */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="border-l-4 pl-5 mb-6" style={{ borderColor: '#A31621' }}>
              <h2 className="text-2xl font-bold text-school-blue">Our School</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>Sandy Majeke Senior Secondary School is a public school situated in Qumbu, 5180, Eastern Cape. The school serves the local community within the OR Tambo District Municipality and is committed to providing quality education in a nurturing environment.</p>
              <p>We offer the National Senior Certificate (NSC) CAPS curriculum across Grades 8–12, preparing our learners for successful futures.</p>
              <p>Under the leadership of the Principal, Sandy Majeke SSS is dedicated to academic excellence and holistic development, guided by the motto "Striving for Excellence".</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#fef2f2] h-[280px] sm:h-[360px]"
          >
            <div className="w-full h-full bg-gradient-to-br from-[#7A1019] via-[#A31621] to-[#7A1019] flex items-center justify-center">
              <div className="text-center text-white/70 px-6">
                <div className="mx-auto mb-3 w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/15 overflow-hidden">
                  <img src="/assets/logo/sandy-majeke-logo.jpg" alt="Sandy Majeke SSS crest" className="w-full h-full object-contain" />
                </div>
                <div className="font-semibold">Sandy Majeke Senior Secondary School</div>
                <div className="text-sm text-white/60">Striving for Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Principal's Message */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-school-blue mb-2">Principal's Message</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#A31621' }} />
          </div>

          <div className="bg-[#fef2f2] rounded-3xl overflow-hidden shadow-lg border border-[#fee2e2]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center bg-school-blue p-8 md:p-10">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 shadow-xl mb-5" style={{ borderColor: '#ffffff' }}>
                  <div className="w-full h-full flex items-center justify-center bg-white">
                    <img src="/assets/logo/sandy-majeke-logo.jpg" alt="Sandy Majeke SSS crest" className="w-full h-full object-contain bg-white p-1" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white text-center leading-tight">TBC</h3>
                <p className="text-sm font-semibold mt-1 text-center text-white">Principal</p>
                <div className="w-10 h-0.5 mt-4 rounded-full opacity-60" style={{ backgroundColor: '#A31621' }} />
              </div>

              <div className="col-span-2 flex flex-col justify-center p-8 md:p-12">
                <div className="text-6xl font-serif leading-none mb-2 opacity-40 select-none" style={{ color: '#A31621' }}>"</div>
                <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>At Sandy Majeke Senior Secondary School, we are committed to providing a safe, inclusive and stimulating environment that enables every learner to reach their full potential through quality teaching, strong values and community partnership.</p>
                  <p>We value respect, integrity and ubuntu, and we work together to achieve excellence in all we do. Our commitment to academic excellence and holistic development is unwavering.</p>
                  <p>Located in Qumbu, 5180, we invite families and learners to join us in this journey of growth, learning, and achievement.</p>
                </div>
                <div className="text-6xl font-serif leading-none mt-2 text-right opacity-40 select-none" style={{ color: '#A31621' }}>"</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Facts */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-school-blue mb-2">Key Facts</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#A31621' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'School Type', value: 'Public No-Fee School' },
              { label: 'Grades', value: 'Grades 8 – 12' },
              { label: 'EMIS', value: '200400979' },
              { label: 'District', value: 'OR Tambo' },
            ].map((fact, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow border border-gray-100 border-b-4" style={{ borderBottomColor: '#A31621' }}>
                <p className="text-2xl font-bold text-school-blue">{fact.value}</p>
                <p className="text-gray-500 font-medium mt-1">{fact.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};
