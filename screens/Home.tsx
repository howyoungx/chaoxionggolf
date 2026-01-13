
import React from 'react';
import { Screen, Session } from '../types';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
}

const RECENT_SESSIONS: Session[] = [
  {
    id: '1',
    title: 'Morning Range Practice',
    date: 'Oct 24',
    swings: 12,
    avgSpeed: 98,
    tempo: '3.1:1',
    score: 82,
    thumbnail: 'https://picsum.photos/seed/golf1/400/225'
  },
  {
    id: '2',
    title: 'Evening Driver Drills',
    date: 'Oct 22',
    swings: 8,
    avgSpeed: 102,
    tempo: '3.0:1',
    score: 74,
    thumbnail: 'https://picsum.photos/seed/golf2/400/225'
  }
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: `url(https://picsum.photos/seed/alex/100/100)` }}></div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Ready to swing?</p>
            <h2 className="text-lg font-bold leading-none">Good morning, Alex</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-full bg-card-dark text-white"><span className="material-symbols-outlined">notifications</span></button>
          <button className="p-2 rounded-full bg-card-dark text-white"><span className="material-symbols-outlined">settings</span></button>
        </div>
      </header>

      {/* Daily Tip */}
      <section className="px-4 pb-4">
        <div className="relative overflow-hidden rounded-xl bg-card-dark border border-white/10 p-5">
          <div className="absolute -right-4 -top-4 size-24 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="flex items-start justify-between relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">lightbulb</span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Daily AI Coaching Tip</span>
              </div>
              <p className="text-white text-base font-medium leading-relaxed">
                Focus on your hip rotation during the downswing for 5% more power.
              </p>
            </div>
            <button className="bg-primary/10 text-primary p-2 rounded-lg">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Last Swing Analysis */}
      <section className="px-4 py-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold">Last Swing Analysis</h3>
          <span className="text-xs text-slate-400 font-medium">Oct 24, 08:45 AM</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-xl bg-card-dark border border-white/5 p-6 flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium">Overall Score</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-5xl font-bold text-white tracking-tighter">78</span>
                <span className="text-slate-500 text-xl">/100</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-primary">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span className="text-sm font-semibold">+5% vs last session</span>
              </div>
            </div>
            <div className="relative size-24">
              <svg className="size-full" viewBox="0 0 36 36">
                <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeLinecap="round" strokeWidth="3"></path>
                <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="78, 100" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-primary">sports_golf</span>
              </div>
            </div>
          </div>

          <div className="col-span-2 rounded-xl bg-card-dark border border-white/5 p-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white text-sm font-semibold">Score Trend</p>
              <p className="text-slate-400 text-xs">Last 7 Sessions</p>
            </div>
            <div className="h-24 w-full flex items-end justify-between gap-1 px-1">
              {[60, 75, 45, 85, 65, 70, 90].map((h, i) => (
                <div key={i} className={`w-full rounded-t-sm ${i === 6 ? 'bg-primary' : 'bg-primary/20'}`} style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 px-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'Today'].map((d, i) => (
                <span key={i} className={`text-[10px] font-bold uppercase tracking-tighter ${i === 6 ? 'text-primary' : 'text-slate-500'}`}>{d}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sessions */}
      <section className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Recent Sessions</h3>
          <button className="text-primary text-sm font-bold" onClick={() => onNavigate(Screen.STATS)}>View All</button>
        </div>
        <div className="space-y-4">
          {RECENT_SESSIONS.map((session) => (
            <div key={session.id} className="flex items-center gap-4 bg-card-dark p-3 rounded-xl border border-white/5 cursor-pointer" onClick={() => onNavigate(Screen.ANALYSIS)}>
              <div className="relative shrink-0 w-24 aspect-video rounded-lg overflow-hidden bg-slate-800 bg-cover bg-center" style={{ backgroundImage: `url(${session.thumbnail})` }}>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">play_circle</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold truncate">{session.title}</h4>
                <p className="text-slate-400 text-xs">{session.date} • {session.swings} Swings recorded</p>
                <div className="flex gap-3 mt-1">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-primary">speed</span>
                    <span className="text-[11px] text-slate-300 font-medium">{session.avgSpeed} mph</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-primary">timer</span>
                    <span className="text-[11px] text-slate-300 font-medium">{session.tempo} Tempo</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-white leading-none">{session.score}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
