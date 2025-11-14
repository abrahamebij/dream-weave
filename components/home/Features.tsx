export const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Why DreamWeave?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              🎨
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Visualization</h3>
            <p className="text-white/70">Advanced AI transforms your dream descriptions into stunning visual representations</p>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              🔗
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Blockchain Storage</h3>
            <p className="text-white/70">Your dreams are permanently stored on the blockchain, creating an immutable dream journal</p>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-pink-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              🧠
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Dream Analysis</h3>
            <p className="text-white/70">Get deep insights and interpretations of your dreams powered by advanced AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};