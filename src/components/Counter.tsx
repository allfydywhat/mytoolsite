import React from 'react';
import { Minus, RotateCcw } from 'lucide-react';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement, onReset }) => {
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800 w-full max-w-md mx-auto">
      {/* Counter Display */}
      <div className="text-center mb-8">
        <div className="text-6xl md:text-8xl font-bold text-white mb-4 font-mono tracking-wider">
          {count.toLocaleString()}
        </div>
        <div className="text-gray-400 text-sm uppercase tracking-widest">
          Count
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        {/* Decrease Button */}
        <button
          onClick={onDecrement}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={count === 0}
          aria-label="Decrease count"
        >
          <Minus size={24} />
        </button>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="bg-gray-600 hover:bg-gray-700 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-lg"
          aria-label="Reset counter"
        >
          <RotateCcw size={24} />
        </button>
      </div>

      {/* Main TAP Button */}
      <button
        onClick={onIncrement}
        className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-2xl md:text-3xl font-bold py-6 md:py-8 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-xl tracking-wider"
        aria-label="Increment count"
      >
        TAP
      </button>

      {/* Auto-save indicator */}
      <div className="text-center mt-4">
        <span className="text-green-400 text-xs flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Auto-saved</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;