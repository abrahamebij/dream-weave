'use client';

import { useState } from 'react';
import { Hero } from '@/components/home/Hero';
import { DreamResult } from '@/components/home/DreamResult';
import { GasFeeModal } from '@/components/GasFeeModal';

const App = () => {
  const [dreamText, setDreamText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showGasModal, setShowGasModal] = useState(false);

  const handleVisualizeDream = () => {
    if (!dreamText.trim()) return;
    setShowGasModal(true);
  };

  const handleGasConfirm = async () => {
    setShowGasModal(false);
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsLoading(false);
    setShowResult(true);
  };

  const handleGasCancel = () => {
    setShowGasModal(false);
  };

  return (
    <>
      <main className="relative z-10">
        {!showResult ? (
          <Hero 
            dreamText={dreamText}
            setDreamText={setDreamText}
            onVisualize={handleVisualizeDream}
            isLoading={isLoading}
          />
        ) : (
          <DreamResult dreamText={dreamText} onBack={() => setShowResult(false)} />
        )}
      </main>

      <GasFeeModal 
        isOpen={showGasModal}
        onConfirm={handleGasConfirm}
        onCancel={handleGasCancel}
      />
    </>
  );
};

export default App;