import React, { useState } from 'react';

export const AdithyaPowerHomepage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'product'>('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-[#12171a] flex flex-col relative text-white shadow-2xl selection:bg-[#ef781b]/30 selection:text-white">
      
      {/* 1. STICKY NAVIGATION */}
      <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-[#12171a]/90 backdrop-blur-md border-b border-[#263038]">
        <nav className="h-[96px] md:h-[110px] flex items-center justify-between px-6 sm:px-10 lg:px-[72px] w-full">
          {/* Adithya Power Logo */}
          <a href="#hero" className="w-[140px] sm:w-[160px] h-[76px] sm:h-[90px] relative flex items-center shrink-0">
            <img src="./assets/logo.png" alt="Adithya Power Logo" className="h-full w-auto object-contain" />
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-[32px]">
            <a href="#about" className="text-[#cfd3db] hover:text-[#ef781b] text-[14px] font-medium tracking-tight transition-colors py-1">
              About us
            </a>
            <a href="#services" className="text-[#cfd3db] hover:text-[#ef781b] text-[14px] font-medium tracking-tight transition-colors py-1">
              Services
            </a>
            <a href="#projects" className="text-[#cfd3db] hover:text-[#ef781b] text-[14px] font-medium tracking-tight transition-colors py-1">
              Projects
            </a>
            <a href="#leadership" className="text-[#cfd3db] hover:text-[#ef781b] text-[14px] font-medium tracking-tight transition-colors py-1">
              Leadership
            </a>
            <a href="#contact" className="text-[#cfd3db] hover:text-[#ef781b] text-[14px] font-medium tracking-tight transition-colors py-1">
              Contact us
            </a>
          </div>

          {/* Enquiry Action Button */}
          <div className="hidden sm:flex items-center">
            <a href="#contact" className="relative overflow-hidden bg-[#ef781b] text-white h-[50px] px-6 py-3 flex items-center gap-2 group shadow-lg transition-all">
              <span className="absolute inset-0 w-full h-full bg-[#ff8f3a] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-left" />
              <span className="relative z-10 font-semibold text-[14px] tracking-wide uppercase whitespace-nowrap">
                Make an enquiry
              </span>
              <svg className="relative z-10 w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M4 10h12M11 5l5 5-5 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu" 
            className="lg:hidden p-2.5 text-[#cfd3db] hover:text-[#ef781b] transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-[#12171a] border-t border-[#2f3942] px-6 py-6 flex flex-col gap-4 shadow-2xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[#cfd3db] hover:text-[#ef781b] text-[16px] font-medium py-2 border-b border-[#222a31]">
              About us
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-[#cfd3db] hover:text-[#ef781b] text-[16px] font-medium py-2 border-b border-[#222a31]">
              Services
            </a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-[#cfd3db] hover:text-[#ef781b] text-[16px] font-medium py-2 border-b border-[#222a31]">
              Projects
            </a>
            <a href="#leadership" onClick={() => setMobileMenuOpen(false)} className="text-[#cfd3db] hover:text-[#ef781b] text-[16px] font-medium py-2 border-b border-[#222a31]">
              Leadership
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#cfd3db] hover:text-[#ef781b] text-[16px] font-medium py-2 border-b border-[#222a31]">
              Contact us
            </a>
            <div className="pt-2">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full bg-[#ef781b] hover:bg-[#ff8f3a] text-white font-semibold text-[14px] uppercase tracking-wide px-6 py-3.5 flex items-center justify-center gap-2 transition-colors shadow-md">
                <span>Make an enquiry</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO */}
      <section className="w-full flex flex-col relative bg-[#12171a]" id="hero">
        <div className="h-[620px] sm:h-[680px] lg:h-[720px] relative overflow-hidden flex flex-col justify-between pt-12 sm:pt-16 pb-9 px-6 sm:px-10 lg:px-[72px] w-full">
          <img 
            src="./assets/hero-furnace.png" 
            alt="Steel furnace photograph" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-100 hover:scale-105 transition-transform duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12171a]/95 via-[#12171a]/70 to-[#12171a]/25 pointer-events-none" />

          <div className="relative z-10 max-w-[840px] w-full flex flex-col gap-6 sm:gap-7 my-auto">
            <div className="flex items-center gap-3">
              <div className="bg-[#ef781b] h-[2px] w-[26px]" />
              <p className="font-mono text-[11px] sm:text-[12px] text-[#ef781b] tracking-[1.8px] uppercase">
                ADITHYA POWER / REFRACTORIES &amp; INSULATION
              </p>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-bold uppercase tracking-tight leading-[0.98]">
              At the heart<br /><span className="text-[#ef781b]">of the heat.</span>
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#b8c0c8] tracking-tight leading-relaxed max-w-[500px]">
              Furnace, steel and casting. Refractory expertise for the environments where performance matters most.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <a href="#services" className="relative overflow-hidden bg-[#ef781b] text-white font-semibold h-[52px] px-6 py-3 flex items-center gap-2 group shadow-xl transition-all">
                <span className="absolute inset-0 w-full h-full bg-[#ff8f3a] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-left" />
                <span className="relative z-10 font-semibold text-[14px] tracking-wide uppercase whitespace-nowrap">
                  Explore our capabilities
                </span>
                <svg className="relative z-10 w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M4 10h12M11 5l5 5-5 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a href="#about" className="text-white hover:text-[#ef781b] text-[14px] font-medium transition-colors flex items-center gap-2 px-2 py-2">
                <span>Meet Adithya Power</span>
                <span className="text-[16px] text-[#ef781b]">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="relative z-10 w-full border-t border-[#2f3942] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono tracking-wider text-[#b8c0c8]">
            <p>MATERIAL KNOWLEDGE. INDUSTRIAL FOCUS.</p>
            <a href="#about" className="text-white hover:text-[#ef781b] transition-colors flex items-center gap-1.5 font-medium">
              <span>DISCOVER WHAT DRIVES US</span>
              <span className="text-[12px] text-[#ef781b]">&darr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US (SURFACE LAYER #1a2126) */}
      <section className="w-full px-6 sm:px-10 lg:px-[72px] py-20 lg:py-24 flex flex-col gap-14 bg-[#1a2126] text-white border-b border-[#2f3942]" id="about">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-[7px] h-[7px] bg-[#ef781b] shrink-0" />
              <p className="font-mono font-semibold text-[#ef781b] text-[12px] tracking-[1.4px] uppercase">
                01 / About us
              </p>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-[52px] font-bold uppercase tracking-tight leading-[1.08] max-w-[760px]">
              Engineering Expertise Meets <span className="text-[#ef781b]">Refractory Excellence.</span>
            </h2>
          </div>
          <div className="text-[#b8c0c8] text-[14px] sm:text-[15px] font-medium leading-[1.5] max-w-[340px] border-l-2 border-[#ef781b] pl-4">
            <p className="text-white font-semibold">Adithya Power</p>
            <p>Refractories &amp; Insulation Pvt. Ltd.</p>
            <p className="text-[#ef781b] text-[12px] mt-1 font-mono uppercase">Reliable &bull; Cost-Effective &bull; Proven</p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative w-full pb-10 sm:pb-12">
            <div className="w-[84%] aspect-[4/3] relative overflow-hidden border border-[#2f3942] shadow-xl bg-[#222a31]">
              <img src="./assets/about/team-conference.png" alt="Team Conference" className="w-full h-full object-cover object-center" />
              <div className="absolute top-4 left-4 bg-[#12171a]/90 backdrop-blur-sm px-3.5 py-1.5 border-l-2 border-[#ef781b]">
                <span className="text-white text-[11px] font-mono tracking-wider uppercase">EXECUTIVE TEAM</span>
              </div>
            </div>

            <div className="absolute -bottom-2 right-0 w-[58%] aspect-[4/3] overflow-hidden border-4 border-[#1a2126] shadow-2xl bg-[#222a31]">
              <img src="./assets/about/team-onsite.png" alt="On-Site Team" className="w-full h-full object-cover object-center" />
              <div className="absolute bottom-3 left-3 bg-[#2a1608]/95 border-l-2 border-[#ef781b] backdrop-blur-sm px-3 py-1">
                <span className="text-white text-[11px] font-mono tracking-wider uppercase">ON-SITE EXECUTION</span>
              </div>
            </div>

            <div className="absolute top-6 right-2 sm:right-6 bg-[#ef781b] text-white p-4 sm:p-5 shadow-2xl flex flex-col items-center justify-center text-center">
              <span className="text-[28px] sm:text-[32px] font-bold leading-none font-mono">39+</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase mt-1 leading-tight font-mono">Years Combined<br />Experience</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-[22px] sm:text-[24px] font-semibold leading-snug">
                Reliable, Cost-Effective Refractory &amp; Insulation Expertise
              </h3>
              <p className="text-[#b8c0c8] text-[15px] sm:text-[16px] leading-[1.65]">
                At <strong className="text-white font-semibold">Adithya Power Refractories and Insulation Pvt. Ltd.</strong>, we specialize in delivering end-to-end solutions for all your high-temperature refractory and insulation needs.
              </p>
              <p className="text-[#b8c0c8] text-[15px] leading-[1.65]">
                Our expertise spans across manufacturing specialized refractory materials, bespoke design engineering, thermal material selection and optimization, and turnkey on-site installation and dry out services.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-1">
              <div className="flex items-start gap-4 p-5 bg-[#222a31] border border-[#2f3942] transition-all hover:border-[#ef781b]/50">
                <div className="w-[42px] h-[42px] shrink-0 border-2 border-[#ef781b] flex items-center justify-center text-[#ef781b] bg-[#1a2126]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold text-[14px] font-mono tracking-wider uppercase">WHY US?</h4>
                  <p className="text-[#b8c0c8] text-[14px] leading-relaxed">
                    Deep material science, rapid shutdown mobilization, and custom formulation for extreme industrial cycles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#222a31] border border-[#2f3942] transition-all hover:border-[#ef781b]/50">
                <div className="w-[42px] h-[42px] shrink-0 border-2 border-[#ef781b] flex items-center justify-center text-[#ef781b] bg-[#1a2126]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold text-[14px] font-mono tracking-wider uppercase">WHAT WE OFFER?</h4>
                  <p className="text-[#b8c0c8] text-[14px] leading-relaxed">
                    Turnkey refractory manufacturing, thermal CAD modeling, material selection, and precision burner dry outs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#2f3942]" />

        <div className="w-full flex flex-wrap items-center justify-between gap-4 text-[12px] sm:text-[13px] font-mono text-[#b8c0c8]">
          <p className="tracking-wider uppercase">FURNACE &amp; STEEL CASTING</p>
          <p className="text-[#ef781b] font-normal">/</p>
          <p className="tracking-wider uppercase">REFRACTORIES &amp; INSULATION</p>
          <p className="text-[#ef781b] font-normal">/</p>
          <p className="tracking-wider uppercase">MATERIAL SCIENCE &amp; R&amp;D</p>
          <p className="text-[#ef781b] font-normal">/</p>
          <p className="tracking-wider uppercase">PRECISION ON-SITE DRY OUT</p>
        </div>
      </section>

      {/* 4. OUR SERVICES (BASE LAYER #12171a) */}
      <section className="w-full bg-[#12171a] px-6 sm:px-10 lg:px-[72px] py-20 lg:py-24 flex flex-col gap-14 border-b border-[#2f3942] text-white" id="services">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-[7px] h-[7px] bg-[#ef781b] shrink-0" />
              <p className="font-mono font-semibold text-[#ef781b] text-[12px] tracking-[1.4px] uppercase">
                02 / Our Services
              </p>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-[52px] font-bold uppercase tracking-tight leading-[1.08] max-w-[720px]">
              Engineered Services for <span className="text-[#ef781b]">High-Heat Operations.</span>
            </h2>
          </div>
          <p className="text-[#b8c0c8] text-[15px] sm:text-[16px] leading-[1.6] max-w-[380px]">
            Every service has its own dedicated engineering protocol, from raw material formulation to computer-monitored dry out cycles.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {/* Service Card 1 */}
          <a href="refractory-material-manufacturing.html" className="group bg-[#222a31] text-white border border-[#2f3942] p-7 sm:p-8 flex flex-col justify-between min-h-[460px] shadow-lg hover:shadow-2xl hover:border-[#ef781b]/60 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden block">
            <div>
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-[#1a2126] text-[#ef781b] border border-[#2f3942] flex items-center justify-center transition-colors group-hover:border-[#ef781b]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <span className="w-10 h-10 border border-[#2f3942] text-[#b8c0c8] flex items-center justify-center font-mono text-[13px] font-semibold">
                  01
                </span>
              </div>
              <div className="flex flex-col gap-3.5 my-6">
                <h3 className="text-white text-[24px] font-bold uppercase tracking-tight leading-tight group-hover:text-[#ef781b] transition-colors">
                  Refractory Material<br />Manufacturing
                </h3>
                <p className="text-[#b8c0c8] text-[13px] leading-relaxed">
                  High-alumina bricks, castables, mortars, and customized precast shapes engineered for extreme thermal cycles.
                </p>
                <ul className="text-[12px] space-y-2 pt-2 text-[#cfd3db]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>PCPF Shapes &amp; Monolithics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>Ceramic Fibers &amp; Microporous</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>10 Specialized Brick Grades</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-[#2f3942] flex items-center justify-between text-[#ef781b] font-mono text-[12px] font-semibold uppercase tracking-wider">
              <span>EXPLORE FULL PAGE</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ef781b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          {/* Service Card 2 */}
          <a href="design-engineering.html" className="group bg-[#222a31] text-white border border-[#2f3942] p-7 sm:p-8 flex flex-col justify-between min-h-[460px] shadow-lg hover:shadow-2xl hover:border-[#ef781b]/60 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden block">
            <div>
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-[#1a2126] text-[#ef781b] border border-[#2f3942] flex items-center justify-center transition-colors group-hover:border-[#ef781b]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <span className="w-10 h-10 border border-[#2f3942] text-[#b8c0c8] flex items-center justify-center font-mono text-[13px] font-semibold">
                  02
                </span>
              </div>
              <div className="flex flex-col gap-3.5 my-6">
                <h3 className="text-white text-[24px] font-bold uppercase tracking-tight leading-tight group-hover:text-[#ef781b] transition-colors">
                  Design<br />Engineering
                </h3>
                <p className="text-[#b8c0c8] text-[13px] leading-relaxed">
                  Thermal profiling, CAD refractory lining design, expansion allowance calculation, and shell heat-loss mitigation.
                </p>
                <ul className="text-[12px] space-y-2 pt-2 text-[#cfd3db]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>Thermal Gradient FEA Modeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>Anchor Layout Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>Failure Analysis &amp; Redesign</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-[#2f3942] flex items-center justify-between text-[#ef781b] font-mono text-[12px] font-semibold uppercase tracking-wider">
              <span>EXPLORE FULL PAGE</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ef781b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          {/* Service Card 3 */}
          <a href="material-selection-optimization-supply.html" className="group bg-[#222a31] text-white border border-[#2f3942] p-7 sm:p-8 flex flex-col justify-between min-h-[460px] shadow-lg hover:shadow-2xl hover:border-[#ef781b]/60 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden block">
            <div>
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-[#1a2126] text-[#ef781b] border border-[#2f3942] flex items-center justify-center transition-colors group-hover:border-[#ef781b]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span className="w-10 h-10 border border-[#2f3942] text-[#b8c0c8] flex items-center justify-center font-mono text-[13px] font-semibold">
                  03
                </span>
              </div>
              <div className="flex flex-col gap-3.5 my-6">
                <h3 className="text-white text-[24px] font-bold uppercase tracking-tight leading-tight group-hover:text-[#ef781b] transition-colors">
                  Material Selection<br />&amp; Optimization
                </h3>
                <p className="text-[#b8c0c8] text-[13px] leading-relaxed">
                  Scientific metallurgical matching, slag resistance specification, and reliable batch-tested refractory logistics.
                </p>
                <ul className="text-[12px] space-y-2 pt-2 text-[#cfd3db]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>Slag Resistance Profiling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>Cost-per-Ton Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>Batch-Certified Global Supply</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-[#2f3942] flex items-center justify-between text-[#ef781b] font-mono text-[12px] font-semibold uppercase tracking-wider">
              <span>EXPLORE FULL PAGE</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ef781b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          {/* Service Card 4 */}
          <a href="installation-and-dry-out.html" className="group bg-[#222a31] text-white border border-[#2f3942] p-7 sm:p-8 flex flex-col justify-between min-h-[460px] shadow-lg hover:shadow-2xl hover:border-[#ef781b]/60 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden block">
            <div>
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-[#1a2126] text-[#ef781b] border border-[#2f3942] flex items-center justify-center transition-colors group-hover:border-[#ef781b]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <span className="w-10 h-10 border border-[#2f3942] text-[#b8c0c8] flex items-center justify-center font-mono text-[13px] font-semibold">
                  04
                </span>
              </div>
              <div className="flex flex-col gap-3.5 my-6">
                <h3 className="text-white text-[24px] font-bold uppercase tracking-tight leading-tight group-hover:text-[#ef781b] transition-colors">
                  Installation<br />&amp; Dry Out
                </h3>
                <p className="text-[#b8c0c8] text-[13px] leading-relaxed">
                  Pneumatic gunning, bricklaying, ramming, and specialized heating ramp cycles preventing moisture spalling.
                </p>
                <ul className="text-[12px] space-y-2 pt-2 text-[#cfd3db]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>Turnkey Shutdown Crews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>Computerized Gas Burner Skids</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef781b] shrink-0" />
                    <span>Zero-Spalling Dewatering</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-[#2f3942] flex items-center justify-between text-[#ef781b] font-mono text-[12px] font-semibold uppercase tracking-wider">
              <span>EXPLORE FULL PAGE</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ef781b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>
      </section>

      {/* 5. CAPABILITIES & INDUSTRIAL FOCUS (SURFACE #1a2126) */}
      <section className="w-full bg-[#1a2126] px-6 sm:px-10 lg:px-[72px] py-20 lg:py-24 flex flex-col gap-12 text-white border-b border-[#2f3942]" id="capabilities">
        <div className="flex items-center gap-2.5">
          <div className="w-[7px] h-[7px] bg-[#ef781b] shrink-0" />
          <p className="font-mono font-semibold text-[#ef781b] text-[12px] tracking-[1.4px] uppercase">
            03 / Capabilities
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[52px] font-bold uppercase tracking-tight leading-[1.08] max-w-[700px]">
            Expertise for the <span className="text-[#ef781b]">Working End</span> of Industry.
          </h2>
          <p className="text-[#b8c0c8] text-[15px] sm:text-[16px] leading-[1.6] max-w-[360px]">
            From the furnace environment to the materials that protect it. Explore the core disciplines behind Adithya Power.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="flex flex-col bg-[#222a31] border border-[#2f3942] p-6 shadow-md hover:border-[#ef781b]/60 transition-all">
            <div className="h-[240px] w-full relative overflow-hidden bg-[#12171a] mb-5">
              <img src="./assets/capability-1.png" alt="Furnace and steel casting" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[#ef781b] font-mono text-[13px] font-semibold">01</span>
              <h3 className="text-white text-[24px] font-bold uppercase tracking-tight">Furnace &amp; steel casting</h3>
            </div>
            <p className="text-[#b8c0c8] text-[14px] leading-relaxed">
              A focus on the demanding conditions of melting, handling and casting steel with extended lining campaigns.
            </p>
          </div>

          <div className="flex flex-col bg-[#222a31] border border-[#2f3942] p-6 shadow-md hover:border-[#ef781b]/60 transition-all">
            <div className="h-[240px] w-full relative overflow-hidden bg-[#12171a] mb-5">
              <img src="./assets/capability-2.png" alt="Refractories and insulation" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[#ef781b] font-mono text-[13px] font-semibold">02</span>
              <h3 className="text-white text-[24px] font-bold uppercase tracking-tight">Refractories &amp; insulation</h3>
            </div>
            <p className="text-[#b8c0c8] text-[14px] leading-relaxed">
              Material expertise for high-temperature linings, thermal conservation, and minimal furnace shell losses.
            </p>
          </div>

          <div className="flex flex-col bg-[#222a31] border border-[#2f3942] p-6 shadow-md hover:border-[#ef781b]/60 transition-all">
            <div className="h-[240px] w-full relative overflow-hidden bg-[#12171a] mb-5">
              <img src="./assets/capability-3.png" alt="R&D, production & quality" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[#ef781b] font-mono text-[13px] font-semibold">03</span>
              <h3 className="text-white text-[24px] font-bold uppercase tracking-tight">R&amp;D, production &amp; quality</h3>
            </div>
            <p className="text-[#b8c0c8] text-[14px] leading-relaxed">
              A technical perspective connecting laboratory material development, pilot production, and batch-tested quality.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-[#2f3942]" />

        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-14 items-start lg:items-center" id="industrial-focus">
          <div className="w-full lg:w-[280px] shrink-0 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-[6px] h-[6px] bg-[#ef781b] shrink-0" />
              <p className="font-mono font-semibold text-[#ef781b] text-[11px] tracking-wider uppercase">Industrial focus</p>
            </div>
            <p className="text-white text-3xl font-bold uppercase leading-tight">Where heat meets industry.</p>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a href="#projects" className="border border-[#2f3942] p-5 flex flex-col gap-3 group bg-[#222a31] hover:border-[#ef781b]/60 transition-all">
              <div className="flex justify-between items-center">
                <span className="text-white text-[20px] font-bold uppercase group-hover:text-[#ef781b] transition-colors">Iron &amp; steel</span>
                <span className="text-[#ef781b] text-[18px]">↗</span>
              </div>
              <p className="text-[#b8c0c8] text-[12px]">BOF, EAF slaglines, ladles &amp; tundishes</p>
            </a>

            <a href="#projects" className="border border-[#2f3942] p-5 flex flex-col gap-3 group bg-[#222a31] hover:border-[#ef781b]/60 transition-all">
              <div className="flex justify-between items-center">
                <span className="text-white text-[20px] font-bold uppercase group-hover:text-[#ef781b] transition-colors">Foundries &amp; casting</span>
                <span className="text-[#ef781b] text-[18px]">↗</span>
              </div>
              <p className="text-[#b8c0c8] text-[12px]">Induction furnaces, ladles &amp; flow control</p>
            </a>

            <a href="#projects" className="border border-[#2f3942] p-5 flex flex-col gap-3 group bg-[#222a31] hover:border-[#ef781b]/60 transition-all">
              <div className="flex justify-between items-center">
                <span className="text-white text-[20px] font-bold uppercase group-hover:text-[#ef781b] transition-colors">High-temp furnaces</span>
                <span className="text-[#ef781b] text-[18px]">↗</span>
              </div>
              <p className="text-[#b8c0c8] text-[12px]">Rotary kilns, heaters, incinerators &amp; crackers</p>
            </a>
          </div>
        </div>
      </section>

      {/* 6. OUR PROJECTS — INDUSTRIES WE SERVE (SURFACE #1a2126) */}
      <section className="w-full bg-[#1a2126] px-6 sm:px-10 lg:px-[72px] py-20 lg:py-24 flex flex-col gap-14 text-white border-b border-[#2f3942]" id="projects">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-[7px] h-[7px] bg-[#ef781b] shrink-0" />
              <p className="font-mono font-semibold text-[#ef781b] text-[12px] tracking-[1.4px] uppercase">
                04 / Our Projects
              </p>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-[52px] font-bold uppercase tracking-tight leading-[1.08] max-w-[700px]">
              Industries <span className="text-[#ef781b]">We Serve.</span>
            </h2>
          </div>
          <p className="text-[#b8c0c8] text-[15px] sm:text-[16px] leading-[1.6] max-w-[420px]">
            Engineered refractory linings and turnkey execution delivered across core heavy industries with extreme thermal and chemical demands.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Cement */}
          <div className="group flex flex-col bg-[#222a31] border border-[#2f3942] hover:border-[#ef781b]/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-lg justify-between">
            <div>
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-[#12171a]">
                <img src="./assets/projects/cement-industry.png" alt="Cement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-[#12171a]/90 px-2.5 py-1 border-l-2 border-[#ef781b]">
                  <span className="text-white text-[10px] font-mono tracking-wider uppercase">SECTOR A</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <span className="text-[#ef781b] text-[11px] font-mono font-semibold tracking-wider uppercase">HEAVY MINERALS</span>
                <h3 className="text-white text-[22px] font-bold uppercase leading-snug group-hover:text-[#ef781b] transition-colors">Cement Industry</h3>
                <p className="text-[#b8c0c8] text-[12px] leading-relaxed">
                  Specialized in alkali-resistant refractories, SiC castables, and high-strength spinel bricks.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <a href="#specialized-execution" className="pt-3 border-t border-[#2f3942] flex items-center justify-between text-[#ef781b] text-[11px] font-mono font-semibold uppercase tracking-wider">
                <span>EXPLORE SCOPE</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Steel Plant */}
          <div className="group flex flex-col bg-[#222a31] border border-[#2f3942] hover:border-[#ef781b]/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-lg justify-between">
            <div>
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-[#12171a]">
                <img src="./assets/projects/steel-plant.png" alt="Steel Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-[#12171a]/90 px-2.5 py-1 border-l-2 border-[#ef781b]">
                  <span className="text-white text-[10px] font-mono tracking-wider uppercase">SECTOR B</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <span className="text-[#ef781b] text-[11px] font-mono font-semibold tracking-wider uppercase">METALLURGY</span>
                <h3 className="text-white text-[22px] font-bold uppercase leading-snug group-hover:text-[#ef781b] transition-colors">Steel Plant</h3>
                <p className="text-[#b8c0c8] text-[12px] leading-relaxed">
                  Primary and secondary steelmaking refractory management, lowering refractory cost per ton.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <a href="#specialized-execution" className="pt-3 border-t border-[#2f3942] flex items-center justify-between text-[#ef781b] text-[11px] font-mono font-semibold uppercase tracking-wider">
                <span>EXPLORE SCOPE</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Aluminium */}
          <div className="group flex flex-col bg-[#222a31] border border-[#2f3942] hover:border-[#ef781b]/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-lg justify-between">
            <div>
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-[#12171a]">
                <img src="./assets/projects/aluminium-industry.png" alt="Aluminium" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-[#12171a]/90 px-2.5 py-1 border-l-2 border-[#ef781b]">
                  <span className="text-white text-[10px] font-mono tracking-wider uppercase">SECTOR C</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <span className="text-[#ef781b] text-[11px] font-mono font-semibold tracking-wider uppercase">NON-FERROUS</span>
                <h3 className="text-white text-[22px] font-bold uppercase leading-snug group-hover:text-[#ef781b] transition-colors">Aluminium Industry</h3>
                <p className="text-[#b8c0c8] text-[12px] leading-relaxed">
                  Anti-corundum barrier technologies preventing molten aluminium penetration in holding hearths.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <a href="#specialized-execution" className="pt-3 border-t border-[#2f3942] flex items-center justify-between text-[#ef781b] text-[11px] font-mono font-semibold uppercase tracking-wider">
                <span>EXPLORE SCOPE</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Chemical */}
          <div className="group flex flex-col bg-[#222a31] border border-[#2f3942] hover:border-[#ef781b]/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-lg justify-between">
            <div>
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-[#12171a]">
                <img src="./assets/projects/chemical-industry.png" alt="Chemical" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-[#12171a]/90 px-2.5 py-1 border-l-2 border-[#ef781b]">
                  <span className="text-white text-[10px] font-mono tracking-wider uppercase">SECTOR D</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <span className="text-[#ef781b] text-[11px] font-mono font-semibold tracking-wider uppercase">SPECIALTY CHEMICALS</span>
                <h3 className="text-white text-[22px] font-bold uppercase leading-snug group-hover:text-[#ef781b] transition-colors">Chemical Industry</h3>
                <p className="text-[#b8c0c8] text-[12px] leading-relaxed">
                  Acid-proof systems resisting gaseous chlorine, SO2 vapors, and severe thermal cycling.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <a href="#specialized-execution" className="pt-3 border-t border-[#2f3942] flex items-center justify-between text-[#ef781b] text-[11px] font-mono font-semibold uppercase tracking-wider">
                <span>EXPLORE SCOPE</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Petrochemicals */}
          <div className="group flex flex-col bg-[#222a31] border border-[#2f3942] hover:border-[#ef781b]/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-lg justify-between">
            <div>
              <div className="w-full aspect-[4/3] overflow-hidden relative bg-[#12171a]">
                <img src="./assets/projects/petrochemical-industry.png" alt="Petrochemicals" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-[#12171a]/90 px-2.5 py-1 border-l-2 border-[#ef781b]">
                  <span className="text-white text-[10px] font-mono tracking-wider uppercase">SECTOR E</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <span className="text-[#ef781b] text-[11px] font-mono font-semibold tracking-wider uppercase">HYDROCARBONS</span>
                <h3 className="text-white text-[22px] font-bold uppercase leading-snug group-hover:text-[#ef781b] transition-colors">Petrochemicals</h3>
                <p className="text-[#b8c0c8] text-[12px] leading-relaxed">
                  Hexmetal-anchored erosion linings for FCCU cyclones, riser lines, and steam methane reformers.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <a href="#specialized-execution" className="pt-3 border-t border-[#2f3942] flex items-center justify-between text-[#ef781b] text-[11px] font-mono font-semibold uppercase tracking-wider">
                <span>EXPLORE SCOPE</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SPECIALIZED PROJECT EXECUTION (BASE #12171a) */}
      <section className="w-full bg-[#12171a] px-6 sm:px-10 lg:px-[72px] py-20 lg:py-24 flex flex-col gap-14 text-white border-b border-[#2f3942] relative overflow-hidden" id="specialized-execution">
        <div className="absolute -right-[100px] -top-[100px] w-[500px] h-[500px] bg-[#ef781b]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 relative z-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-[7px] h-[7px] bg-[#ef781b] shrink-0" />
              <p className="font-mono font-semibold text-[#ef781b] text-[12px] tracking-[1.4px] uppercase">
                05 / Specialized Execution
              </p>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-[52px] font-bold uppercase tracking-tight leading-[1.08] max-w-[760px]">
              Specialized <span className="text-[#ef781b]">Project Execution.</span>
            </h2>
          </div>
          <p className="text-[#b8c0c8] text-[15px] sm:text-[16px] leading-[1.65] max-w-[420px]">
            Our plant survey engineers provide on-site refractory inspection, residual thickness measurement, and emergency shutdown execution across mission-critical furnaces.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="bg-[#222a31] border border-[#2f3942] hover:border-[#ef781b]/60 p-7 flex flex-col justify-between min-h-[300px] transition-all duration-300 group shadow-md">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#1a2126] border border-[#2f3942] flex items-center justify-center text-[#ef781b] group-hover:border-[#ef781b] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-white text-[22px] font-bold uppercase group-hover:text-[#ef781b] transition-colors">
                Plant Survey &amp; Lining Audits
              </h3>
              <p className="text-[#b8c0c8] text-[13px] leading-relaxed">
                On-site laser thermography, residual thickness profiling, thermal loss assessment, and failure root-cause analysis.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2f3942] text-[11px] font-mono font-semibold text-[#ef781b] uppercase tracking-wider">
              PRE-SHUTDOWN DIAGNOSTICS
            </div>
          </div>

          <div className="bg-[#222a31] border border-[#2f3942] hover:border-[#ef781b]/60 p-7 flex flex-col justify-between min-h-[300px] transition-all duration-300 group shadow-md">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#1a2126] border border-[#2f3942] flex items-center justify-center text-[#ef781b] group-hover:border-[#ef781b] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-white text-[22px] font-bold uppercase group-hover:text-[#ef781b] transition-colors">
                Rapid Shutdown Mobilization
              </h3>
              <p className="text-[#b8c0c8] text-[13px] leading-relaxed">
                Multi-shift certified bricklayers, gunning masters, and metallurgists mobilized 24/7 for turnaround windows.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2f3942] text-[11px] font-mono font-semibold text-[#ef781b] uppercase tracking-wider">
              24/7 TURNKEY RELINING
            </div>
          </div>

          <div className="bg-[#222a31] border border-[#2f3942] hover:border-[#ef781b]/60 p-7 flex flex-col justify-between min-h-[300px] transition-all duration-300 group shadow-md">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#1a2126] border border-[#2f3942] flex items-center justify-center text-[#ef781b] group-hover:border-[#ef781b] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                </svg>
              </div>
              <h3 className="text-white text-[22px] font-bold uppercase group-hover:text-[#ef781b] transition-colors">
                Programmatic Gas Dry Out
              </h3>
              <p className="text-[#b8c0c8] text-[13px] leading-relaxed">
                High-velocity computerized heating burner skids with multi-channel thermocouple tracking to eliminate spalling.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2f3942] text-[11px] font-mono font-semibold text-[#ef781b] uppercase tracking-wider">
              ZERO-SPALLING PROTOCOL
            </div>
          </div>

          <div className="bg-[#222a31] border border-[#2f3942] hover:border-[#ef781b]/60 p-7 flex flex-col justify-between min-h-[300px] transition-all duration-300 group shadow-md">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#1a2126] border border-[#2f3942] flex items-center justify-center text-[#ef781b] group-hover:border-[#ef781b] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-white text-[22px] font-bold uppercase group-hover:text-[#ef781b] transition-colors">
                Emergency Hot Patching
              </h3>
              <p className="text-[#b8c0c8] text-[13px] leading-relaxed">
                Hot refractory gunning, ceramic welding, and robotic nozzle spraying to reinforce failing spots on-stream.
              </p>
            </div>
            <div className="pt-4 border-t border-[#2f3942] text-[11px] font-mono font-semibold text-[#ef781b] uppercase tracking-wider">
              HOT REPAIR INTERVENTION
            </div>
          </div>
        </div>

        {/* Deep Ember Banner */}
        <div className="w-full bg-gradient-to-r from-[#2a1608] via-[#1e130b] to-[#14181b] border border-[#522b12] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 shadow-2xl">
          <div className="flex flex-col gap-3 max-w-[680px]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef781b] shadow-[0_0_8px_#ef781b]" />
              <span className="text-[#ef781b] font-mono font-bold text-[12px] tracking-widest uppercase">IMMEDIATE PLANT MOBILIZATION</span>
            </div>
            <h3 className="text-white text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-snug">
              Need Specialized Project Execution?
            </h3>
            <p className="text-[#b8c0c8] text-[15px] leading-relaxed">
              Connect directly with our senior site managers for technical feasibility reviews, thermal simulations, and emergency crew dispatch.
            </p>
          </div>

          <div className="flex items-center shrink-0 w-full lg:w-auto">
            <a href="#contact" className="w-full sm:w-auto relative overflow-hidden bg-[#ef781b] text-white font-semibold text-[14px] uppercase tracking-wide px-8 py-4 flex items-center justify-center gap-2 group shadow-xl transition-all">
              <span className="absolute inset-0 w-full h-full bg-[#ff8f3a] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-left" />
              <span className="relative z-10">Request Plant Proposal</span>
              <span className="relative z-10">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. OUR APPROACH (WARM OFF-WHITE LIGHT BAND #f4f1ec) */}
      <section className="w-full bg-[#f4f1ec] text-[#12171a] px-6 sm:px-10 lg:px-[72px] py-20 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center border-b border-[#ded9d0]" id="approach">
        <div className="w-full lg:w-[480px] xl:w-[520px] aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[500px] relative shrink-0 overflow-hidden flex flex-col justify-end p-6 border border-[#ded9d0] shadow-xl">
          <img src="./assets/furnace-lining.png" alt="Furnace Lining" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          <div className="bg-[#12171a] px-4 py-2.5 relative z-10 w-fit border-l-2 border-[#ef781b] shadow-md">
            <p className="font-mono font-semibold text-[#ef781b] text-[11px] tracking-wider uppercase">
              THE MATERIAL BEHIND THE PROCESS
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="flex items-center gap-2.5">
            <div className="w-[7px] h-[7px] bg-[#ef781b] shrink-0" />
            <p className="font-mono font-semibold text-[#ef781b] text-[12px] tracking-[1.4px] uppercase">
              06 / Our approach
            </p>
          </div>

          <h2 className="text-[#12171a] text-4xl sm:text-5xl lg:text-[50px] font-bold uppercase tracking-tight leading-[1.08]">
            Performance begins with <span className="text-[#ef781b]">understanding.</span>
          </h2>

          <p className="text-[#4a535c] text-[15px] sm:text-[16px] leading-[1.65]">
            A practical engineering methodology designed to frame your next turnaround, informed by decades of operational experience in refractories, production and metallurgical quality.
          </p>

          <div className="w-full flex flex-col pt-2">
            <div className="border-t border-[#ded9d0] py-5 flex gap-4 items-start w-full">
              <span className="text-[#ef781b] font-mono text-[15px] font-bold w-8 shrink-0">01</span>
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-[#12171a] text-[20px] font-bold uppercase">Understand the application</h3>
                <p className="text-[#555e69] text-[14px] leading-relaxed">Start with the furnace metallurgy, chemical attack profile, thermal cycling, and mechanical loads.</p>
              </div>
            </div>

            <div className="border-t border-[#ded9d0] py-5 flex gap-4 items-start w-full">
              <span className="text-[#ef781b] font-mono text-[15px] font-bold w-8 shrink-0">02</span>
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-[#12171a] text-[20px] font-bold uppercase">Connect material and process</h3>
                <p className="text-[#555e69] text-[14px] leading-relaxed">Bring refractory formulation together with practical plant realities to optimize cost per ton.</p>
              </div>
            </div>

            <div className="border-t border-[#ded9d0] py-5 flex gap-4 items-start w-full">
              <span className="text-[#ef781b] font-mono text-[15px] font-bold w-8 shrink-0">03</span>
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-[#12171a] text-[20px] font-bold uppercase">Keep quality in focus</h3>
                <p className="text-[#555e69] text-[14px] leading-relaxed">Maintain strict ASTM/ISO batch verification from raw mineral sourcing through dry out thermocouple validation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LEADERSHIP (SURFACE #1a2126) */}
      <section className="w-full bg-[#1a2126] text-white px-6 sm:px-10 lg:px-[72px] py-20 lg:py-24 flex flex-col gap-14 border-b border-[#2f3942]" id="leadership">
        <div className="flex items-center gap-2.5">
          <div className="w-[7px] h-[7px] bg-[#ef781b] shrink-0" />
          <p className="font-mono font-semibold text-[#ef781b] text-[12px] tracking-[1.4px] uppercase">
            07 / Leadership
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[52px] font-bold uppercase tracking-tight leading-[1.08] max-w-[650px]">
            Deep expertise.<br />A <span className="text-[#ef781b]">shared direction.</span>
          </h2>
          <div className="max-w-[420px] flex flex-col gap-2">
            <p className="font-mono font-semibold text-[#ef781b] text-[12px] tracking-[1.3px] uppercase">
              BOARD MEMBERS &amp; LEADERSHIP
            </p>
            <p className="text-[#b8c0c8] text-[15px] sm:text-[16px] leading-[1.6]">
              Meet the leadership shaping Adithya Power across refractories, research, production, and quality.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Leader 1 */}
          <div className="bg-[#222a31] border border-[#2f3942] p-5 group transition-all duration-300 shadow-md hover:border-[#ef781b]/60">
            <div className="w-full aspect-square bg-[#12171a] overflow-hidden relative border border-[#2f3942] mb-4">
              <img src="./assets/leaders/dk-singh.png" alt="D.K. SINGH" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-white text-[24px] font-bold uppercase tracking-tight group-hover:text-[#ef781b] transition-colors">D.K. SINGH</h3>
            <p className="font-mono text-[#ef781b] text-[13px] font-medium tracking-wide uppercase">Founder &amp; MD</p>
          </div>

          {/* Leader 2 */}
          <div className="bg-[#222a31] border border-[#2f3942] p-5 group transition-all duration-300 shadow-md hover:border-[#ef781b]/60">
            <div className="w-full aspect-square bg-[#12171a] overflow-hidden relative border border-[#2f3942] mb-4">
              <img src="./assets/leaders/sarang-deshmukh.png" alt="SARANG DESHMUKH" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-white text-[24px] font-bold uppercase tracking-tight group-hover:text-[#ef781b] transition-colors">SARANG DESHMUKH</h3>
            <p className="font-mono text-[#ef781b] text-[13px] font-medium tracking-wide uppercase">Co-Founder &amp; Head of PAS</p>
          </div>

          {/* Leader 3 */}
          <div className="bg-[#222a31] border border-[#2f3942] p-5 group transition-all duration-300 shadow-md hover:border-[#ef781b]/60">
            <div className="w-full aspect-square bg-[#12171a] overflow-hidden relative border border-[#2f3942] mb-4">
              <img src="./assets/leaders/vineet-singh.png" alt="VINEET SINGH" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-white text-[24px] font-bold uppercase tracking-tight group-hover:text-[#ef781b] transition-colors">VINEET SINGH</h3>
            <p className="font-mono text-[#ef781b] text-[13px] font-medium tracking-wide uppercase">CEO</p>
          </div>

          {/* Leader 4 */}
          <div className="bg-[#222a31] border border-[#2f3942] p-5 group transition-all duration-300 shadow-md hover:border-[#ef781b]/60">
            <div className="w-full aspect-square bg-[#12171a] overflow-hidden relative border border-[#2f3942] mb-4">
              <img src="./assets/leaders/np-singh.png" alt="N P SINGH" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-white text-[24px] font-bold uppercase tracking-tight group-hover:text-[#ef781b] transition-colors">N P SINGH</h3>
            <p className="font-mono text-[#ef781b] text-[13px] font-medium tracking-wide uppercase">President - Quality &amp; Customer Service</p>
          </div>

          {/* Leader 5 */}
          <div className="bg-[#222a31] border border-[#2f3942] p-5 group transition-all duration-300 shadow-md hover:border-[#ef781b]/60">
            <div className="w-full aspect-square bg-[#12171a] overflow-hidden relative border border-[#2f3942] mb-4">
              <img src="./assets/leaders/gaurang-shah.png" alt="GAURANG SHAH" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-white text-[24px] font-bold uppercase tracking-tight group-hover:text-[#ef781b] transition-colors">GAURANG SHAH</h3>
            <p className="font-mono text-[#ef781b] text-[13px] font-medium tracking-wide uppercase">Regional Director (West India)</p>
          </div>

          {/* Leader 6 */}
          <div className="bg-[#222a31] border border-[#2f3942] p-5 group transition-all duration-300 shadow-md hover:border-[#ef781b]/60">
            <div className="w-full aspect-square bg-[#12171a] overflow-hidden relative border border-[#2f3942] mb-4">
              <img src="./assets/leaders/prashant-g.png" alt="PRASHANT G" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-white text-[24px] font-bold uppercase tracking-tight group-hover:text-[#ef781b] transition-colors">PRASHANT G</h3>
            <p className="font-mono text-[#ef781b] text-[13px] font-medium tracking-wide uppercase">R&amp;D &amp; Plant Head</p>
          </div>
        </div>

        <div className="w-full h-px bg-[#2f3942]" />

        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px]">
          <p className="text-[#b8c0c8]">Material expertise. International perspectives. Hands-on industry experience.</p>
          <p className="text-[#ef781b] font-mono text-[12px] font-semibold tracking-wider uppercase">ADITHYA POWER LEADERSHIP</p>
        </div>
      </section>

      {/* 10. CONTACT US (BASE #12171a) */}
      <section className="w-full bg-[#12171a] text-white px-6 sm:px-10 lg:px-[72px] py-20 lg:py-24 border-t border-[#2f3942]" id="contact">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-[7px] h-[7px] bg-[#ef781b] shrink-0" />
          <p className="font-mono font-semibold text-[#ef781b] text-[12px] tracking-[1.4px] uppercase">
            08 / Contact us
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[52px] font-bold uppercase tracking-tight leading-[1.08] mb-3">
            Your questions <span className="text-[#ef781b]">matter to us.</span>
          </h2>
          <p className="text-[#b8c0c8] text-[16px] sm:text-[18px] max-w-[720px] leading-relaxed">
            Choose the relevant enquiry form below, and our engineering team will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 bg-[#222a31] border border-[#2f3942] shadow-2xl p-6 sm:p-10">
            <div className="flex border-b border-[#2f3942] mb-8">
              <button 
                type="button" 
                onClick={() => setActiveTab('general')}
                className={`pb-3 px-2 mr-8 font-mono font-bold text-[13px] tracking-wider uppercase transition-colors ${activeTab === 'general' ? 'text-white border-b-2 border-[#ef781b]' : 'text-[#78828c] hover:text-white border-b-2 border-transparent'}`}
              >
                GENERAL ENQUIRIES
              </button>
              <button 
                type="button" 
                onClick={() => setActiveTab('product')}
                className={`pb-3 px-2 font-mono font-bold text-[13px] tracking-wider uppercase transition-colors ${activeTab === 'product' ? 'text-white border-b-2 border-[#ef781b]' : 'text-[#78828c] hover:text-white border-b-2 border-transparent'}`}
              >
                PRODUCT ENQUIRIES
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-[13px] font-medium text-[#cfd3db] mb-2">First Name*</label>
                  <input type="text" id="firstName" required placeholder="First Name" className="w-full px-4 py-3 bg-[#1a2126] border border-[#2f3942] text-white text-[14px] rounded-none focus:outline-none focus:border-[#ef781b] transition-all" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[13px] font-medium text-[#cfd3db] mb-2">Last Name*</label>
                  <input type="text" id="lastName" required placeholder="Last Name" className="w-full px-4 py-3 bg-[#1a2126] border border-[#2f3942] text-white text-[14px] rounded-none focus:outline-none focus:border-[#ef781b] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="emailAddr" className="block text-[13px] font-medium text-[#cfd3db] mb-2">Email Address*</label>
                  <input type="email" id="emailAddr" required placeholder="name@domain.com" className="w-full px-4 py-3 bg-[#1a2126] border border-[#2f3942] text-white text-[14px] rounded-none focus:outline-none focus:border-[#ef781b] transition-all" />
                </div>
                <div>
                  <label htmlFor="mobileNo" className="block text-[13px] font-medium text-[#cfd3db] mb-2">Mobile No*</label>
                  <input type="tel" id="mobileNo" required placeholder="+91 00000 00000" className="w-full px-4 py-3 bg-[#1a2126] border border-[#2f3942] text-white text-[14px] rounded-none focus:outline-none focus:border-[#ef781b] transition-all" />
                </div>
              </div>

              <div>
                <label htmlFor="messageText" className="block text-[13px] font-medium text-[#cfd3db] mb-2">Message*</label>
                <textarea id="messageText" rows={5} required placeholder="How can we assist your furnace, plant, or refractory requirements?" className="w-full px-4 py-3 bg-[#1a2126] border border-[#2f3942] text-white text-[14px] rounded-none focus:outline-none focus:border-[#ef781b] transition-all resize-none" />
              </div>

              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="relative overflow-hidden bg-[#ef781b] text-white font-semibold text-[14px] uppercase tracking-wide px-8 py-4 inline-flex items-center gap-3 transition-all shadow-xl group"
                >
                  <span className="absolute inset-0 w-full h-full bg-[#ff8f3a] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out origin-left" />
                  <span className="relative z-10">{isSubmitting ? 'Submitting...' : submitted ? 'Enquiry Received ✓' : 'Submit Enquiry'}</span>
                  <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M4 10h12M11 5l5 5-5 5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 bg-[#222a31] border border-[#2f3942] text-white p-8 sm:p-12 shadow-2xl flex flex-col justify-between min-h-[500px]">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight mb-8">
                Get In Touch
              </h3>
              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 text-[#ef781b]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="text-[15px] sm:text-[16px] text-[#cfd3db] leading-[1.6]">
                    Narang Tower, 4th Floor, Office No. 2 Palm Road, Civil Lines, Nagpur - 440001
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shrink-0 text-[#ef781b]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <a href="mailto:admin@adithyapower.in" className="text-[15px] sm:text-[16px] text-[#cfd3db] hover:text-[#ef781b] transition-colors underline-offset-4 hover:underline">
                    admin@adithyapower.in
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="shrink-0 text-[#ef781b]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <a href="tel:+9107122554468" className="text-[15px] sm:text-[16px] text-[#cfd3db] hover:text-[#ef781b] transition-colors font-mono">
                    +91 0712-2554468
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#2f3942] text-[13px] text-[#b8c0c8] leading-relaxed">
              Registered corporate headquarters for Adithya Power Refractories &amp; Insulation. Servicing domestic and export industrial contracts across Asia Pacific &amp; Europe.
            </div>
          </div>
        </div>
      </section>

      {/* 11. GLOBAL FOOTER (BASE #12171a) */}
      <footer className="w-full bg-[#12171a] text-[#b8c0c8] px-6 sm:px-10 lg:px-[72px] py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] border-t border-[#263038]">
        <p>&copy; 2026 Adithya Power. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <div className="w-[6px] h-[6px] bg-[#ef781b]" />
          <span className="font-mono font-semibold text-[12px] tracking-[1.2px] text-white uppercase">ADITHYA POWER</span>
        </div>
      </footer>

    </div>
  );
};

export default AdithyaPowerHomepage;
