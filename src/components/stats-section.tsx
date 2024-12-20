"use client";

import React, { useState, useEffect } from 'react';

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let incrementTime = (300 / end) * 5;
    let timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue}+</span>;
}

export function StatsSection() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold">
              <AnimatedNumber value={8} />
            </h3>
            <p className="text-sm md:text-base">Experienced</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold">
              <AnimatedNumber value={122} />
            </h3>
            <p className="text-sm md:text-base">Teams</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold">
              <AnimatedNumber value={563} />
            </h3>
            <p className="text-sm md:text-base">Clients</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold">
              <AnimatedNumber value={232} />
            </h3>
            <p className="text-sm md:text-base">Project Done</p>
          </div>
        </div>
      </div>
    </div>
  );
}