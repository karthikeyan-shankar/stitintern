import React from "react";
import Logo from "./Logo";
import { Mail, Phone, MapPin, ExternalLink, Calendar, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-slate-400 mb-6 max-w-sm">
              Your one-stop multi-brand destination for top-tier desktop computers, laptops, servers, enterprise network solutions, G Suite email management, and expert repair services in Karur.
            </p>
            <div className="space-y-3">
              <a
                href="tel:9894740202"
                className="flex items-center gap-3 hover:text-blue-400 transition-colors text-sm group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-500 group-hover:bg-blue-900/20">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 9894740202</span>
              </a>
              <a
                href="mailto:9894740202.surya@gmail.com"
                className="flex items-center gap-3 hover:text-blue-400 transition-colors text-sm group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-500 group-hover:bg-blue-900/20">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all">9894740202.surya@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-500 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="leading-relaxed">
                  438, Vaiyapuri Nagar, 2nd Cross, 7/51A, Anna Colony, Kongu Nagar, Vengamedu, Karur - 639002, India
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wider">
              OUR OFFERINGS
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Computers & Laptops
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Printers & Consumables
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Networking Products
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Firewalls & Security
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Domain & Gsuite Support
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Service & Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* BNI & Location */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wider">
              TRUSTED & VERIFIED
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 border border-slate-850 rounded-xl">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1.5 text-red-500">
                  <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-black mr-1">
                    BNI
                  </span>
                  Proud Member
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Active member of BNI Karur, building quality business relationships through commitment and trust.
                </p>
              </div>
              
              <a
                href="https://maps.google.com/?q=438,+VAIYAPURI+NAGAR,+2ND+CROSS,+Anna+Colony,+Kongu+Nagar,+Vengamedu,+Karur,+639002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 border border-blue-500/20 px-3.5 py-2 rounded-lg"
              >
                <span>Find us on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Digital Network. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for <span className="text-white font-semibold">digitnt.com</span> in Karur
          </p>
        </div>
      </div>
    </footer>
  );
}
