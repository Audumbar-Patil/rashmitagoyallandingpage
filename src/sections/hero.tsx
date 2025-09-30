import React from 'react';
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/image/event.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/40 via-pink-600/30 to-red-500/40 animate-gradient-slow z-0"></div>
      
      {/* Additional gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 z-0 animate-pulse-slow"></div>

      {/* Content */}
      <div className="relative z-10 mb-4 flex h-full flex-col justify-center items-center text-center px-8 sm:px-12 md:px-16 my-8 sm:my-12 md:my-16 space-y-12 sm:space-y-16 md:space-y-20">
        
        {/* Enhanced Badge */}
        <div className="mt-4 mb-10 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-white/90 backdrop-blur-md shadow-2xl animate-fadeIn hover:bg-white/20 transition-all duration-300 cursor-pointer">
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse shadow-glow"></span>
          <span className="text-sm sm:text-base font-bold tracking-widest uppercase">Personal Colour Analysis</span>
        </div>

        {/* Enhanced Headline */}
        <h1 className="mt-8 mb-6 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[1.05] tracking-tight animate-fadeIn text-center">
          <span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] animate-float">
            DISCOVER THE POWER OF
          </span>
          <span className="block bg-clip-text text-white bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 drop-shadow-[0_0_45px_rgba(255,75,175,0.9)] animate-text-shimmer mt-4">
            WEARING YOUR TRUE COLOURS
          </span>
        </h1>

        {/* Enhanced Subheadline */}
        {/* Enhanced Subheadline */}
<div className="flex flex-col gap-2">
  {/* Enhanced Subheadline */}
<div className="flex flex-col gap-2">
  <p className="text-white max-w-3xl sm:max-w-4xl text-xl sm:text-2xl md:text-3xl text-white/95 leading-relaxed animate-fadeIn delay-300 backdrop-blur-md bg-white/5 rounded-2xl p-6">
    Colour analysis isn't about trends
  </p>

  <p className="text-white max-w-3xl sm:max-w-4xl text-xl sm:text-2xl md:text-3xl text-white/95 leading-relaxed animate-fadeIn delay-300 backdrop-blur-md bg-white/5 rounded-2xl p-6">
    It's about finding the shades that make people say
  </p>

  <p className="text-white max-w-3xl sm:max-w-4xl text-xl sm:text-2xl md:text-3xl text-white/95 leading-relaxed animate-fadeIn delay-300 backdrop-blur-md bg-white/5 rounded-2xl p-6">
    even when nothing else has changed.
  </p>
</div>

</div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 animate-fadeIn delay-500">
          {/* Enhanced Primary CTA Button - Matching Personal Colour Analysis Style */}
          <button className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-8 py-4 text-white/90 backdrop-blur-md shadow-2xl animate-fadeIn hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-3xl group">
            <span className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse shadow-glow"></span>
            <span className="text-lg font-bold tracking-widest uppercase">Discover Your Colours</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Enhanced Tailwind Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { 
            animation: fadeIn 1.2s ease-out forwards; 
            opacity: 0;
          }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }

          @keyframes textShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .animate-text-shimmer {
            background-size: 200% auto;
            animation: textShimmer 4s linear infinite;
          }

          @keyframes gradientSlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-slow {
            background-size: 400% 400%;
            animation: gradientSlow 15s ease infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes pulseSlow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
          }
          .animate-pulse-slow {
            animation: pulseSlow 8s ease-in-out infinite;
          }

          .shadow-glow {
            box-shadow: 0 0 20px rgba(192, 132, 252, 0.5);
          }
        `}
      </style>
    </div>
  );
}

export default Hero;