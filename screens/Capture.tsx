
import React, { useState, useEffect } from 'react';

interface CaptureProps {
  onBack: () => void;
  onFinish: () => void;
}

const Capture: React.FC<CaptureProps> = ({ onBack, onFinish }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const startCapture = () => {
    setIsRecording(true);
    // Simulate recording duration
    setTimeout(() => {
      onFinish();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col font-sans overflow-hidden">
      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 z-[110] pt-12 pb-6 px-4 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-between">
        <button onClick={onBack} className="size-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md">
          <span className="material-symbols-outlined text-white">close</span>
        </button>
        <div className="flex-1 px-4 text-center">
          <h2 className="text-white text-sm font-medium tracking-tight drop-shadow-md">
            Align your body with the guide and swing
          </h2>
        </div>
        <button className="size-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md">
          <span className="material-symbols-outlined text-white">settings</span>
        </button>
      </div>

      {/* Viewport */}
      <div className="relative flex-1 w-full bg-[#0a0f05] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-60 grayscale-[0.5]" 
             style={{ backgroundImage: `url(https://picsum.photos/seed/range/800/1200)` }}>
        </div>

        {/* AI Tracking Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
          <div className="w-[85%] h-[70%] border-2 border-primary/40 rounded-[120px] flex flex-col items-center justify-start pt-16 relative">
            <div className="size-24 border-2 border-primary rounded-full mb-4"></div>
            <div className="w-1 h-32 bg-primary/30 rounded-full"></div>
            <div className="absolute bottom-12 flex justify-between w-[60%]">
              <div className="size-8 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="size-2 bg-primary rounded-full"></div>
              </div>
              <div className="size-8 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="size-2 bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-[45%] bg-primary px-4 py-1.5 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-black text-xs">check_circle</span>
              <span className="text-black text-[10px] font-bold tracking-widest uppercase">Position Ready</span>
            </div>
          </div>
        </div>

        {/* Side Controls */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[120]">
          <button className="size-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"><span className="material-symbols-outlined">grid_on</span></button>
          <button className="size-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"><span className="material-symbols-outlined">flash_on</span></button>
          <button className="size-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"><span className="material-symbols-outlined">flip_camera_ios</span></button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-[110] pb-10 pt-4 px-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex justify-center mb-8">
          <div className="flex h-11 w-64 items-center rounded-xl bg-white/10 backdrop-blur-xl p-1 border border-white/10">
            <button className="flex-1 h-full bg-white text-black rounded-lg text-sm font-bold">Front View</button>
            <button className="flex-1 h-full text-white/70 rounded-lg text-sm font-medium">Side View</button>
          </div>
        </div>

        <div className="flex items-center justify-between max-w-sm mx-auto">
          <div className="size-14 rounded-lg overflow-hidden border-2 border-white/20 bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/seed/prev/100/100)` }}></div>
          
          <button onClick={startCapture} className="group relative flex items-center justify-center size-24">
            <div className={`absolute inset-0 rounded-full border-4 border-primary ring-4 ring-primary/20 ${isRecording ? 'animate-ping' : ''}`}></div>
            <div className="size-16 rounded-full bg-[#ff3b30] flex items-center justify-center transition-transform active:scale-90">
              <div className={`bg-white transition-all duration-300 ${isRecording ? 'size-6 rounded-[4px]' : 'size-14 rounded-full'}`}></div>
            </div>
          </button>
          
          <button className="size-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Capture;
