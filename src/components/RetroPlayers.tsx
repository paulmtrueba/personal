import React, { useEffect, useState, useRef } from 'react';
import {
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Volume2 } from
'lucide-react';
const PLAYLIST = [
{
  title: 'Introductions',
  src: '/introductions.mp3',
  duration: '4:04'
},
{
  title: 'Lost at the Sea',
  src: '/lostatthesea.mp3',
  duration: '3:19'
},
{
  title: 'Haunted',
  src: '/HAUNTED.mp3',
  duration: '3:14'
},
{
  title: 'No Space',
  src: '/NO_SPACE.mp3',
  duration: '4:50'
}];

export function RetroPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTrack = PLAYLIST[currentTrackIndex];
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.
      play().
      catch((e) => console.log('Playback prevented (placeholder)', e));
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);
  const togglePlay = () => setIsPlaying(!isPlaying);
  const stop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };
  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };
  const prevTrack = () => {
    setCurrentTrackIndex(
      (prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length
    );
    setIsPlaying(true);
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * (audioRef.current.duration || 100); // Fallback duration for placeholder
    setCurrentTime(audioRef.current.currentTime);
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  // Win95 Button Styles
  const buttonStyle =
  'flex items-center justify-center w-8 h-8 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-800 active:border-t-gray-800 active:border-l-gray-800 active:border-b-white active:border-r-white focus:outline-none active:bg-[#b0b0b0]';
  return (
    <div className="w-full bg-[#c0c0c0] p-1 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-800 font-mono text-xs select-none">
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextTrack} />


      {/* Header Bar */}
      <div className="bg-[#000080] text-white px-1 py-0.5 mb-1 flex justify-between items-center font-bold text-[10px]">
        <span>WINAMP</span>
        <span className="cursor-pointer">×</span>
      </div>

      {/* LCD Display */}
      <div className="bg-black border-2 border-inset border-gray-600 p-2 mb-2 relative overflow-hidden">
        <div className="text-[#00ff00] whitespace-nowrap mb-1">
          {isPlaying ?
          `▶ ${currentTrackIndex + 1}. ${currentTrack.title}` :
          `■ ${currentTrackIndex + 1}. ${currentTrack.title}`}
        </div>
        <div className="flex justify-between text-[#00ff00]">
          <span>{formatTime(currentTime)}</span>
          <span>{currentTrack.duration}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="h-3 bg-[#000000] border-2 border-inset border-gray-600 mb-2 cursor-pointer relative"
        onClick={handleSeek}>

        <div
          className="h-full bg-[#00ff00] opacity-70"
          style={{
            width: `${currentTime / (duration || 100) * 100}%`
          }} // Fallback duration for visual
        />
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex space-x-0.5">
          <button onClick={prevTrack} className={buttonStyle} title="Previous">
            <SkipBack size={12} fill="black" />
          </button>
          <button
            onClick={togglePlay}
            className={buttonStyle}
            title={isPlaying ? 'Pause' : 'Play'}>

            {isPlaying ?
            <Pause size={12} fill="black" /> :

            <Play size={12} fill="black" />
            }
          </button>
          <button onClick={stop} className={buttonStyle} title="Stop">
            <Square size={10} fill="black" />
          </button>
          <button onClick={nextTrack} className={buttonStyle} title="Next">
            <SkipForward size={12} fill="black" />
          </button>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center space-x-1 mb-2 px-1">
        <Volume2 size={12} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-800 appearance-none border border-gray-600"
          style={{
            accentColor: '#00ff00'
          }} />

      </div>

      {/* Playlist */}
      <div className="border-t border-[#808080] pt-1">
        <div className="text-[10px] font-bold mb-1 px-1">:: PLAYLIST ::</div>
        <div className="bg-white border-2 border-inset border-gray-600 h-24 overflow-y-auto p-1">
          <ul className="space-y-0.5">
            {PLAYLIST.map((track, index) =>
            <li
              key={index}
              onClick={() => {
                setCurrentTrackIndex(index);
                setIsPlaying(true);
              }}
              className={`cursor-pointer px-1 truncate ${index === currentTrackIndex ? 'bg-[#000080] text-white' : 'hover:bg-[#e0e0e0]'}`}>

                {index + 1}. {track.title}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>);

}