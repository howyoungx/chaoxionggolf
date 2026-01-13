
import React, { useState } from 'react';
import { Screen } from '../types';

interface ProgressProps {
  onNavigate: (screen: Screen) => void;
}

type TimeFilter = '7D' | '30D' | '3M' | '1Y';

const DATA_SET: Record<TimeFilter, {
  consistency: number;
  trend: string;
  path: string;
  speed: string;
  speedTrend: string;
  labels: string[];
}> = {
  '7D': {
    consistency: 89,
    trend: '+12.4%',
    path: "M0 120C20 120 40 40 60 60C80 80 100 20 120 30C140 40 160 80 180 80C200 80 220 30 240 20C260 10 280 50 300 50C320 50 340 10 360 10C380 10 400 40 420 40C440 40 460 20 480 20",
    speed: "102.1",
    speedTrend: "+4.2 FROM LAST WEEK",
    labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  },
  '30D': {
    consistency: 84,
    trend: '+5.2%',
    path: "M0 109C18.15 109 18.15 21 36.3 21C54.46 21 54.46 41 72.61 41C90.76 41 90.76 93 108.92 93C127.07 93 127.07 33 145.23 33C163.38 33 163.38 101 181.53 101C199.69 101 199.69 61 217.84 61C236 61 236 45 254.15 45C272.3 45 272.3 121 290.46 121C308.61 121 308.61 149 326.76 149C344.92 149 344.92 1 363.07 1C381.23 1 381.23 81 399.38 81C417.53 81 417.53 129 435.69 129C453.84 129 453.84 25 472 25",
    speed: "98.4",
    speedTrend: "+2.1 FROM LAST MONTH",
    labels: ['OCT 01', 'OCT 10', 'OCT 20', 'OCT 30']
  },
  '3M': {
    consistency: 78,
    trend: '+8.1%',
    path: "M0 140C40 140 80 100 120 100C160 100 200 60 240 60C280 60 320 120 360 120C400 120 440 40 480 40",
    speed: "96.5",
    speedTrend: "+1.5 FROM LAST QUARTER",
    labels: ['AUG', 'SEP', 'OCT']
  },
  '1Y': {
    consistency: 72,
    trend: '+15.8%',
    path: "M0 150C40 150 80 130 120 130C160 130 200 110 240 110C280 110 320 90 360 90C400 90 440 60 480 60",
    speed: "94.2",
    speedTrend: "+5.1 FROM LAST YEAR",
    labels: ['2022', '2023', 'Q1', 'Q2', 'Q3', 'NOW']
  }
};

const Progress: React.FC<ProgressProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<TimeFilter>('30D');
  const activeData = DATA_SET[filter];

  return (
    <div className="flex flex-col pb-20">
      <header className="sticky top-0 z-50 bg-background-dark border-b border-white/10 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">analytics</span>
          <h1 className="text-xl font-bold tracking-tight">Progress</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-white/5"><span className="material-symbols-outlined">share</span></button>
          <button className="p-2 rounded-full hover:bg-white/5"><span className="material-symbols-outlined">settings</span></button>
        </div>
      </header>

      {/* Time Filters */}
      <div className="px-4 py-2 mt-2">
        <div className="flex bg-white/5 rounded-xl p-1 gap-1">
          {(['7D', '30D', '3M', '1Y'] as TimeFilter[]).map((t) => (
            <button 
              key={t} 
              onClick={() => setFilter(t)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${filter === t ? 'bg-primary text-background-dark shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-white'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <section className="mt-4 px-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Swing Consistency</p>
              <h3 className="text-3xl font-bold mt-1">{activeData.consistency}<span className="text-lg font-normal text-slate-400">%</span></h3>
            </div>
            <div className="bg-primary/20 text-primary px-2 py-1 rounded-lg flex items-center gap-1">
              <span className="material-symbols-outlined text-sm font-bold">trending_up</span>
              <span className="text-xs font-bold">{activeData.trend}</span>
            </div>
          </div>
          <div className="mt-6 h-40 w-full relative">
            <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 480 150" width="100%">
              <path 
                key={filter}
                d={activeData.path} 
                stroke="#93f20d" 
                strokeLinecap="round" 
                strokeWidth="4" 
                className="transition-all duration-500 ease-in-out"
              />
            </svg>
            <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-500">
              {activeData.labels.map(l => <span key={l}>{l}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mt-8 px-4">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">assessment</span>
          Key Metrics
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-slate-400 text-lg">speed</span>
              <p className="text-xs font-semibold text-slate-400">Avg. Speed</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold tracking-tight">{activeData.speed}</span>
              <span className="text-xs text-slate-400 uppercase">mph</span>
            </div>
            <p className="text-[10px] font-bold text-primary mt-2 uppercase">{activeData.speedTrend}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-slate-400 text-lg">golf_course</span>
              <p className="text-xs font-semibold text-slate-400">Est. Handicap</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold tracking-tight">14.2</span>
            </div>
            <p className="text-[10px] font-bold text-slate-500 mt-2 uppercase tracking-tight">TRENDING STABLE</p>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="mt-8 px-4">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">calendar_month</span>
          Training Frequency
        </h3>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold">October 2023</span>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-slate-400 cursor-pointer">chevron_left</span>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer">chevron_right</span>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-y-3 text-center">
            {['M','T','W','T','F','S','S'].map(d => <span key={d} className="text-[10px] font-bold text-slate-500">{d}</span>)}
            {Array.from({length: 31}, (_, i) => i + 1).map(day => (
              <div key={day} className="flex justify-center">
                <span className={`text-xs font-semibold size-7 flex items-center justify-center rounded-lg ${[2,4,6,9,13, 20, 24, 25, 27].includes(day) ? 'bg-primary text-background-dark shadow-sm' : 'text-white/40'}`}>
                  {day}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">9 sessions in {filter}</p>
            <button className="text-xs text-primary font-bold flex items-center gap-1">VIEW ALL <span className="material-symbols-outlined text-[14px]">chevron_right</span></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Progress;
