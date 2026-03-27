/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, Mail, MapPin, CheckCircle2, Star, Car, Ship, Sparkles, Clock, ShieldCheck, Menu, X, ChevronRight, Droplets, Shield
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <Sparkles className="text-blue-500" />
            <span>RAWAN <span className="text-blue-500">DETAILING</span></span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a>
            <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            <a href="tel:613-298-3754" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-colors flex items-center gap-2">
              <Phone size={16} />
              <span>613-298-3754</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-zinc-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950 pt-24 px-6 md:hidden flex flex-col gap-6 text-lg font-medium">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="border-b border-zinc-800 pb-4">Services</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="border-b border-zinc-800 pb-4">Gallery</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="border-b border-zinc-800 pb-4">How It Works</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="border-b border-zinc-800 pb-4">Contact</a>
          <div className="flex flex-col gap-4 mt-4">
            <a href="tel:613-298-3754" className="bg-blue-600 text-center py-3 rounded-lg flex justify-center items-center gap-2">
              <Phone size={20} /> Call 613-298-3754
            </a>
            <a href="tel:613-314-3953" className="bg-zinc-800 text-center py-3 rounded-lg flex justify-center items-center gap-2">
              <Phone size={20} /> Call 613-314-3953
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80" 
            alt="Luxury car detailing" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-medium mb-6">
              <MapPin size={14} />
              <span>Mobile Service in Ottawa, Canada</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Premium Mobile <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Car & Boat Detailing</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-2xl font-light">
              We come to you – home service. Experience showroom quality without leaving your driveway.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex justify-center items-center gap-2">
                Book Now <ChevronRight size={20} />
              </a>
              <a href="tel:613-298-3754" className="bg-white hover:bg-zinc-200 text-zinc-950 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex justify-center items-center gap-2">
                <Phone size={20} /> Call Now
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-blue-500" size={18} />
                <span>Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-blue-500" size={18} />
                <span>Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-blue-500" size={18} />
                <span>Mobile Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-blue-500" size={18} />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Detailing Services</h2>
            <p className="text-zinc-400 text-lg">Comprehensive care for your vehicles, delivered right to your doorstep.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Exterior */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80" alt="Exterior Detailing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                    <Droplets size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Exterior Detailing</h3>
                </div>
                <p className="text-zinc-400 mb-6 line-clamp-2">Restore your vehicle's shine with our deep wash, clay bar treatment, and premium wax application.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Hand wash & dry</li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Wheel & tire deep clean</li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Paint sealant / wax</li>
                </ul>
                <a href="#contact" className="text-blue-400 font-semibold flex items-center gap-1 hover:text-blue-300 transition-colors">
                  Contact for Quote <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Interior */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80" alt="Interior Detailing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Interior Detailing</h3>
                </div>
                <p className="text-zinc-400 mb-6 line-clamp-2">A complete refresh of your cabin. We vacuum, steam clean, and condition every surface.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Deep vacuuming</li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Leather & upholstery conditioning</li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Odor removal & sanitization</li>
                </ul>
                <a href="#contact" className="text-blue-400 font-semibold flex items-center gap-1 hover:text-blue-300 transition-colors">
                  Contact for Quote <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Full Detail */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605810730434-7631ac76ec81?auto=format&fit=crop&q=80" alt="Full Detail Packages" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                    <Car size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Full Detail Packages</h3>
                </div>
                <p className="text-zinc-400 mb-6 line-clamp-2">The ultimate reset for your vehicle. Combines our premium exterior and interior services.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Complete inside & out cleaning</li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Engine bay detailing (optional)</li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Best value for total restoration</li>
                </ul>
                <a href="#contact" className="text-blue-400 font-semibold flex items-center gap-1 hover:text-blue-300 transition-colors">
                  Contact for Quote <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Boat Detailing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80" alt="Boat Detailing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                    <Ship size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Boat Detailing</h3>
                </div>
                <p className="text-zinc-400 mb-6 line-clamp-2">Specialized marine detailing to protect your investment against water, sun, and oxidation.</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Hull oxidation removal</li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Vinyl seat cleaning & UV protection</li>
                  <li className="flex items-center gap-2 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-blue-500" /> Marine-grade waxing</li>
                </ul>
                <a href="#contact" className="text-blue-400 font-semibold flex items-center gap-1 hover:text-blue-300 transition-colors">
                  Contact for Quote <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose RAWAN</h2>
            <p className="text-zinc-400 text-lg">We bring the detailing studio to your driveway.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Service</h3>
              <p className="text-zinc-400">We come to your home or office. No need to drop off your vehicle or wait in a lobby.</p>
            </div>
            
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">High-Quality Products</h3>
              <p className="text-zinc-400">We use only premium, industry-leading chemicals and tools to ensure a safe and perfect finish.</p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Attention to Detail</h3>
              <p className="text-zinc-400">We don't cut corners. Every crevice, vent, and panel is meticulously cleaned and protected.</p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliable & Professional</h3>
              <p className="text-zinc-400">We show up on time, communicate clearly, and treat your property with the utmost respect.</p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Saves Time & Effort</h3>
              <p className="text-zinc-400">Reclaim your weekend. Let us handle the hard work while you relax at home.</p>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Ship size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Cars & Boats</h3>
              <p className="text-zinc-400">Whether it's your daily driver, a luxury exotic, or your weekend boat, we have the expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-zinc-400 text-lg">Three simple steps to a spotless vehicle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -z-10 -translate-y-1/2"></div>
            
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-[0_0_30px_rgba(37,99,235,0.3)]">1</div>
              <h3 className="text-xl font-bold mb-3">Book Your Service</h3>
              <p className="text-zinc-400">Call us or fill out our simple online form to request a quote and schedule a time.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-[0_0_30px_rgba(37,99,235,0.3)]">2</div>
              <h3 className="text-xl font-bold mb-3">We Come To You</h3>
              <p className="text-zinc-400">Our fully equipped mobile unit arrives at your location in Ottawa, ready to work.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-[0_0_30px_rgba(37,99,235,0.3)]">3</div>
              <h3 className="text-xl font-bold mb-3">Enjoy Your Vehicle</h3>
              <p className="text-zinc-400">Step into a vehicle that looks, feels, and smells like it just rolled off the showroom floor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Before & After</h2>
              <p className="text-zinc-400 text-lg">Real results from our mobile detailing services.</p>
            </div>
            <a href="#contact" className="text-blue-400 font-semibold flex items-center gap-1 hover:text-blue-300 transition-colors">
              Book Your Transformation <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded-xl aspect-video">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Detailing Result" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">Flawless Exterior Finish</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-video">
              <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80" alt="Detailing Result" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">Deep Interior Clean</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-video">
              <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80" alt="Detailing Result" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">Paint Correction</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl aspect-video">
              <img src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80" alt="Detailing Result" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">Wheel & Tire Restoration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-zinc-400 text-lg">Trusted by car and boat owners across Ottawa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <div className="flex gap-1 text-yellow-500 mb-6">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-zinc-300 mb-6 italic">"Incredible service! They came right to my driveway and made my 5-year-old SUV look brand new again. The convenience of mobile detailing is unbeatable."</p>
              <div>
                <p className="font-bold">Michael T.</p>
                <p className="text-sm text-zinc-500">Ottawa, ON</p>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <div className="flex gap-1 text-yellow-500 mb-6">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-zinc-300 mb-6 italic">"RAWAN detailed our boat before the summer season. They removed all the oxidation and the hull shines beautifully. Highly professional and punctual."</p>
              <div>
                <p className="font-bold">Sarah L.</p>
                <p className="text-sm text-zinc-500">Manotick, ON</p>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <div className="flex gap-1 text-yellow-500 mb-6">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-zinc-300 mb-6 italic">"The attention to detail is next level. They managed to get out stains from my seats that I thought were permanent. Will definitely be booking again."</p>
              <div>
                <p className="font-bold">David K.</p>
                <p className="text-sm text-zinc-500">Kanata, ON</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ready for a spotless vehicle?</h2>
            <p className="text-blue-100 text-lg">Limited bookings available this week. Secure your spot now.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="#contact" className="bg-zinc-950 hover:bg-zinc-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Book Your Detail
            </a>
            <a href="tel:613-298-3754" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Your Car Detailed Today</h2>
              <p className="text-zinc-400 text-lg mb-10">
                Fill out the form below to request a quote or schedule your mobile detailing service. We'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 text-blue-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Call or Text Us</h4>
                    <a href="tel:613-298-3754" className="block text-zinc-400 hover:text-blue-400 transition-colors">613-298-3754</a>
                    <a href="tel:613-314-3953" className="block text-zinc-400 hover:text-blue-400 transition-colors">613-314-3953</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 text-blue-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email Us</h4>
                    <a href="mailto:korakgh1979@gmail.com" className="text-zinc-400 hover:text-blue-400 transition-colors">korakgh1979@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0 text-blue-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Service Area</h4>
                    <p className="text-zinc-400">Ottawa, ON and surrounding areas</p>
                    <p className="text-sm text-blue-500 mt-1">We come to your location!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-400">Full Name</label>
                    <input type="text" id="name" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="(613) 555-0123" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email Address</label>
                  <input type="email" id="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-zinc-400">Service Needed</label>
                  <select id="service" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none">
                    <option value="">Select a service...</option>
                    <option value="exterior">Exterior Detailing</option>
                    <option value="interior">Interior Detailing</option>
                    <option value="full">Full Detail Package</option>
                    <option value="boat">Boat Detailing</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-400">Vehicle Details & Message</label>
                  <textarea id="message" rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none" placeholder="Make, model, year, and any specific areas of concern..."></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors mt-4">
                  Send Request
                </button>
                <p className="text-xs text-zinc-500 text-center mt-4">We typically respond within 2 hours during business hours.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
                <Sparkles className="text-blue-500" />
                <span>RAWAN <span className="text-blue-500">DETAILING</span></span>
              </a>
              <p className="text-zinc-400 max-w-sm mb-6">
                Premium mobile car and boat detailing services in Ottawa. We bring the showroom shine directly to your driveway.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-zinc-400 hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="text-zinc-400 hover:text-blue-400 transition-colors">How It Works</a></li>
                <li><a href="#gallery" className="text-zinc-400 hover:text-blue-400 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="text-zinc-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-zinc-400">
                  <Phone size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:613-298-3754" className="block hover:text-blue-400 transition-colors">613-298-3754</a>
                    <a href="tel:613-314-3953" className="block hover:text-blue-400 transition-colors">613-314-3953</a>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-zinc-400">
                  <Mail size={18} className="shrink-0 mt-0.5" />
                  <a href="mailto:korakgh1979@gmail.com" className="hover:text-blue-400 transition-colors">korakgh1979@gmail.com</a>
                </li>
                <li className="flex items-start gap-2 text-zinc-400">
                  <MapPin size={18} className="shrink-0 mt-0.5" />
                  <span>Ottawa, ON</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} RAWAN CAR Detailing. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-zinc-500">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
