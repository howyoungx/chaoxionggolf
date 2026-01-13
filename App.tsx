
import React, { useState, useEffect } from 'react';
import Home from './screens/Home';
import Capture from './screens/Capture';
import Analysis from './screens/Analysis';
import Progress from './screens/Progress';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);

  // Simple hash-based router simulation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Screen;
      if (Object.values(Screen).includes(hash)) {
        setCurrentScreen(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (screen: Screen) => {
    window.location.hash = screen;
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <Home onNavigate={navigateTo} />;
      case Screen.CAPTURE:
        return <Capture onBack={() => navigateTo(Screen.HOME)} onFinish={() => navigateTo(Screen.ANALYSIS)} />;
      case Screen.ANALYSIS:
        return <Analysis onBack={() => navigateTo(Screen.HOME)} onViewStats={() => navigateTo(Screen.STATS)} />;
      case Screen.STATS:
        return <Progress onNavigate={navigateTo} />;
      case Screen.SESSIONS:
        // Reuse home's session list for history view
        return <Home onNavigate={navigateTo} />;
      case Screen.PROFILE:
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative mb-6">
              <div className="size-28 rounded-full bg-surface-dark border-4 border-primary flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/alex/200/200" alt="Profile" className="size-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 size-8 bg-primary rounded-full flex items-center justify-center border-4 border-background-dark">
                <span className="material-symbols-outlined text-background-dark text-sm font-bold">edit</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold">Alex Thompson</h1>
            <p className="text-primary text-sm font-bold mt-1 tracking-widest uppercase">Premium Member</p>
            <p className="text-slate-400 mt-2 text-sm">San Francisco, CA • HCP 14.2</p>
            
            <div className="grid grid-cols-2 gap-4 w-full mt-10">
              <div className="bg-card-dark p-4 rounded-2xl border border-white/5 shadow-xl">
                <p className="text-2xl font-bold tracking-tight">128</p>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Total Swings</p>
              </div>
              <div className="bg-card-dark p-4 rounded-2xl border border-white/5 shadow-xl">
                <p className="text-2xl font-bold tracking-tight">12</p>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Sessions</p>
              </div>
            </div>
            
            <div className="w-full mt-8 space-y-3">
              <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold text-sm flex items-center justify-between px-6 hover:bg-white/10 transition-colors">
                <span className="flex items-center gap-3"><span className="material-symbols-outlined text-slate-400">settings</span> Settings</span>
                <span className="material-symbols-outlined text-slate-600">chevron_right</span>
              </button>
              <button className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-bold text-sm flex items-center justify-between px-6 hover:bg-white/10 transition-colors">
                <span className="flex items-center gap-3"><span className="material-symbols-outlined text-slate-400">help</span> Support</span>
                <span className="material-symbols-outlined text-slate-600">chevron_right</span>
              </button>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-sans max-w-md mx-auto relative overflow-hidden flex flex-col shadow-2xl border-x border-white/5">
      <div className="flex-1 overflow-y-auto pb-32">
        {renderScreen()}
      </div>

      {/* Bottom Navigation Bar */}
      {currentScreen !== Screen.CAPTURE && (
        <div className="fixed bottom-0 max-w-md w-full px-4 pb-8 z-40">
          <nav className="bg-[#1e2614]/95 backdrop-blur-2xl border border-white/10 rounded-[32px] h-20 grid grid-cols-5 items-center relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
            {/* Slot 1: Home */}
            <button 
              onClick={() => navigateTo(Screen.HOME)}
              className={`flex flex-col items-center justify-center transition-all ${currentScreen === Screen.HOME ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentScreen === Screen.HOME ? 'font-variation-fill' : ''}`}>home</span>
              <span className="text-[10px] font-black mt-0.5 tracking-tight uppercase">Home</span>
            </button>
            
            {/* Slot 2: Stats */}
            <button 
              onClick={() => navigateTo(Screen.STATS)}
              className={`flex flex-col items-center justify-center transition-all ${currentScreen === Screen.STATS ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentScreen === Screen.STATS ? 'font-variation-fill' : ''}`}>analytics</span>
              <span className="text-[10px] font-black mt-0.5 tracking-tight uppercase">Stats</span>
            </button>
            
            {/* Slot 3: Video Button (FAB) */}
            <div className="flex justify-center items-center">
              <button 
                onClick={() => navigateTo(Screen.CAPTURE)}
                className="absolute -top-7 size-16 bg-primary text-background-dark rounded-full shadow-[0_10px_30px_rgba(147,242,13,0.5)] flex items-center justify-center transition-all hover:scale-110 active:scale-90 z-50 ring-[6px] ring-background-dark"
              >
                <span className="material-symbols-outlined text-3xl font-bold">videocam</span>
              </button>
            </div>
            
            {/* Slot 4: History/Sessions */}
            <button 
              onClick={() => navigateTo(Screen.SESSIONS)}
              className={`flex flex-col items-center justify-center transition-all ${currentScreen === Screen.SESSIONS ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentScreen === Screen.SESSIONS ? 'font-variation-fill' : ''}`}>calendar_month</span>
              <span className="text-[10px] font-black mt-0.5 tracking-tight uppercase">History</span>
            </button>
            
            {/* Slot 5: Profile */}
            <button 
              onClick={() => navigateTo(Screen.PROFILE)}
              className={`flex flex-col items-center justify-center transition-all ${currentScreen === Screen.PROFILE ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <span className={`material-symbols-outlined text-2xl ${currentScreen === Screen.PROFILE ? 'font-variation-fill' : ''}`}>person</span>
              <span className="text-[10px] font-black mt-0.5 tracking-tight uppercase">Profile</span>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default App;
