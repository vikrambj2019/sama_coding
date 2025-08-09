import React from 'react';

interface Example {
  code: string;
  explanation: string;
}

interface ExampleSectionProps {
  title: string;
  description: string;
  examples: Example[];
}

const ExampleSection: React.FC<ExampleSectionProps> = ({ title, description, examples }) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <h2 className="font-heading text-4xl font-bold text-white mb-3 drop-shadow-lg">{title}</h2>
            <div className="text-base text-purple-100 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
          <div className="hidden lg:block">
            <img 
              alt="Stitch coding" 
              className="h-32 w-auto transform -rotate-6 hover:rotate-0 transition-transform duration-300 drop-shadow-xl opacity-80 hover:opacity-100" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Qx3r6P5t2s1Z9X7W6V5U4T3S2R1Q0P9O8N7M6L5K4J3I2H1G0F9E8D7C6B5A4"
            />
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-full"></div>
      </header>

      {/* Concept Explanation */}
      <section className="bg-gradient-to-r from-purple-800/60 to-purple-700/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-400/30 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Understanding the Magic</h3>
            <p className="text-purple-100 leading-relaxed">
              The <code className="bg-purple-900/60 text-pink-300 px-2 py-1 rounded-md font-mono text-sm border border-purple-400/30">print()</code> function is your gateway to communication in Python! 
              Think of it as Stitch's universal translator - whatever you put inside those parentheses gets displayed on the screen for everyone to see. 
              It's the most essential tool for showing results, debugging code, and sharing messages with your users.
            </p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Stitch's Code Examples</h3>
        </div>
        
        <div className="grid gap-4">
          {examples.map((example, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-xl border border-purple-400/30 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:border-pink-400/50">
                <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-900/60 to-purple-800/60 border-b border-purple-400/20">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs text-purple-200 font-mono">python_lesson.py</span>
                </div>
                <div className="p-4">
                  <pre className="font-mono text-sm leading-relaxed">
                    <code dangerouslySetInnerHTML={{ __html: example.code }}></code>
                  </pre>
                </div>
              </div>
              {example.explanation && (
                <div className="mt-3 ml-4 flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <p className="text-sm text-purple-200 italic leading-relaxed">
                    {example.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExampleSection;