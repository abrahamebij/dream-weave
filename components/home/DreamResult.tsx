'use client';

interface DreamResultProps {
  dreamText: string;
  onBack: () => void;
}

export const DreamResult = ({ dreamText, onBack }: DreamResultProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <button
          onClick={onBack}
          className="mb-8 text-white/70 hover:text-white transition-colors flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to dreams</span>
        </button>
        
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Your Dream</h2>
                <p className="text-white/80 leading-relaxed">{dreamText}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Interpretation</h3>
                <p className="text-white/70 leading-relaxed">
                  This dream reflects a deep connection to nature and cosmic consciousness. 
                  The floating sensation suggests freedom from earthly constraints, while the 
                  singing flowers represent harmony between the natural and supernatural realms. 
                  The starlight melodies indicate your subconscious desire for transcendence 
                  and spiritual awakening.
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/60">Saved to the Chain • Just now</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-linear-to-br from-purple-500/30 to-pink-500/30 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop"
                  alt="Dream visualization"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-purple-900/50 to-transparent" />
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                Generated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};