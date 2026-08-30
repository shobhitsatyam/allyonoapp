import React from 'react';
import { ShieldCheck, BookOpen, Lock, HeartHandshake, Sparkles } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "100% Neutral Info",
      desc: "Objective reviews & version audits"
    },
    {
      icon: BookOpen,
      title: "App Guides",
      desc: "Clear tutorials & APK verify rules"
    },
    {
      icon: Lock,
      title: "Security Awareness",
      desc: "Permissions checklist & safety tips"
    },
    {
      icon: HeartHandshake,
      title: "Responsible Use",
      desc: "Player well-being & healthy limits"
    }
  ];

  return (
    <section className="py-10 bg-bg-secondary border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-gold/15 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide group-hover:text-gold transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
