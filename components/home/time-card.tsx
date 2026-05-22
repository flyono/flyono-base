'use client';

import { useEffect, useState } from 'react';

export function TimeCard() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <p className="text-4xl font-mono font-bold text-zinc-900 dark:text-white tracking-tight">
        {time}
      </p>
    </div>
  );
}
