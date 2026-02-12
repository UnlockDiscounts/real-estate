
import React from 'react';
import ReactDOM from 'react-dom/client';


// --- Sub-Component: TestimonialCard ---
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col min-w-[85vw] md:min-w-0 w-full flex-shrink-0 snap-center">
      {/* Speech Bubble Container */}
      <div className="relative bg-[#2a5ca8] text-white p-7 md:p-8 rounded-[2.5rem] flex flex-col justify-between shadow-lg h-[320px] md:h-[360px]">
   <div>
          {/* Headline */}
          <h3 className="text-lg md:text-xl font-bold mb-4 leading-tight tracking-tight">
            {testimonial.headline}
          </h3>
          
          {/* Content Body */}
          <p className="text-blue-50 text-[14px] md:text-[15px] leading-relaxed opacity-90 font-medium line-clamp-6">
            {testimonial.content}
          </p>
        </div>
        
        {/* Name at bottom right */}
        <div className="mt-4 self-end font-bold text-sm md:text-base">
          {testimonial.name}
        </div>

        {/* Custom Tail SVG - Scoop style */}
        <div className="absolute -bottom-8 left-8 w-12 h-12 pointer-events-none">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-[#2a5ca8] fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0 C 0 30, 30 30, 30 80 C 30 30, 60 30, 60 0 L 0 0 Z" />
          </svg>
        </div>
      </div>

      {/* Avatar Section - Overlapping the card */}
      <div className="ml-8 -mt-10 relative z-10">
        <div className="inline-block p-1 bg-white rounded-full shadow-2xl">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

