"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, MoveRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1128] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="block relative w-48 h-16 hover:opacity-80 transition-opacity">
              <Image 
                src="/assets/logo.png" 
                alt="The Law Office of Osbelia Castillo" 
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm font-normal">
              A Santa Barbara, Oxnard & Ventura professional group of lawyers
              specializing in Personal injury, Vehicular Accidents, Wrongful
              Death and Workers’ Compensation cases.
            </p>
            <div className="flex gap-5 pt-2">
              <a href="https://www.facebook.com/castillolawSB/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] transition-all group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/castillolawsb/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C5A059] transition-all group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-lg font-serif font-bold tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/#about" },
                { name: "Practice Areas", href: "/practice-areas/personal-injury" },
                { name: "Contact", href: "/#contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#C5A059] transition-colors flex items-center gap-2 group">
                    <MoveRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-lg font-serif font-bold tracking-wider">Contact Info</h4>
            <div className="space-y-6">
              <a href="tel:8052837656" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] transition-all">
                  <Phone className="w-5 h-5 text-[#C5A059] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Call Anytime</p>
                  <p className="text-lg font-bold">805-283-7656</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Email Us</p>
                  <p className="text-gray-300">osbelia@castillolawsb.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Our Location</p>
                  <p className="text-gray-300 leading-relaxed">
                    1111 Garden St #100<br />
                    Santa Barbara, CA 93101
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm italic">
            &copy; {currentYear} The Law Office of Osbelia Castillo. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-600">
            <Link href="/" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#C5A059] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
