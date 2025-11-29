'use client';

import Link from 'next/link';

const userDreams = [
  {
    id: '1',
    title: 'Cosmic Garden',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Digital Ocean',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop',
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'Neon Cityscape',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    createdAt: '2024-01-13'
  }
];

export const UserDreamGallery = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Your Dreams
        </h2>
        
        {userDreams.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userDreams.map((dream) => (
              <Link
                key={dream.id}
                href={`/dream/${dream.id}`}
                className="group bg-dream-glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dream.image}
                    alt={dream.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{dream.title}</h3>
                  <p className="text-white/60 text-sm">{dream.createdAt}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No dreams created yet. Start by describing your first dream above!</p>
          </div>
        )}
      </div>
    </section>
  );
};