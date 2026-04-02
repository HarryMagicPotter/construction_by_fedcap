import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X, RotateCcw, Volume2, VolumeX } from 'lucide-react';

interface CSCSVideoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CSCSVideoOverlay({ isOpen, onClose }: CSCSVideoOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[150] bg-black flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full h-full flex flex-col">
        {/* Header */}
        <AnimatePresence>
          {showControls && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-10"
            >
              <h2 className="text-white font-bold text-xl tracking-tight">DIGITAL CSCS CARD VIDEOS</h2>
              <button 
                onClick={onClose}
                className="bg-white/10 hover:bg-red-500 text-white p-2 rounded-full transition-colors flex items-center gap-2 px-4"
              >
                <X size={20} />
                <span className="font-bold text-sm uppercase tracking-widest">Close Video</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Player */}
        <div className="flex-1 flex items-center justify-center bg-black relative group">
          <video
            ref={videoRef}
            className="max-w-full max-h-full cursor-pointer"
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
            onEnded={() => setIsPlaying(false)}
            // Use the provided video file
            src="/cscs-exam.mp4"
            onError={(e) => {
              console.error("Video failed to load, using fallback");
              (e.target as HTMLVideoElement).src = "https://www.w3schools.com/html/mov_bbb.mp4";
            }}
          />
          
          {/* Center Play Button Overlay */}
          {!isPlaying && (
            <button 
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-20 h-20 bg-accent-blue/80 hover:bg-accent-blue text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-2xl z-0"
            >
              <Play size={40} fill="currentColor" className="ml-2" />
            </button>
          )}
        </div>

        {/* Controls Bar */}
        <AnimatePresence>
          {showControls && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10"
            >
              {/* Progress Bar */}
              <div className="mb-6 group/progress">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-blue hover:h-2 transition-all"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={togglePlay}
                    className="text-white hover:text-accent-blue transition-colors"
                  >
                    {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
                  </button>
                  
                  <button 
                    onClick={restartVideo}
                    className="text-white hover:text-accent-blue transition-colors"
                  >
                    <RotateCcw size={24} />
                  </button>

                  <button 
                    onClick={toggleMute}
                    className="text-white hover:text-accent-blue transition-colors"
                  >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-white/60 font-mono text-xs uppercase tracking-widest">
                    HS&E Digital Learning Module
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
