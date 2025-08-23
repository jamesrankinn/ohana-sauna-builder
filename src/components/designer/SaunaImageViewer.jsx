import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const saunaImages = {
  default: "https://images.unsplash.com/photo-1586310191562-58a436926343?w=1000&h=1000&fit=crop",
  essential: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1000&h=1000&fit=crop",
  premium: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&h=1000&fit=crop",
  luxury: "https://images.unsplash.com/photo-1614926521770-2023d6c5b4d4?w=1000&h=1000&fit=crop",
  cedar: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&h=1000&fit=crop",
  pine: "https://images.unsplash.com/photo-1593482146727-3ae39f280bce?w=1000&h=1000&fit=crop",
  hemlock: "https://images.unsplash.com/photo-1521783599418-25a25a4f6d86?w=1000&h=1000&fit=crop",
};

export default function SaunaImageViewer({ configuration }) {
  const getImage = () => {
    if (configuration.wood_type && saunaImages[configuration.wood_type]) {
      return saunaImages[configuration.wood_type];
    }
    if (configuration.package_type && saunaImages[configuration.package_type]) {
      return saunaImages[configuration.package_type];
    }
    return saunaImages.default;
  };

  const currentImage = getImage();

  return (
    <div className="w-full h-full bg-slate-200 rounded-2xl shadow-inner overflow-hidden relative">
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={currentImage}
          alt="Custom Sauna Preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-4 text-xs text-white/70 bg-black/40 px-2 py-1 rounded">
        * Images are for representational purposes.
      </div>
    </div>
  );
}