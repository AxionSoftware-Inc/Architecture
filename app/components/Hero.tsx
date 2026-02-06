"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const heroImages = [
  "/hero/1.jpg", // 600x400 formatda rasmlarni joylang
  "/hero/2.jpg",
  "/hero/3.jpg",
  "/hero/4.jpg",
  "/hero/5.jpg",
  "/hero/6.jpg",
];

function Row({
  images,
  reverse = false,
  animate = true,
}: {
  images: string[];
  reverse?: boolean;
  animate?: boolean;
}) {
  const list = useMemo(() => [...images, ...images, ...images], [images]);

  return (
    <div
      className={`flex gap-6 ${animate ? (reverse ? "animate-marquee-reverse" : "animate-marquee") : ""}`}
      aria-hidden="true"
    >
      {list.map((src, i) => (
        <div
          key={i}
          className="relative h-[200px] w-[300px] md:h-[240px] md:w-[360px] flex-shrink-0 
                     overflow-hidden rounded-2xl md:rounded-3xl
                     group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                        z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt="Arxitektura loyihasi"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 300px, 360px"
              quality={75}
              priority={i < 2}
            />
          </div>
          
          {/* Hover efekti uchun overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 z-10" />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40);
    
    // Background slider uchun interval
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      {/* Dynamic background image slider */}
      <div className="absolute inset-0 opacity-20">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Background"
              fill
              className="object-cover scale-110"
              quality={50}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900" />
          </div>
        ))}
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 border border-white/5 rounded-full animate-spin-slow" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 border border-white/5 rounded-full animate-spin-slow-reverse" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </div>

      {/* Scrolling marquee layers */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -left-20 right-0">
          <Row images={heroImages} animate={mounted} />
        </div>
        <div className="absolute top-1/2 -right-20 left-0">
          <Row images={[...heroImages].reverse()} reverse animate={mounted} />
        </div>
        <div className="absolute bottom-1/4 -left-20 right-0">
          <Row images={heroImages.slice(0, 4)} animate={mounted} />
        </div>
      </div>

      {/* Floating elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-amber-400/30 animate-float" />
        <div className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-blue-400/20 animate-float-delayed" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-white/10 animate-float-slow" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Text content */}
          <div className={`transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500/20 to-blue-500/20 
                          px-5 py-3 backdrop-blur-sm border border-white/10 mb-8">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-white/90">
                PREMIUM ARXITEKTURA
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-6">
              <span className="block">KELAJAKNI</span>
              <span className="block relative">
                QURAMIZ
                <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-blue-400 
                               transform scale-x-0 animate-underline-expand" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Innovatsion goyalar, zamonaviy texnologiyalar va mukammal dizayn 
              uygunligi. Har bir loyiha - bu yangi standart.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-amber-600 
                               px-8 py-4 text-white font-semibold tracking-wide transition-all duration-300
                               hover:shadow-2xl hover:shadow-amber-500/30 transform hover:-translate-y-1">
                <span className="relative z-10">LOYIHALARNI KORISH</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 
                              transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm
                               px-8 py-4 text-white font-semibold tracking-wide transition-all duration-300
                               hover:bg-white/20 hover:border-white/30">
                BOGLANISH
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                { value: "18+", label: "YILLIK TAJRIBA" },
                { value: "68", label: "MUVAFFAQIYATLI LOYIHALAR" },
                { value: "100%", label: "QONIQISH KAFOLATI" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`opacity-0 animate-fade-up`}
                  style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-blue-300 
                                bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Featured project */}
          <div className="relative hidden lg:block">
            {/* Floating card */}
            <div className="relative rounded-3xl overflow-hidden group transform transition-all duration-700 
                          hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50">
              {/* Glass morphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl 
                            border border-white/20" />
              
              {/* Main image */}
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/hero/featured.jpg"
                  alt="Skyline Center - Premium biznes markaz"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md 
                                 text-white px-5 py-3 rounded-full border border-white/20">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-semibold tracking-wider">
                      YILNING ENG YAXSHI LOYIHASI
                    </span>
                  </span>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    SKYLINE CENTER
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Innovatsion biznes markaz - Toshkentning yangi ramzi
                  </p>
                  
                  <div className="flex gap-4">
                    <span className="text-sm bg-white/20 backdrop-blur-sm text-white 
                                   px-4 py-2 rounded-full">
                      📍 Toshkent shahar
                    </span>
                    <span className="text-sm bg-amber-500/20 backdrop-blur-sm text-amber-300 
                                   px-4 py-2 rounded-full">
                      ⭐ 5.0 reyting
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements on card */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-blue-400 
                            animate-ping opacity-20" />
            </div>

            {/* Decorative elements around card */}
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full 
                          bg-gradient-to-r from-amber-500/20 to-blue-500/20 blur-3xl" />
            <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 rounded-full 
                          bg-gradient-to-r from-blue-500/20 to-amber-500/20 blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}