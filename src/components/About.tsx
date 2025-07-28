import React from 'react';

const About: React.FC = () => {
  return (
    <section className="w-full max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">About</h2>
      
      <div className="space-y-4 text-gray-300 leading-7">
        <p>
          Welcome to our <strong className="text-white">online tasbih counter</strong> – your go-to digital tool for daily <strong className="text-white">dhikr</strong> and remembrance. This <strong className="text-white">tasbeeh counter for PC free</strong> requires no download and works instantly on any device, whether mobile, tablet, or desktop.
        </p>
        
        <p>
          With our modern and simple design, the <strong className="text-white">tasbih counter online</strong> is easy to use. Tap the "TAP" button to increase your count, use the "Decrease" button to go back one, and "Reset" to start fresh – with a confirmation for safety. Your progress is automatically saved, so you can always continue your <strong className="text-white">tasbeeh</strong> where you left off.
        </p>
        
        <p>
          Whether you're using it as a <strong className="text-white">dhikr counter</strong> or for general <strong className="text-white">tasbeeh</strong>, this tool offers an uninterrupted spiritual experience – anytime, anywhere. Try our <strong className="text-white">onlinetasbih</strong> platform now and make your <strong className="text-white">tasbeeh counter</strong> experience more effective and convenient than ever.
        </p>
      </div>

      {/* Features */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black/40 rounded-xl p-4 text-center border border-gray-700">
          <div className="text-green-400 text-2xl mb-2">💾</div>
          <h3 className="text-white font-semibold mb-1">Auto-Save</h3>
          <p className="text-gray-400 text-sm">Your count is automatically saved</p>
        </div>
        
        <div className="bg-black/40 rounded-xl p-4 text-center border border-gray-700">
          <div className="text-blue-400 text-2xl mb-2">📱</div>
          <h3 className="text-white font-semibold mb-1">Responsive</h3>
          <p className="text-gray-400 text-sm">Works on all devices</p>
        </div>
        
        <div className="bg-black/40 rounded-xl p-4 text-center border border-gray-700">
          <div className="text-purple-400 text-2xl mb-2">🚀</div>
          <h3 className="text-white font-semibold mb-1">Fast & Simple</h3>
          <p className="text-gray-400 text-sm">No downloads required</p>
        </div>
      </div>
    </section>
  );
};

export default About;