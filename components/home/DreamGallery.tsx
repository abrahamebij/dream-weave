'use client';

const dummyDreams = [
  {
    id: 1,
    title: "Cosmic Garden",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    wallet: "0x45fe...120c"
  },
  {
    id: 2,
    title: "Neon Cityscape",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop",
    wallet: "0x7b3a...8f2d"
  },
  {
    id: 3,
    title: "Floating Islands",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    wallet: "0x9c4e...5a1b"
  },
  {
    id: 4,
    title: "Crystal Caves",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop",
    wallet: "0x2d8f...3e7c"
  },
  {
    id: 5,
    title: "Aurora Dreams",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    wallet: "0x6a1c...9b4f"
  },
  {
    id: 6,
    title: "Digital Ocean",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop",
    wallet: "0x8e5d...2c6a"
  }
];

export const DreamGallery = () => {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Dream Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyDreams.map((dream) => (
            <div
              key={dream.id}
              className="group bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dream.image}
                  alt={dream.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{dream.title}</h3>
                <p className="text-white/60 text-sm font-mono">{dream.wallet}</p>
              </div>
              
              <div className="absolute inset-0 bg-linear-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};