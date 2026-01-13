
import React from 'react';
import { Drill, Screen } from '../types';

interface DrillsProps {
  onNavigate: (screen: Screen) => void;
}

const DRILLS: Drill[] = [
  {
    id: '1',
    title: 'The Towel Drill',
    focus: 'Fixing Slices',
    duration: '10 mins',
    difficulty: 'Intermediate',
    imageUrl: 'https://picsum.photos/seed/drill1/600/338'
  },
  {
    id: '2',
    title: 'Impact Bag Practice',
    focus: 'Power & Speed',
    duration: '15 mins',
    difficulty: 'Advanced',
    imageUrl: 'https://picsum.photos/seed/drill2/600/338'
  },
  {
    id: '3',
    title: 'Alignment Stick Basics',
    focus: 'Accuracy',
    duration: '5 mins',
    difficulty: 'Beginner',
    imageUrl: 'https://picsum.photos/seed/drill3/600/338'
  }
];

const Drills: React.FC<DrillsProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between">
        <div className="size-12 flex items-center justify-center">
          <span className="material-symbols-outlined">account_circle</span>
        </div>
        <h2 className="text-lg font-bold flex-1 text-center">Personalized Training</h2>
        <div className="size-12 flex items-center justify-center">
          <span className="material-symbols-outlined">notifications</span>
        </div>
      </header>

      {/* Goal Progress */}
      <div className="px-4 py-2">
        <div className="bg-white/10 rounded-xl p-4 border border-white/10">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-base font-medium">Weekly Goal</p>
              <p className="text-primary text-sm font-bold">3 / 5 Drills</p>
            </div>
            <div className="rounded-full bg-[#516831] h-2.5 overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '60%' }}></div>
            </div>
            <p className="text-[#b2cb90] text-sm">Almost there! 2 more to hit your target.</p>
          </div>
        </div>
      </div>

      <div className="pt-4 px-4">
        <h2 className="text-2xl font-bold tracking-tight">Your Recommended Drills</h2>
        <h3 className="text-[#b2cb90] text-sm font-semibold uppercase tracking-wider mt-2">Today's Focus</h3>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {DRILLS.map((drill) => (
          <div key={drill.id} className="rounded-xl overflow-hidden bg-[#293418] border border-white/5 shadow-sm group cursor-pointer active:scale-[0.98] transition-all">
            <div className="relative aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${drill.imageUrl})` }}>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <span className="material-symbols-outlined text-white text-5xl opacity-80 group-hover:opacity-100 transition-opacity">play_circle</span>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-1">
              <p className="text-lg font-bold">{drill.title}</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[#b2cb90] text-sm">{drill.focus} • {drill.duration}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-primary text-xs font-variation-fill">signal_cellular_alt</span>
                    <p className="text-[#b2cb90] text-sm">{drill.difficulty}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary text-background-dark text-sm font-bold rounded-lg shadow-lg shadow-primary/20">
                  Start Drill
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Drills;
