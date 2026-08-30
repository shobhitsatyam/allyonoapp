import React from 'react';
import { LayoutGrid, Star, Spade, Flame, Dices, Disc, Gamepad2, Trophy } from 'lucide-react';
import { CATEGORIES } from '../../data/apps';

export default function CategoryTabs({ activeCategory, onSelectCategory }) {
  const getIcon = (catId) => {
    switch (catId) {
      case 'all': return LayoutGrid;
      case 'new': return Star;
      case 'rummy': return Spade;
      case 'slots': return Flame;
      case 'bingo': return Dices;
      case 'arcade': return Gamepad2;
      case 'spin': return Disc;
      case 'gaming': return Trophy;
      default: return LayoutGrid;
    }
  };

  return (
    <div className="w-full">
      {/* Reference Top Tab Bar (Big dual banner tabs or pill bar) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
        {CATEGORIES.map((cat) => {
          const Icon = getIcon(cat.id);
          const isSelected = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              type="button"
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-display text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 whitespace-nowrap shrink-0 ${
                isSelected
                  ? 'bg-gradient-to-r from-gold-bright via-gold to-amber-500 text-black shadow-gold-md scale-[1.02]'
                  : 'bg-neutral-900/90 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 hover:border-gold/30'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-gold'}`} />
              <span>{cat.label}</span>
              {cat.count && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-neutral-800 text-neutral-400'
                }`}>
                  {cat.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
