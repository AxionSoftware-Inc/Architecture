"use client";

import { useState } from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTelegram, 
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Bu yerda API chaqiruv qilishingiz mumkin
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      
      {/* Background Patterns */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-amber-500/5 blur-[120px]" />
        
        {/* Architectural Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-4">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Arkon Group</h3>
                <p className="text-sm text-gray-400">Premium Qurilish</p>
              </div>
            </div>
            
            <p className="mt-6 text-gray-400 leading-relaxed">
              Biz kelajakni qurish orqali insonlar hayotini yaxshilaymiz. 
              Har bir loyiha — bu yangi standart va estetik uygunlik.
            </p>
            
            {/* Social Media */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-300 mb-4">Ijtimoiy tarmoqlar</p>
              <div className="flex gap-3">
                {[
                  { icon: <FaFacebookF />, color: "bg-blue-600", hover: "hover:bg-blue-700" },
                  { icon: <FaInstagram />, color: "bg-pink-600", hover: "hover:bg-pink-700" },
                  { icon: <FaTelegram />, color: "bg-blue-500", hover: "hover:bg-blue-600" },
                  { icon: <FaYoutube />, color: "bg-red-600", hover: "hover:bg-red-700" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${social.color} ${social.hover} h-10 w-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Sahifalar</h4>
            <ul className="space-y-4">
              {[
                { label: "Bosh Sahifa", href: "#" },
                { label: "Loyihalar", href: "#loyihalar" },
                { label: "Xizmatlar", href: "#xizmatlar" },
                { label: "Kompaniya", href: "#kompaniya" },
                { label: "Yangiliklar", href: "#yangiliklar" },
                { label: "Aloqa", href: "#aloqa" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="h-px w-0 bg-gradient-to-r from-blue-400 to-transparent group-hover:w-6 transition-all duration-300" />
                    {link.label}
                    <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto text-blue-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Xizmatlar</h4>
            <ul className="space-y-4">
              {[
                "Arxitektura Loyihalash",
                "Interyer Dizayn",
                "Qurilish Boshqaruvi",
                "Fasad Yechimlari",
                "Landscape Dizayn",
                "Texnik Ekspertiza",
                "Loyiha Menejmenti",
                "Audit va Konsalting"
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Yangiliklar va Aloqa</h4>
            
            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-gray-400 mb-4">
                Eng songgi loyihalar va yangiliklar haqida xabardor boling
              </p>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email manzilingiz"
                  className="w-full rounded-full bg-gray-800/50 border border-gray-700 px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full p-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                >
                  <FaArrowRight />
                </button>
              </form>
              {subscribed && (
                <div className="mt-3 flex items-center gap-2 text-green-400 text-sm">
                  <FaCheckCircle /> Obuna muvaffaqiyatli amalga oshirildi!
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                  <FaPhoneAlt className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefon</p>
                  <a href="tel:+998901234567" className="text-white font-semibold hover:text-blue-400 transition-colors">
                    +998 90 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                  <FaEnvelope className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@arkon.uz" className="text-white font-semibold hover:text-blue-400 transition-colors">
                    info@arkon.uz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Manzil</p>
                  <p className="text-white font-semibold">
                    Toshkent shahar,<br />
                    Yunusobod tumani
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Arkon Group. Barcha huquqlar himoyalangan.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Innovatsion arxitektura va qurilish yechimlari
            </p>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Maxfiylik siyosati", href: "#" },
              { label: "Foydalanish shartlari", href: "#" },
              { label: "Cookie sozlamalari", href: "#" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-300"
          >
            <span>Yuqoriga qaytish</span>
            <div className="h-8 w-8 rounded-full border border-blue-400 group-hover:bg-blue-400/20 flex items-center justify-center transition-all duration-300">
              <svg
                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </button>
        </div>

        {/* Certificates & Awards */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm mb-6">
            Sertifikatlar va mukofotlar
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { label: "ISO 9001", color: "from-green-500 to-green-600" },
              { label: "ISO 14001", color: "from-blue-500 to-blue-600" },
              { label: "O'zbekiston Qurilish 2024", color: "from-amber-500 to-amber-600" },
              { label: "Arxitektura Innovatsiyasi", color: "from-purple-500 to-purple-600" },
            ].map((cert, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${cert.color} p-0.5`}
              >
                <div className="rounded-lg bg-gray-900 px-4 py-2">
                  <span className="text-sm font-semibold text-white">{cert.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 z-50">
        <div className="flex justify-around items-center h-16">
          {[
            { icon: "🏠", label: "Bosh", href: "#" },
            { icon: "🏗️", label: "Loyihalar", href: "#loyihalar" },
            { icon: "📞", label: "Aloqa", href: "#aloqa" },
            { icon: "📱", label: "Menyu", onClick: () => {/* Mobile menu open logic */} },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={item.onClick}
              className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs mt-1">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}