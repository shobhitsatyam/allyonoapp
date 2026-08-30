import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Phone, Shield, FileText, AlertTriangle } from 'lucide-react';

export default function SecondaryNav() {
  const location = useLocation();

  const secondaryLinks = [
    { name: 'About Us', path: '/about', icon: User },
    { name: 'Contact Us', path: '/contact', icon: Phone },
    { name: 'Privacy Policy', path: '/privacy', icon: Shield },
    { name: 'Terms & Conditions', path: '/terms', icon: FileText },
    { name: 'Disclaimer', path: '/disclaimer', icon: AlertTriangle },
  ];

  return (
    <div className="bg-[#090909] border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-2.5 gap-3 md:gap-8 text-xs font-medium">
          {secondaryLinks.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <React.Fragment key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-1.5 whitespace-nowrap transition-colors py-1 px-2 rounded-md ${
                    isActive
                      ? 'text-gold font-bold bg-gold/10'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-gold' : 'text-neutral-500'}`} />
                  <span>{item.name}</span>
                </Link>
                {index < secondaryLinks.length - 1 && (
                  <span className="hidden md:inline-block text-neutral-700 select-none">|</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
