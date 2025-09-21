import React from 'react';
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div 
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/event.jpeg'), linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 h-full w-full bg-black/20" />
      <div className="flex h-screen px-4 pt-16">
        <div className="container relative z-10 my-auto mx-auto flex flex-col justify-center items-center text-center">
          {/* Date and Location */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 drop-shadow-lg">
            29-31 August @ New York
          </h3>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white max-w-6xl mb-8 leading-tight drop-shadow-2xl">
            AI Conference 2023: Unlocking the Future
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mt-6 mb-12 w-full max-w-4xl leading-relaxed drop-shadow-lg">
            Join us for the most anticipated event of the year - the AI
            Conference 2023!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-12">
            <button className="bg-white text-gray-900 px-12 py-6 rounded-xl font-bold hover:bg-gray-100 transition-colors text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Get Started
            </button>
            <button className="rounded-full bg-white/30 backdrop-blur-sm text-white p-6 hover:bg-white/40 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-110">
              <PlayIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
