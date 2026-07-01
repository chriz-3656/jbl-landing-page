"use client";

import Experience from "@/components/Experience";
import { motion, Variants } from "framer-motion";
import { ArrowDown, Battery, Headphones, Speaker, Volume2, Shield, Settings, BatteryMedium, Plus, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <main className="main-container relative w-full bg-pure-black text-soft-white overflow-hidden">
      
      {/* Floating Source Code Button */}
      <a 
        href="https://github.com/chriz-3656/jbl-landing-page" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-6 right-6 md:top-10 md:right-12 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 shadow-lg text-sm font-semibold"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <span className="hidden sm:inline">Source Code</span>
      </a>

      {/* Cinematic Background Layer */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(80,80,90,0.4)_0%,_rgba(0,0,0,1)_60%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      </div>

      <Experience />

      {/* Section 1: Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          className="flex flex-col items-center mt-20"
        >
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-4 text-gradient drop-shadow-2xl">
            JBL TUNE 720BT
          </h1>
          <p className="text-lg md:text-2xl font-light text-metallic-gray max-w-2xl">
            Pure Bass. Zero Noise. Premium Luxury.
          </p>
          <button className="mt-10 px-8 py-3 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Pre-order Now
          </button>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* Section 2: Intro */}
      <section className="relative h-screen flex items-center z-20 px-8 md:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariant}
          className="max-w-lg"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Designed for the Senses.</h2>
          <p className="text-base md:text-lg text-warm-silver leading-relaxed font-light">
            Every curve and material is meticulously crafted to deliver a sensation that goes beyond hearing. Feel the deep, resonant bass and the premium touch of luxury in every detail.
          </p>
        </motion.div>
      </section>

      {/* Section 3: Premium Materials */}
      <section className="relative h-screen flex justify-end items-center z-20 px-8 md:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariant}
          className="max-w-lg text-right"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cloud-like Comfort.</h2>
          <p className="text-base md:text-lg text-warm-silver leading-relaxed font-light">
            Ultra-soft ear cushions made from memory foam wrap your ears in an acoustic seal. Engineered to be worn all day without fatigue.
          </p>
        </motion.div>
      </section>

      {/* Section 4: Spatial Audio */}
      <section className="relative h-screen flex items-center z-20 px-8 md:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariant}
          className="max-w-lg"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">JBL Pure Bass Sound.</h2>
          <p className="text-base md:text-lg text-warm-silver leading-relaxed font-light">
            For over 75 years, JBL has engineered the precise, impressive sound found in big venues around the world. These headphones reproduce that same JBL sound, punching out bass that’s both deep and powerful.
          </p>
        </motion.div>
      </section>

      {/* Section 5: Noise Cancellation */}
      <section className="relative h-screen flex justify-end items-center z-20 px-8 md:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariant}
          className="max-w-lg text-right"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hear the Silence.</h2>
          <p className="text-base md:text-lg text-warm-silver leading-relaxed font-light">
            Advanced passive noise cancellation isolates you from the world. Tune out the distractions and tune in to what matters most. Pure, unadulterated audio.
          </p>
        </motion.div>
      </section>

      {/* Section 6: Battery & Tech */}
      <section className="relative py-24 flex justify-center items-center z-20 px-8 md:px-24">
        <div className="glassmorphism p-8 md:p-12 rounded-2xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant} className="flex flex-col items-center">
             <BatteryMedium size={40} className="mb-4 text-jbl-orange" strokeWidth={1.5} />
             <h3 className="text-2xl font-bold mb-2">76 Hours</h3>
             <p className="text-sm text-warm-silver font-light">Unstoppable battery life</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant} transition={{ delay: 0.2 }} className="flex flex-col items-center">
             <Volume2 size={40} className="mb-4 text-jbl-orange" strokeWidth={1.5} />
             <h3 className="text-2xl font-bold mb-2">BT 5.3</h3>
             <p className="text-sm text-warm-silver font-light">Seamless audio streaming</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant} transition={{ delay: 0.4 }} className="flex flex-col items-center">
             <Headphones size={40} className="mb-4 text-jbl-orange" strokeWidth={1.5} />
             <h3 className="text-2xl font-bold mb-2">Multipoint</h3>
             <p className="text-sm text-warm-silver font-light">Switch between devices</p>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Gallery & Lifestyle */}
      <section className="relative z-20 px-8 md:px-24 py-16 bg-black/40">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant}
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
          >
            A Closer Look
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }} viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden group"
            >
              <Image src="/images/product_gallery_macro_1782875907924.jpg" alt="Macro detail" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-bold">Premium Materials</h3>
                <p className="text-sm text-warm-silver">Memory foam meets matte finish.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } }} viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden group"
            >
              <Image src="/images/lifestyle_headphone_1782875890559.jpg" alt="Lifestyle" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-bold">Immersive Experience</h3>
                <p className="text-sm text-warm-silver">Designed for your daily journey.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Technical Specs */}
      <section className="relative z-20 px-8 md:px-24 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant} className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Specifications</h2>
          <div className="space-y-4">
            {[
              { label: "Driver size", value: "40 mm / 1.57\" Dynamic driver" },
              { label: "Power supply", value: "5 V 1 A" },
              { label: "Weight", value: "220 g / 0.485 lbs" },
              { label: "Battery type", value: "Lithium-ion battery (3.7V / 500 mAh)" },
              { label: "Charging time", value: "2 hrs from empty" },
              { label: "Music playtime with BT on", value: "up to 76 hrs" },
              { label: "Frequency response", value: "20 Hz – 20 kHz" }
            ].map((spec, i) => (
              <div key={i} className="flex justify-between border-b border-white/10 pb-3 text-sm md:text-base">
                <span className="text-metallic-gray">{spec.label}</span>
                <span className="text-white font-medium text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 9: Reviews */}
      <section className="relative z-20 px-8 md:px-24 py-16 bg-deep-charcoal">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant} className="text-3xl md:text-4xl font-bold mb-10 text-center">
          What Listeners Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Alex M.", text: "The bass is absolutely phenomenal. Better than headphones twice the price." },
            { name: "Sarah J.", text: "I wear these for 8 hours a day while working. Unbelievably comfortable." },
            { name: "David K.", text: "The battery life is almost magical. I charge it maybe once a month." }
          ].map((review, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant} transition={{ delay: i * 0.15 }} className="glassmorphism p-6 rounded-xl">
              <div className="flex text-jbl-orange mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-warm-silver mb-4 text-sm italic">"{review.text}"</p>
              <p className="font-semibold text-sm">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section className="relative z-20 px-8 md:px-24 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariant} className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "Are they water-resistant?", a: "The JBL Tune 720BT are not officially IPX rated for water resistance, so we recommend keeping them away from heavy rain or water." },
              { q: "Can I use them while charging?", a: "Yes, you can use the included audio cable to listen while they charge, though Bluetooth is disabled during charging." },
              { q: "Do they work with voice assistants?", a: "Yes, they are fully compatible with Siri and Google Assistant via the multi-function button." }
            ].map((faq, i) => (
              <div key={i} className="glassmorphism p-5 rounded-lg group cursor-pointer hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-center">
                  <h4 className="text-base font-semibold">{faq.q}</h4>
                  <Plus size={18} className="text-metallic-gray group-hover:text-white transition-colors" />
                </div>
                <p className="text-warm-silver mt-3 hidden group-hover:block transition-all text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final Call to Action */}
      <section className="relative py-24 flex flex-col justify-center items-center text-center z-20 bg-gradient-to-t from-black to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Ready to Elevate?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-3 rounded-full bg-jbl-orange text-white font-bold hover:bg-[#ff7a33] hover:scale-105 transition-all duration-300 shadow-lg shadow-jbl-orange/20">
              Buy Now - $79.95
            </button>
            <button className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors duration-300">
              Compare Models
            </button>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-20 border-t border-white/10 bg-black pt-12 pb-6 px-8 md:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">JBL</h3>
            <p className="text-metallic-gray text-xs leading-relaxed max-w-[200px]">Dare to listen. Premium audio products designed to elevate your everyday sound experience.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white">Products</h4>
            <ul className="space-y-2 text-metallic-gray text-xs">
              <li><a href="#" className="hover:text-jbl-orange transition-colors">Headphones</a></li>
              <li><a href="#" className="hover:text-jbl-orange transition-colors">Earbuds</a></li>
              <li><a href="#" className="hover:text-jbl-orange transition-colors">Speakers</a></li>
              <li><a href="#" className="hover:text-jbl-orange transition-colors">Gaming</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white">Support</h4>
            <ul className="space-y-2 text-metallic-gray text-xs">
              <li><a href="#" className="hover:text-jbl-orange transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-jbl-orange transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-jbl-orange transition-colors">Product Support</a></li>
              <li><a href="#" className="hover:text-jbl-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-white">Newsletter</h4>
            <p className="text-metallic-gray text-xs mb-3">Subscribe for the latest drops and exclusive offers.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-l-md px-3 py-1.5 w-full focus:outline-none focus:border-jbl-orange text-xs" />
              <button className="bg-jbl-orange text-white px-3 py-1.5 rounded-r-md text-xs font-semibold hover:bg-[#ff7a33] transition-colors">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-metallic-gray">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>© 2026 Demo Website for Educational Purposes.</p>
            <p className="text-white/50">Created by Chriz • Email: <a href="mailto:chrizmonsaji@gmail.com" className="hover:text-jbl-orange transition-colors">chrizmonsaji@gmail.com</a> • Instagram: <a href="https://instagram.com/chriz__3656" target="_blank" rel="noopener noreferrer" className="hover:text-jbl-orange transition-colors">@chriz__3656</a></p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
