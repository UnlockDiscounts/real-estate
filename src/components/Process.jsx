
const Process = () => {
  const steps = [
    { number: 1, title: 'Consultation', text: 'We start with understanding your needs and preferences.' },
    { number: 2, title: 'Property Search', text: 'Our experts find properties that match your criteria.' },
    { number: 3, title: 'Site Visits', text: 'Schedule tours of your shortlisted properties.' },
    { number: 4, title: 'Closing Deal', text: 'We handle all paperwork and finalize your transaction.' },
  ];

  return (
    <section className="bg-[background: #60A5FA;
] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 relative group text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg mb-8 transition-transform group-hover:scale-110">
                    {step.number}
                  </div>
                  {/* Dotted Arrow */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-16 w-[350%] border-t-2 border-dotted border-blue-300 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-gray-300 rotate-45" />
                    </div>
                  )}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-800">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
