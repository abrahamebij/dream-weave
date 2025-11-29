'use client';

interface HeroProps {
  dreamText: string;
  setDreamText: (text: string) => void;
  onVisualize: () => void;
  isLoading: boolean;
}

export const Hero = ({ dreamText, setDreamText, onVisualize, isLoading }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Describe your dream...
        </h1>
        
        <div className="relative mb-8">
          <textarea
            value={dreamText}
            onChange={(e) => setDreamText(e.target.value)}
            placeholder="I dreamed of floating through a cosmic garden where flowers sang melodies of starlight..."
            className="w-full h-40 p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all"
            disabled={isLoading}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity" />
          
          {dreamText.trim() && (
            <div className="mt-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Estimated Gas Fee:</span>
                <span className="text-purple-400 font-semibold">
                  {dreamText.length > 100 ? '0.002 ETH' : '0.001 ETH'}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-white/70">Network:</span>
                <span className="text-white/60">Somnia Testnet</span>
              </div>
              <div className="mt-3 text-xs text-white/50">
                💡 Longer dreams require slightly more gas for storage
              </div>
            </div>
          )}
        </div>
        
        <button
          onClick={onVisualize}
          disabled={!dreamText.trim() || isLoading}
          className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] relative overflow-hidden group"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Weaving your dream...</span>
            </div>
          ) : (
            <>
              <span className="relative z-10">Visualise Dream</span>
              <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};