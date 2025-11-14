import Link from 'next/link';

export const LandingHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          DreamWeave
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Transform your dreams into stunning visualizations with AI-powered interpretation and blockchain permanence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/app"
            className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            Start Dreaming
          </Link>
          <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};