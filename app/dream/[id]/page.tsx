'use client';

import { useParams, useRouter } from 'next/navigation';

const dummyDream = {
  id: '1',
  title: 'Cosmic Garden',
  description: 'I dreamed of floating through a cosmic garden where flowers sang melodies of starlight and the trees whispered secrets of the universe.',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
  interpretation: 'This dream reflects a deep connection to nature and cosmic consciousness. The floating sensation suggests freedom from earthly constraints, while the singing flowers represent harmony between the natural and supernatural realms.',
  createdAt: '2024-01-15',
  wallet: '0x45fe...120c'
};

const DreamDetail = () => {
  const params = useParams();
  const router = useRouter();
  const dreamId = params.id;

  return (
    <main className="relative z-10 min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-8 text-white/70 hover:text-white transition-colors flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to dreams</span>
        </button>
        
        <div className="bg-dream-glass-dark rounded-3xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-4">{dummyDream.title}</h1>
                <p className="text-white/80 leading-relaxed">{dummyDream.description}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Interpretation</h3>
                <p className="text-white/70 leading-relaxed">{dummyDream.interpretation}</p>
              </div>
              
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Created: {dummyDream.createdAt}</span>
                <span>{dummyDream.wallet}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/60">Stored on blockchain</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl overflow-hidden">
                <img
                  src={dummyDream.image}
                  alt={dummyDream.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DreamDetail;