
import React from 'react';
import { Insight } from '../types';

interface AnalysisProps {
  onBack: () => void;
  onViewStats: () => void;
}

const INSIGHTS: Insight[] = [
  {
    id: '1',
    type: 'positive',
    title: 'Great hip rotation',
    description: 'Your rotation is within the optimal pro range of 45°.'
  },
  {
    id: '2',
    type: 'improvement',
    title: 'Slightly early release',
    description: 'Casting detected. Try to hold the lag for 0.05s longer.'
  },
  {
    id: '3',
    type: 'technical',
    title: 'Club path: +2.1°',
    description: 'In-to-out path. Good for a consistent draw shape.'
  }
];

const Analysis: React.FC<AnalysisProps> = ({ onBack, onViewStats }) => {
  return (
    <div className="flex flex-col bg-background-dark min-h-screen">
      {/* App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-50 bg-background-dark">
        <button onClick={onBack} className="size-12 flex items-center justify-center text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-white text-lg font-bold flex-1 text-center">AI Swing Analysis</h2>
        <div className="size-12 flex items-center justify-center">
          <span className="material-symbols-outlined">share</span>
        </div>
      </div>

      {/* Video Player Area */}
      <div className="p-4">
        {/* Updated background to a high-quality golfer swing image */}
        <div className="relative aspect-[9/12] rounded-xl overflow-hidden bg-cover bg-center border border-white/10" 
             style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800)` }}>
          
          {/* AI Tracking Skeleton Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Swing Path Arc */}
              <path d="M 25 85 Q 50 15 85 45" fill="transparent" stroke="#93f20d" strokeDasharray="3,2" strokeWidth="0.8" opacity="0.8" />
              
              {/* Joint Keypoints */}
              {/* Head */}
              <circle cx="50" cy="22" fill="#93f20d" r="1.8" />
              {/* Shoulders */}
              <circle cx="42" cy="35" fill="#93f20d" r="1.5" />
              <circle cx="58" cy="35" fill="#93f20d" r="1.5" />
              {/* Elbows */}
              <circle cx="38" cy="48" fill="#93f20d" r="1.5" />
              <circle cx="62" cy="48" fill="#93f20d" r="1.5" />
              {/* Hips */}
              <circle cx="45" cy="62" fill="#93f20d" r="1.5" />
              <circle cx="55" cy="62" fill="#93f20d" r="1.5" />
              {/* Knees */}
              <circle cx="44" cy="78" fill="#93f20d" r="1.5" />
              <circle cx="56" cy="78" fill="#93f20d" r="1.5" />
              
              {/* Connecting Bones */}
              <line x1="50" y1="22" x2="50" y2="35" stroke="#93f20d" strokeWidth="0.5" opacity="0.6" />
              <line x1="42" y1="35" x2="58" y2="35" stroke="#93f20d" strokeWidth="0.5" opacity="0.6" />
              <line x1="45" y1="62" x2="55" y2="62" stroke="#93f20d" strokeWidth="0.5" opacity="0.6" />
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="size-16 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
              <span className="material-symbols-outlined text-4xl font-variation-fill">play_arrow</span>
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-0 px-4 py-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex h-1.5 items-center mb-2">
              <div className="h-1 flex-1 rounded-full bg-primary"></div>
              <div className="relative"><div className="absolute -left-2 -top-1.5 size-4 rounded-full bg-primary border-2 border-white shadow-[0_0_10px_rgba(147,242,13,0.8)]"></div></div>
              <div className="h-1 w-1/3 rounded-full bg-white/30"></div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-white font-bold">
              <span>0:04</span>
              <span className="text-primary tracking-widest uppercase flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                AI TRACKING ACTIVE
              </span>
              <span>0:12</span>
            </div>
          </div>
        </div>
      </div>

      {/* Score Summary Card */}
      <div className="px-4 py-2">
        <div className="rounded-xl p-5 bg-card-dark border border-primary/20 flex justify-between items-center shadow-lg">
          <div>
            <p className="text-primary/80 text-xs font-bold uppercase tracking-widest mb-1">Overall Analysis Score</p>
            <div className="flex items-baseline gap-2">
              <p className="text-white text-5xl font-black tracking-tighter">82</p>
              <p className="text-primary text-sm font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">arrow_upward</span>
                4 pts
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Session</p>
            <p className="text-white text-sm font-bold">Oct 24, 2023</p>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2">
        <h3 className="text-white text-lg font-bold">Key Insights</h3>
        <span className="text-primary text-[10px] font-black uppercase tracking-widest border border-primary/30 px-2 py-0.5 rounded">Pro Data</span>
      </div>

      <div className="flex flex-col gap-1 px-2">
        {INSIGHTS.map((insight) => (
          <div key={insight.id} className="flex items-center gap-4 hover:bg-white/5 px-4 py-3 justify-between rounded-xl transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center rounded-xl shrink-0 size-12 border ${
                insight.type === 'positive' ? 'text-primary bg-primary/10 border-primary/20' :
                insight.type === 'improvement' ? 'text-orange-400 bg-orange-400/10 border-orange-400/20' :
                'text-blue-400 bg-blue-400/10 border-blue-400/20'
              }`}>
                <span className="material-symbols-outlined">
                  {insight.type === 'positive' ? 'verified' : insight.type === 'improvement' ? 'trending_down' : 'query_stats'}
                </span>
              </div>
              <div>
                <p className="text-white text-base font-bold leading-tight group-hover:text-primary transition-colors">{insight.title}</p>
                <p className="text-slate-400 text-xs font-medium mt-0.5 leading-snug">{insight.description}</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors">chevron_right</span>
          </div>
        ))}
      </div>

      {/* Footer Action */}
      <div className="mt-8 px-4 pb-12">
        <button onClick={onViewStats} className="w-full bg-primary text-background-dark font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(147,242,13,0.3)] transition-all hover:translate-y-[-2px] active:translate-y-0 active:scale-95 uppercase tracking-widest text-sm">
          <span className="material-symbols-outlined font-variation-fill">show_chart</span>
          View Progress Data
        </button>
        <p className="text-center text-slate-600 text-[9px] mt-6 font-bold uppercase tracking-[0.3em]">SwingCore AI Engineering • 2023</p>
      </div>
    </div>
  );
};

export default Analysis;
