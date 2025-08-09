import React, { useState } from 'react';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [kudos, setKudos] = useState(626);

  const handleCodeSubmit = async () => {
    if (!code.trim()) return;
    
    setIsRunning(true);
    setOutput('');
    setError('');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      let result = '';
      const printMatch = code.match(/print\s*\(\s*(.+)\s*\)/);
      if (printMatch) {
        const content = printMatch[1].replace(/["']/g, '').replace(/,\s*/g, ' ');
        result = content;
        setKudos(prev => prev + 10);
      } else if (code.trim()) {
        result = "Try using the print() function! For example: print('Hello, World!')";
      }
      
      setOutput(result);
      setIsRunning(false);
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : 'Something went wrong'}`);
      setIsRunning(false);
    }
  };

  return (
    <div className="min-h-screen flex" style={{background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #3730a3 50%, #1e40af 75%, #1d4ed8 100%)'}}>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative flex justify-center mb-4">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9e4q2b1z0x9y8c7v6u5t4s3r2q1p0o9n8m7l6k5j4i3h2g1f0e9d8c7b6" 
              alt="Stitch" 
              className="w-20 h-20 rounded-full border-4 border-pink-400 shadow-xl animate-float"
            />
            <div className="absolute" style={{bottom: '-8px', right: '80px', background: '#facc15', color: 'black', fontSize: '0.75rem', fontWeight: 'bold', padding: '0.25rem 0.5rem', borderRadius: '9999px'}}>
              626
            </div>
          </div>
          <h1 className="font-heading text-2xl font-bold text-white mb-2">
            Stitch's Code Ohana
          </h1>
          <p className="text-sm text-purple-200 italic">
            "Ohana means family. And family codes together!"
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 text-center">Your Progress</h2>
          <div className="relative mb-4">
            <div className="w-full h-4 rounded-full overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
              <div 
                className="h-full progress-bar"
                style={{ width: '45%' }}
              />
            </div>
            <p className="text-xs text-center text-purple-200 mt-2">
              45% to code master!
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <div className="glass rounded-full px-3 py-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse-slow" />
              <span className="text-sm font-semibold">{kudos}</span>
            </div>
            <div className="glass rounded-full px-3 py-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse-slow" />
              <span className="text-sm font-semibold">5</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold uppercase text-purple-300 mb-4" style={{letterSpacing: '0.05em'}}>
            Learning Path
          </h3>
          
          <div className="space-y-3">
            <div className="glass p-4 border-l-4 border-pink-400">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📝</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">Print Function</h4>
                  <p className="text-xs text-green-400">Active</p>
                </div>
              </div>
            </div>
            
            <div className="glass p-4" style={{opacity: '0.6'}}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📦</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">Variables</h4>
                  <p className="text-xs text-yellow-400">Next</p>
                </div>
              </div>
            </div>
            
            <div className="glass p-4" style={{opacity: '0.4'}}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🔢</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">Data Types</h4>
                  <p className="text-xs text-gray-400">Locked</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem'}}>
          <button className="w-full glass p-3 text-center hover:bg-white/10 transition-colors">
            <span className="text-sm text-white">🏆 My Achievements</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Lesson Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl font-bold text-white mb-4">
              Print Function
            </h1>
            <p className="text-xl text-purple-200">
              Let's make some noise! The{' '}
              <code style={{background: 'rgba(255, 255, 255, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', color: '#f9a8d4'}}>
                print()
              </code>{' '}
              function shouts your message to the world.
            </p>
          </div>

          {/* Examples Card */}
          <div className="glass-dark p-8 card-hover">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">✨</span>
              Stitch's Examples
            </h2>
            
            <div className="space-y-6">
              <div className="code-block p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-sm text-purple-300">python_lesson.py</span>
                </div>
                <pre className="text-sm">
                  <code>
                    <span className="syntax-keyword">print</span>(<span className="syntax-string">"Aloha, Ohana!"</span>)
                  </code>
                </pre>
                <p className="text-xs text-purple-300 mt-2 italic">
                  → This prints "Aloha, Ohana!" to the screen
                </p>
              </div>
              
              <div className="code-block p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-sm text-purple-300">python_lesson.py</span>
                </div>
                <pre className="text-sm">
                  <code>
                    <span className="syntax-keyword">print</span>(<span className="syntax-number">626</span>)
                  </code>
                </pre>
                <p className="text-xs text-purple-300 mt-2 italic">
                  → This prints the number 626 - Stitch's experiment number!
                </p>
              </div>
            </div>
          </div>

          {/* Code Editor Card */}
          <div className="glass-dark p-8 card-hover">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              Your Turn to Experiment!
            </h2>
            
            <div className="space-y-6">
              <div className="code-block overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b" style={{background: 'rgba(67, 56, 202, 0.5)', borderColor: 'rgba(139, 92, 246, 0.3)'}}>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-sm text-purple-300">your_experiment.py</span>
                  </div>
                  <span className="text-xs text-purple-400">Python 3.11</span>
                </div>
                
                <div className="p-0">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Try: print('Hello, World!')"
                    className="code-editor"
                    onKeyDown={(e) => {
                      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                        e.preventDefault();
                        handleCodeSubmit();
                      }
                    }}
                  />
                </div>
              </div>

              {/* Output */}
              {(output || error) && (
                <div className="code-block overflow-hidden">
                  <div className="px-4 py-3 border-b" style={{background: 'rgba(34, 197, 94, 0.2)', borderColor: 'rgba(34, 197, 94, 0.3)'}}>
                    <span className="text-sm font-medium text-green-400">Output</span>
                  </div>
                  <div className="p-4">
                    <pre className="text-sm" style={{fontFamily: 'Monaco, Cascadia Code, monospace'}}>
                      {error ? (
                        <span className="text-red-400">{error}</span>
                      ) : (
                        <span className="text-green-400">{output}</span>
                      )}
                    </pre>
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-purple-300">
                  💡 Press{' '}
                  <kbd style={{background: 'rgba(255, 255, 255, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem'}}>
                    Ctrl+Enter
                  </kbd>{' '}
                  to run
                </div>
                
                <button
                  onClick={handleCodeSubmit}
                  disabled={isRunning || !code.trim()}
                  className="btn-primary"
                >
                  {isRunning ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white rounded-full animate-spin" style={{borderTopColor: 'transparent'}} />
                      Running...
                    </span>
                  ) : (
                    '▶ Run Code!'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Stitch's Encouragement */}
          <div className="glass p-6">
            <div className="flex items-start gap-4">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9e4q2b1z0x9y8c7v6u5t4s3r2q1p0o9n8m7l6k5j4i3h2g1f0e9d8c7b6"
                alt="Stitch" 
                className="w-12 h-12 rounded-full border-2 border-yellow-400 flex-shrink-0"
              />
              <div>
                <p className="text-purple-200">
                  <span className="font-semibold text-yellow-400">Stitch says:</span> Try typing{' '}
                  <code style={{background: 'rgba(255, 255, 255, 0.1)', padding: '0.125rem 0.25rem', borderRadius: '0.25rem', color: '#f9a8d4'}}>
                    print("Aloha!")
                  </code>{' '}
                  and see what happens! Remember, experiment 626 was all about being curious and trying new things. 
                  Coding is the same - don't be afraid to make mistakes! 🌺
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;