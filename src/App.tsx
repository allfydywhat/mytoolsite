import React, { useState, useEffect } from 'react';
import { Minus, RotateCcw, Plus } from 'lucide-react';
import Header from './components/Header';
import Counter from './components/Counter';
import About from './components/About';
import Footer from './components/Footer';
import ConfirmDialog from './components/ConfirmDialog';

function App() {
  const [count, setCount] = useState(0);
  const [showResetDialog, setShowResetDialog] = useState(false);

  // Load count from localStorage on component mount
  useEffect(() => {
    const savedCount = localStorage.getItem('tasbih-counter');
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('tasbih-counter', count.toString());
  }, [count]);

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  const resetCount = () => {
    setShowResetDialog(true);
  };

  const confirmReset = () => {
    setCount(0);
    setShowResetDialog(false);
  };

  const cancelReset = () => {
    setShowResetDialog(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        
        <main className="flex flex-col items-center space-y-12">
          <Counter 
            count={count}
            onIncrement={incrementCount}
            onDecrement={decrementCount}
            onReset={resetCount}
          />
          
          <About />
        </main>
        
        <Footer />
        
        {showResetDialog && (
          <ConfirmDialog
            message="Are you sure you want to reset the counter to 0?"
            onConfirm={confirmReset}
            onCancel={cancelReset}
          />
        )}
      </div>
    </div>
  );
}

export default App;