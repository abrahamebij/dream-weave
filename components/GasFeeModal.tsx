'use client';

interface GasFeeModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const GasFeeModal = ({ isOpen, onConfirm, onCancel }: GasFeeModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-md w-full animate-fade-in">
        <h3 className="text-2xl font-bold text-white mb-4">Gas Fee Required</h3>
        <p className="text-white/80 mb-6">
          To store your dream on the blockchain, you&apos;ll need to pay a small gas fee of approximately <span className="text-purple-400 font-semibold">0.001 ETH</span>.
        </p>
        
        <div className="bg-black/30 rounded-lg p-4 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-white/70">Network:</span>
            <span className="text-white">Somnia Testnet</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-white/70">Estimated Gas:</span>
            <span className="text-purple-400">0.001 ETH</span>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
};