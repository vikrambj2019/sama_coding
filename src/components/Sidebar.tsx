import React from 'react';

interface SidebarProps {
  currentModule: string;
  progress: number;
  kudos: number;
  badges: number;
}

const Sidebar: React.FC<SidebarProps> = ({ currentModule, progress, kudos, badges }) => {
  return (
    <aside className="w-96 bg-gradient-to-b from-purple-900/90 to-purple-800/90 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl relative border-r border-purple-400/30">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="z-10 relative">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="relative inline-block mb-4">
            <img 
              alt="Happy Stitch" 
              className="mx-auto h-24 w-24 rounded-full border-4 border-pink-400 shadow-xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9e4q2b1z0x9y8c7v6u5t4s3r2q1p0o9n8m7l6k5j4i3h2g1f0e9d8c7b6"
            />
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full border-2 border-white">
              626
            </div>
          </div>
          <h1 className="font-heading text-3xl font-bold text-white mb-2 drop-shadow-lg">Stitch's Code Ohana</h1>
          <p className="text-sm text-purple-200 italic">"Ohana means family. And family codes together!"</p>
        </div>
        
        {/* Progress Section */}
        <div className="mb-8 space-y-4">
          <h2 className="text-lg font-bold text-white text-center">Your Progress</h2>
          <div className="relative">
            <div className="w-full bg-purple-900/50 rounded-full h-6 border-2 border-purple-400/50 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-pink-400 to-yellow-400 h-full rounded-full flex items-center justify-end pr-2 transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              >
                <div className="w-4 h-4 bg-white rounded-full border-2 border-purple-600 shadow-lg"></div>
              </div>
            </div>
            <p className="text-xs text-purple-200 text-center mt-2">You're {progress}% to becoming a code master!</p>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center gap-3">
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-3 py-2 rounded-full border border-yellow-400/30">
              <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
              <span className="font-bold text-sm text-white">{kudos}</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-3 py-2 rounded-full border border-blue-400/30">
              <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
              <span className="font-bold text-sm text-white">{badges}</span>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="space-y-2">
          <h3 className="px-2 text-xs font-semibold uppercase text-purple-300 tracking-wider mb-3">Learning Path</h3>
          
          <div 
            className={`group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              currentModule === 'print_function' 
                ? 'bg-gradient-to-r from-pink-500/90 to-purple-500/90 text-white shadow-lg border border-pink-400/50'
                : 'text-purple-200 hover:bg-purple-700/50 hover:text-white border border-transparent'
            }`}
          >
            <div className="relative">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                currentModule === 'print_function' ? 'bg-white/20' : 'bg-purple-800/50'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              {currentModule === 'print_function' && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              )}
            </div>
            <span className="flex-1">Print Function</span>
            {currentModule === 'print_function' && (
              <span className="text-xs font-semibold bg-green-400 text-green-900 px-2 py-1 rounded-full">Active</span>
            )}
          </div>
          
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-purple-300 hover:bg-purple-700/30 transition-all duration-200 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-purple-800/50 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z"/>
              </svg>
            </div>
            <span className="flex-1">Variables</span>
            <span className="text-xs text-yellow-400 font-medium">Next</span>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-purple-400/60 opacity-60 cursor-not-allowed">
            <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <span className="flex-1">Data Types</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"/>
            </svg>
          </div>
        </nav>
      </div>
      
      {/* Footer */}
      <div className="border-t border-purple-400/30 pt-4 z-10 relative">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-purple-200 hover:bg-purple-700/30 transition-all duration-200 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span>My Achievements</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;