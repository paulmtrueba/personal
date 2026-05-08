import React, { useEffect, useState } from 'react';
interface RetroCountdownProps {
  endDate: Date;
  visible?: boolean;
}
export function RetroCountdown({
  endDate,
  visible = false
}: RetroCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const end = endDate.getTime();
      const diff = end - now;
      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes: Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)),
        seconds: Math.floor(diff % (1000 * 60) / 1000)
      });
    };
    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [endDate]);
  const pad = (n: number, digits = 2) => n.toString().padStart(digits, '0');
  if (!visible) return null;
  return (
    <div
      className="w-full bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-800 p-1 mb-2 font-mono select-none"
      style={{
        width: 760,
        margin: '0 auto'
      }}>
      
      {/* Title bar */}
      <div className="bg-[#000080] text-white px-2 py-0.5 mb-1 flex justify-between items-center font-bold text-[10px]">
        <span>COUNTDOWN.EXE</span>
        <span>×</span>
      </div>

      {/* LCD Display */}
      <div
        className="bg-black border-2 border-gray-600 p-3 text-center"
        style={{
          borderStyle: 'inset'
        }}>
        
        <div className="flex justify-center items-center space-x-1">
          {/* Days */}
          <div className="flex flex-col items-center">
            <span
              className="text-[#00ff00] text-2xl tracking-widest"
              style={{
                fontFamily: '"Courier New", Courier, monospace'
              }}>
              
              {pad(timeLeft.days, 3)}
            </span>
            <span className="text-[#007700] text-[8px] mt-0.5">DAYS</span>
          </div>

          <span className="text-[#00ff00] text-2xl">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <span
              className="text-[#00ff00] text-2xl tracking-widest"
              style={{
                fontFamily: '"Courier New", Courier, monospace'
              }}>
              
              {pad(timeLeft.hours)}
            </span>
            <span className="text-[#007700] text-[8px] mt-0.5">HRS</span>
          </div>

          <span className="text-[#00ff00] text-2xl">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span
              className="text-[#00ff00] text-2xl tracking-widest"
              style={{
                fontFamily: '"Courier New", Courier, monospace'
              }}>
              
              {pad(timeLeft.minutes)}
            </span>
            <span className="text-[#007700] text-[8px] mt-0.5">MIN</span>
          </div>

          <span className="text-[#00ff00] text-2xl">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span
              className="text-[#00ff00] text-2xl tracking-widest"
              style={{
                fontFamily: '"Courier New", Courier, monospace'
              }}>
              
              {pad(timeLeft.seconds)}
            </span>
            <span className="text-[#007700] text-[8px] mt-0.5">SEC</span>
          </div>
        </div>
      </div>
    </div>);

}