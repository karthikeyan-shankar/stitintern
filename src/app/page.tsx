"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteDialog from "@/components/QuoteDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Laptop,
  Printer,
  Network,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Users,
  Award,
  ChevronRight,
  Check,
  Server,
  MailQuestion,
  Wrench,
  ThumbsUp,
  Star,
  ExternalLink,
} from "lucide-react";

const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInterest, setQuoteInterest] = useState("");

  const handleOpenQuote = (interestCategory?: string) => {
    if (interestCategory) {
      setQuoteInterest(interestCategory);
    }
    setIsQuoteOpen(true);
  };

  // Static product list categorized
  const productCategories = {
    computers: [
      {
        name: "Premium Laptops",
        brand: "Apple | HP | Dell | Asus | Lenovo",
        desc: "High-performance enterprise & creator laptops with professional support.",
        features: ["Official Warranties", "Pre-configured OS", "Authorized Repairs"],
      },
      {
        name: "Enterprise Desktops & Workstations",
        brand: "HP | Dell | Lenovo | Custom Builds",
        desc: "Configured specifically for textile offices, accounting hubs, and developers.",
        features: ["Intel Core / Ryzen", "High reliability", "Rapid replacement parts"],
      },
      {
        name: "Business Servers & Storage",
        brand: "Dell PowerEdge | HPE ProLiant | Lenovo",
        desc: "Local server setups for databases, shared networks, and file systems.",
        features: ["Xeon/EPYC processors", "RAID configurations", "Server rack accessories"],
      },
    ],
    printers: [
      {
        name: "Office Laser & Inkjet Printers",
        brand: "HP | Canon | Epson | Brother",
        desc: "All-in-one printer setups perfect for textile invoice printing and corporate use.",
        features: ["Wireless connectivity", "Duplex printing", "Heavy duty cycle"],
      },
      {
        name: "Genuine Ink & Toner Cartridges",
        brand: "HP | Dell | Epson | Canon Spares",
        desc: "Authorized consumables ensuring long life and sharp contrast for all prints.",
        features: ["100% Genuine Toners", "Bulk delivery available", "Ink refill services"],
      },
      {
        name: "Printer Spares & Services",
        brand: "Multiple Brands",
        desc: "Repair services for fuser assemblies, paper rollers, and carriage belts.",
        features: ["Original spare parts", "Same-day servicing", "Cartridge replacement"],
      },
    ],
    networking: [
      {
        name: "Managed Switches & Routers",
        brand: "Cisco | Aruba | D-Link | TP-Link",
        desc: "Robust physical networking pipelines for smooth data transmission across divisions.",
        features: ["Gigabit/10G Speeds", "PoE (Power over Ethernet)", "VLAN configuration"],
      },
      {
        name: "Enterprise Firewalls",
        brand: "Sophos | Fortinet | SonicWall",
        desc: "Industrial cyber security setups protecting textile designs and accounting databases.",
        features: ["Intrusion Prevention (IPS)", "VPN for remote staff", "Web filtering"],
      },
      {
        name: "Structured Cabling & Wi-Fi Access Points",
        brand: "Ubiquiti | Aruba Instant On | Ruijie",
        desc: "Seamless, high-coverage Wi-Fi layouts for mills, colleges, and offices.",
        features: ["Structured patch panels", "Mesh Wi-Fi routing", "Network mapping & audits"],
      },
    ],
    accessories: [
      {
        name: "Laptop Power Adapters & Batteries",
        brand: "Apple | HP | Dell | Lenovo | Asus",
        desc: "Genuine replacement power adapters and high-capacity backup batteries.",
        features: ["Voltage surge protection", "Brand warranties", "Correct pin types"],
      },
      {
        name: "Enterprise UPS Systems",
        brand: "APC | Microtek | Luminous",
        desc: "Uninterrupted power systems to protect servers and desktop computers from power cuts.",
        features: ["Backup batteries", "Surge filtering", "Clean sine-wave output"],
      },
      {
        name: "Accessories & Peripherals",
        brand: "Logitech | Dell | HP",
        desc: "Wired & wireless keyboards, ergonomic mice, computer speakers, and cables.",
        features: ["Bulk supply rates", "Premium build quality", "Easy replacement"],
      },
    ],
  };

  return (
    <>
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <section
          id="home"
          className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950"
        >
          {/* Neon Glow Accents */}
          <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Grid background overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Area */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>18+ Years of Trusted Support in Karur</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                  Next-Gen IT Infrastructure &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 glow-text">
                    Multi-Brand Sales
                  </span>
                </h1>

                <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  We supply premium desktops, laptops, servers, printer units, firewalls, and networking accessories. Backed by 18 years of immediate, on-site troubleshooting.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button
                    onClick={() => handleOpenQuote()}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full text-base border-0 shadow-lg shadow-blue-500/25 transition-transform hover:scale-[1.02]"
                  >
                    Request Callback
                  </Button>
                  <a
                    href="#products"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 font-semibold px-8 py-3 rounded-full text-base transition-all"
                  >
                    <span>Explore Products</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Micro highlights */}
                <div className="grid grid-cols-3 gap-4 pt-4 text-left max-w-md mx-auto lg:mx-0 border-t border-slate-900">
                  <div>
                    <h3 className="text-xl font-bold text-white">100%</h3>
                    <p className="text-xs text-slate-400">Genuine Parts</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Instant</h3>
                    <p className="text-xs text-slate-400">On-Site Servicing</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Multi-Brand</h3>
                    <p className="text-xs text-slate-400">Sales & Repairs</p>
                  </div>
                </div>
              </div>

              {/* Graphic / Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-[360px] sm:max-w-[400px]">
                  {/* Decorative glow box */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-lg opacity-40 animate-pulse-slow" />
                  
                  {/* Business Card content */}
                  <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl text-white">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <div>
                        <h4 className="text-sm font-bold text-slate-400">FOUNDER & LEAD ENGINEER</h4>
                        <h3 className="text-xl font-extrabold text-white tracking-tight">Surya</h3>
                      </div>
                      <div className="bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs px-2.5 py-1 rounded-full font-bold">
                        BNI Karur
                      </div>
                    </div>

                    <div className="space-y-4 text-sm text-slate-300">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p>18 Years experience delivering custom business desktop systems.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p>Immediate daily support - solving customer repairs instantly.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p>Ideal Partner for textile factories, educational centers, exports & coaches.</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                      <a
                        href="tel:9894740202"
                        className="flex items-center gap-3 bg-slate-950 hover:bg-slate-850 border border-slate-800 px-4 py-2.5 rounded-xl transition-colors text-sm font-semibold"
                      >
                        <Phone className="w-4 h-4 text-blue-500" />
                        <span>Call Surya: 9894740202</span>
                      </a>
                      <a
                        href="https://wa.me/919894740202"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                      >
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Stats Section */}
        <section className="bg-slate-900 border-y border-slate-850 py-10 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-400">18+</h3>
                <p className="text-sm font-medium text-slate-400 mt-1">Years In Business</p>
              </div>
              <div className="border-l border-slate-800">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-400">1,000+</h3>
                <p className="text-sm font-medium text-slate-400 mt-1">Desktops Delivered Last Year</p>
              </div>
              <div className="border-l border-slate-800">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-400">5,000+</h3>
                <p className="text-sm font-medium text-slate-400 mt-1">Target Customers Support</p>
              </div>
              <div className="border-l border-slate-800">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-400">44+</h3>
                <p className="text-sm font-medium text-slate-400 mt-1">Years Living in Karur</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Brand Showcase */}
        <section className="bg-slate-950 py-12 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
              Supporting Premium Multi-Brand Solutions
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
              {["APPLE", "HP", "DELL", "ASUS", "LENOVO", "ACER"].map((brand) => (
                <span
                  key={brand}
                  className="text-white font-extrabold tracking-[0.2em] text-lg sm:text-xl hover:text-blue-400 transition-colors cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section: About Us */}
        <section id="about" className="py-20 bg-slate-900 border-b border-slate-850 relative">
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Story & Social Links */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>About Digital Network</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  18+ Years of Unwavering Integrity, Punctuality & Local Trust
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  Established in 2008 in Karur, Tamil Nadu, **Digital Network** has grown to become the area's premier hub for computing sales, networking design, and prompt hardware services. Under the leadership of Surya, a computer service support expert who has lived in Karur for 44 years, we prioritize the technical health of local businesses, educational setups, and export units.
                </p>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  We solve regular customer complaints immediately on-site or via secure remote channels. By providing only 100% genuine components, transparent pricing, and strict adherence to timelines, we ensure your operations suffer zero interruption.
                </p>

                {/* Social Connects */}
                <div className="pt-4 space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Connect With Us & Read Reviews
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.google.com/search?q=Digital+Network&ie=utf-8&oe=utf-8&aq=t#mpd=~8285487422315676011/customers/reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-850 border border-slate-800 text-yellow-400 hover:text-yellow-300 transition-colors px-4 py-2.5 rounded-xl text-xs font-semibold"
                    >
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span>Google Reviews</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                    
                    <a
                      href="https://www.facebook.com/jaganhp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-850 border border-slate-800 text-blue-400 hover:text-blue-300 transition-colors px-4 py-2.5 rounded-xl text-xs font-semibold"
                    >
                      <FacebookIcon className="w-4 h-4 text-blue-500" />
                      <span>Facebook</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>

                    <a
                      href="https://x.com/Jagan1583553Hp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-850 border border-slate-800 text-slate-200 hover:text-white transition-colors px-4 py-2.5 rounded-xl text-xs font-semibold"
                    >
                      <TwitterIcon className="w-4 h-4 text-sky-400" />
                      <span>X (Twitter)</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Vision & Ambition Card */}
              <div className="lg:col-span-5">
                <div className="relative">
                  {/* Backdrop glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25" />
                  
                  <div className="relative bg-slate-950 border border-slate-805 rounded-2xl p-6 sm:p-8 space-y-6">
                    <h4 className="text-sm font-bold text-blue-400 tracking-wider uppercase">
                      Our Future Vision
                    </h4>
                    
                    <h3 className="text-xl font-extrabold text-white leading-snug">
                      Expanding into Multi-Brand Showrooms
                    </h3>
                    
                    <p className="text-xs text-slate-405 leading-relaxed">
                      Our burning desire is to establish dedicated Multi-Brand Showrooms in Karur and surrounding districts, offering direct access to authorized computing setups (Apple, HP, Dell, Asus, Lenovo) and enterprise hardware solutions for everyone.
                    </p>

                    <div className="border-t border-slate-900 pt-4 space-y-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-xs text-slate-300">Continuous engineering & skill updates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-xs text-slate-300">Punctuality and timing in corporate installations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-xs text-slate-300">Quality, genuine components with brand warranties</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Product Catalog */}
        <section id="products" className="py-20 bg-slate-950 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-500">
                Product Catalog
              </h2>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                Authorized Hardware & Networking Products
              </h3>
              <p className="text-sm text-slate-400">
                Explore our massive range of premium hardware systems. We provide procurement, setup configuration, and on-site support.
              </p>
            </div>

            <Tabs defaultValue="computers" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="bg-slate-900 border border-slate-800 p-1 rounded-xl flex flex-wrap sm:flex-nowrap gap-1">
                  <TabsTrigger
                    value="computers"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer"
                  >
                    <Laptop className="w-4 h-4 mr-2 inline-block" />
                    Computers & Servers
                  </TabsTrigger>
                  <TabsTrigger
                    value="printers"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer"
                  >
                    <Printer className="w-4 h-4 mr-2 inline-block" />
                    Printers & Ink
                  </TabsTrigger>
                  <TabsTrigger
                    value="networking"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer"
                  >
                    <Network className="w-4 h-4 mr-2 inline-block" />
                    Networking & Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="accessories"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all border-0 cursor-pointer"
                  >
                    <Server className="w-4 h-4 mr-2 inline-block" />
                    Accessories & Peripherals
                  </TabsTrigger>
                </TabsList>
              </div>

              {Object.entries(productCategories).map(([key, items]) => (
                <TabsContent key={key} value={key} className="focus:outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((prod, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1 shadow-lg"
                      >
                        <div className="space-y-4">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-slate-950 text-blue-400 border border-slate-850">
                            {prod.brand}
                          </span>
                          <h4 className="text-lg font-bold text-white pt-1">{prod.name}</h4>
                          <p className="text-sm text-slate-400 leading-relaxed">{prod.desc}</p>

                          <ul className="space-y-2 pt-2">
                            {prod.features.map((feat, fidx) => (
                              <li key={fidx} className="flex items-center gap-2 text-xs text-slate-300">
                                <Check className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6">
                          <Button
                            onClick={() => handleOpenQuote(prod.name)}
                            className="w-full bg-slate-950 hover:bg-slate-850 border border-slate-800 text-slate-200 hover:text-white rounded-xl py-2.5 text-xs font-semibold"
                          >
                            Inquire Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Section 5: Services & Solutions */}
        <section id="services" className="py-20 bg-slate-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-500">
                Services & Repairs
              </h2>
              <h3 className="text-3xl sm:text-4xl font-black text-white">
                Comprehensive Technical Support Solutions
              </h3>
              <p className="text-sm text-slate-400">
                We handle the technical complexities so you can focus on running your business operations smoothly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 space-y-4 hover:border-blue-500/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Multi-Brand Repairs</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deep component level support and testing for laptops, desktops, and printer systems. Original replacement spares.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 space-y-4 hover:border-blue-500/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Network className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Network Engineering</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Routing, switching, Wi-Fi layout coverage, and cabling configurations customized for mills, factories, and college offices.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 space-y-4 hover:border-blue-500/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MailQuestion className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">G Suite & Domain Email</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Domain verification, custom email routing, Google Workspace setup, user permission management, and daily server security.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 space-y-4 hover:border-blue-500/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Clock className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white">Instant On-Site Support</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We solve regular customer complaints instantly on-site. Minimizing business downtime and operations disruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: BNI Network & Trust Pillars */}
        <section id="bni" className="py-20 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[90px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: BNI Details */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>Proud BNI Chapter Member</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Building High-Trust Relationships in Karur
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  As an active member of BNI, Surya is committed to professional business ethics, punctuality, and verified quality standards. We believe in helping our business community thrive through reliable technology infrastructure.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex gap-4 p-4 bg-slate-900 border border-slate-850 rounded-2xl">
                    <Users className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">Ideal Referral Partners</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Textile factory owners, apparel exporters, finance agencies, private educational setups, and vehicle coach builders who require secure networks and reliable computers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-slate-900 border border-slate-850 rounded-2xl">
                    <ThumbsUp className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">Key to Success</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Strict punctuality, transparent pricing, verified premium quality products, continuous engineering skill updates, and immediate service response times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Values grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-900/50 border border-slate-850 rounded-2xl space-y-3">
                  <h4 className="text-lg font-bold text-white">Good Pricing</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Transparent, factory-direct pricing for computer parts, toners, and software licenses without middleman markups.
                  </p>
                </div>
                <div className="p-6 bg-slate-900/50 border border-slate-850 rounded-2xl space-y-3">
                  <h4 className="text-lg font-bold text-white">Good Quality</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Strict sourcing of authorized hardware components (Apple, HP, Dell) with official brand warranty certificates.
                  </p>
                </div>
                <div className="p-6 bg-slate-900/50 border border-slate-850 rounded-2xl space-y-3">
                  <h4 className="text-lg font-bold text-white">Punctuality</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Strict discipline in timelines. We respect your enterprise scheduling to minimize system setup pauses.
                  </p>
                </div>
                <div className="p-6 bg-slate-900/50 border border-slate-850 rounded-2xl space-y-3">
                  <h4 className="text-lg font-bold text-white">Skill Updations</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Continuous learning in software and server engineering to resolve complex firewall and email issues swiftly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Quick Inquiry and Contact Details */}
        <section id="contact" className="py-20 bg-slate-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-blue-500">
                  Get In Touch
                </h2>
                <h3 className="text-3xl font-black text-white">
                  Let's Discuss Your Hardware & Network Requirements
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Call or visit us in Karur. We will audit your current computing systems and deliver clean solutions suited to your industry requirements.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 text-blue-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Call/WhatsApp Us</h4>
                      <p className="text-sm text-slate-350 mt-0.5">+91 9894740202</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 text-blue-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Email Address</h4>
                      <p className="text-sm text-slate-355 mt-0.5 break-all">9894740202.surya@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 text-blue-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Physical Office Address</h4>
                      <p className="text-sm text-slate-350 mt-0.5 leading-relaxed">
                        438, Vaiyapuri Nagar, 2nd Cross, 7/51A, Anna Colony, Kongu Nagar, Vengamedu, Karur - 639002, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Lead Contact Card */}
              <div className="lg:col-span-7 bg-slate-950 border border-slate-850 rounded-2xl p-8 shadow-xl">
                <h4 className="text-lg font-bold text-white mb-2">Request Consultation Callback</h4>
                <p className="text-xs text-slate-400 mb-6">
                  Fill out this quick callback form, and Surya will contact you directly to discuss.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleOpenQuote();
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your Mobile Number"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email Address (Optional)"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your IT setup, hardware purchase, or repair request..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl border-0 shadow-lg shadow-blue-500/20 transition-transform hover:scale-[1.01]"
                  >
                    Open Quote Form
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <QuoteDialog
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}
