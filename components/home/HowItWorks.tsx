export const HowItWorks = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          How it Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dream-glass rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              ✍️
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
              1
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Describe Your Dream</h3>
            <p className="text-white/70">Write your dream in vivid detail. Rich descriptions help our AI create more accurate visualizations.</p>
          </div>
          
          <div className="bg-dream-glass rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 relative">
            <div className="w-20 h-20 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              🤖
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
              2
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">AI Magic</h3>
            <p className="text-white/70">Advanced AI processes your words and transforms them into stunning, personalized dream imagery.</p>
          </div>
          
          <div className="bg-dream-glass rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 relative">
            <div className="w-20 h-20 bg-linear-to-r from-pink-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              ⛓️
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-linear-to-r from-pink-600 to-blue-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
              3
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Forever Stored</h3>
            <p className="text-white/70">Your dream becomes part of an immutable blockchain record, creating your permanent dream journal.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-dream-glass-dark rounded-full px-6 py-3">
            <span className="text-white/60 text-sm">Ready to start?</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-400 font-semibold">It takes less than 2 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};