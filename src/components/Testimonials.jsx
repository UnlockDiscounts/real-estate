import React from 'react';

const Testimonials = () => {
  const data = [
    { name: 'Vikram Seth', quote: 'Handled everything with precision and care.', text: 'Amit Construction listened carefully to our needs and helped us make decisions that felt right, not rushed  Found our dream home in record time.The search filters on Amit construction.', avatar: 'https://picsum.photos/seed/vikram/100/100' },
    { name: 'Anjali Nair', quote: 'Found our dream home in record time.', text: 'The search filters on Amit construction made it so easy to narrow down exactly what we wanted. We went from browsing to a confirmed viewing in less than 48 hours.', avatar: 'https://picsum.photos/seed/anjali/100/100' },
    { name: 'Rohan Mehra', quote: 'Professional, transparent, and reliable.', text: 'Navigating the paperwork was the part I dreaded most, but the team made the entire closing process feel seamless. I always felt like I knew exactly where we stood.', avatar: 'https://picsum.photos/seed/rohan/100/100' },
    { name: 'Sneha Kapoor', quote: 'A stress-free experience from start to finish.', text: 'I highly recommend Amit Construction for their local market insights. Their data gave us the confidence we needed to make a competitive offer without overpaying.', avatar: 'https://picsum.photos/seed/sneha/100/100' },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">


<div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory pb-8 -mb-8 scrollbar-hide gap-6">
      {data.map((item, idx) => (
        <div key={idx} className="flex-none w-[350px] snap-center">
          <div className="relative pt-12">
            <div className="testimonial-bubble bg-[#265BA6] text-white p-8 rounded-[32px] min-h-[300px] flex flex-col justify-between relative shadow-xl">
              <div>
                <h5 className="font-bold text-lg mb-4">"{item.quote}"</h5>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">{item.text}</p>
              </div>
              <p className="text-right font-bold text-sm">{item.name}</p>
            </div>
            <div className="absolute -bottom-20 left-8">
              <img 
                src={item.avatar} 
                alt={item.name} 
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

        <div className="hidden lg:grid grid-cols-4 gap-12">
          {data.map((item, idx) => (
            <div key={idx} className="relative pt-12">
              <div className="testimonial-bubble bg-[#265BA6] text-white p-8 rounded-[32px] min-h-[300px] flex flex-col justify-between relative shadow-xl">
                <div>
                  <h5 className="font-bold text-lg mb-4">"{item.quote}"</h5>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">{item.text}</p>
                </div>
                <p className="text-right font-bold text-sm">{item.name}</p>
                </div>
              <div className="absolute -bottom-10 left-8">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

