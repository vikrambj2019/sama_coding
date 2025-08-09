import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  onCodeSubmit: (code: string) => void;
  isLoading?: boolean;
  output?: string;
  error?: string;
  placeholder?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ 
  onCodeSubmit, 
  isLoading = false, 
  output = '', 
  error = '', 
  placeholder = "Write your own 'Aloha' message here..." 
}) => {
  const [code, setCode] = useState('');
  const editorRef = useRef(null);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleRunCode = () => {
    if (code.trim()) {
      onCodeSubmit(code);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      handleRunCode();
    }
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 3C5.79 3 4 4.79 4 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8-6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM8 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Your Turn to Experiment!</h3>
      </div>
      
      {/* Code Editor Container */}
      <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl border border-purple-400/30 shadow-xl overflow-hidden">
        {/* Editor Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-900/60 to-purple-800/60 border-b border-purple-400/20">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-sm text-purple-200 font-mono">your_experiment.py</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-purple-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            Python 3.11
          </div>
        </div>

        {/* Monaco Editor */}
        <div 
          className="relative"
          onKeyDown={handleKeyPress}
        >
          <div className="h-56 rounded-b-2xl overflow-hidden">
            <Editor
              height="100%"
              defaultLanguage="python"
              value={code}
              onChange={handleEditorChange}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 14,
                fontFamily: "'Fira Code', 'Monaco', 'Cascadia Code', monospace",
                lineNumbers: 'on',
                roundedSelection: false,
                scrollbar: { 
                  vertical: 'auto',
                  horizontal: 'auto',
                  verticalScrollbarSize: 8,
                  horizontalScrollbarSize: 8
                },
                cursorStyle: 'line',
                automaticLayout: true,
                tabSize: 4,
                insertSpaces: true,
                wordWrap: 'on',
                contextmenu: false,
                folding: false,
                glyphMargin: false,
                lineDecorationsWidth: 10,
                lineNumbersMinChars: 3,
                renderLineHighlight: 'line',
                selectOnLineNumbers: true,
                hideCursorInOverviewRuler: true,
                overviewRulerBorder: false,
                renderWhitespace: 'none',
                padding: { top: 16, bottom: 16 }
              }}
              onMount={(editor) => {
                editorRef.current = editor;
                editor.focus();
              }}
            />
          </div>
          
          {!code && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center text-purple-400/60">
                <div className="text-lg mb-2">🤖</div>
                <p className="text-sm italic">Start typing to see the magic happen!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Output Section */}
      {(output || error) && (
        <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl border border-purple-400/30 shadow-xl overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-900/60 to-purple-800/60 border-b border-purple-400/20">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm4.64-1.96l3.03 3.03L19 3.74 20.26 5l-11.59 11.59-4.29-4.29L4.64 10.04z"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-white">Output</span>
            {error && (
              <span className="ml-auto text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full border border-red-400/30">
                Error
              </span>
            )}
            {output && !error && (
              <span className="ml-auto text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full border border-green-400/30">
                Success
              </span>
            )}
          </div>
          <div className="p-6">
            {error ? (
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                </div>
                <pre className="text-red-300 text-sm font-mono leading-relaxed flex-1 whitespace-pre-wrap">{error}</pre>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <pre className="text-green-300 text-sm font-mono leading-relaxed flex-1 whitespace-pre-wrap">{output}</pre>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm text-purple-300">
          <div className="flex items-center gap-2 bg-purple-900/30 px-3 py-2 rounded-full border border-purple-400/30">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Press <kbd className="bg-purple-800/50 px-1.5 py-0.5 rounded text-xs border border-purple-400/30 font-mono">Ctrl+Enter</kbd> to run</span>
          </div>
        </div>
        
        <button 
          onClick={handleRunCode}
          disabled={isLoading || !code.trim()}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-pink-400 hover:to-purple-400 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <span className="relative flex items-center gap-2">
            {isLoading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Running...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Run Code!
              </>
            )}
          </span>
        </button>
      </div>

      {/* Stitch's Encouragement */}
      <div className="bg-gradient-to-r from-purple-800/40 to-blue-800/40 backdrop-blur-sm p-4 rounded-2xl border border-purple-400/30">
        <div className="flex items-start gap-4">
          <img 
            alt="Encouraging Stitch" 
            className="w-10 h-10 rounded-full border-2 border-yellow-400 flex-shrink-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9e4q2b1z0x9y8c7v6u5t4s3r2q1p0o9n8m7l6k5j4i3h2g1f0e9d8c7b6"
          />
          <div>
            <p className="text-sm text-purple-100 leading-relaxed">
              <span className="font-semibold text-yellow-400">Stitch says:</span> Try typing <code className="bg-purple-900/50 px-1.5 py-0.5 rounded text-pink-300 font-mono text-xs border border-purple-400/30">print("Aloha!")</code> and see what happens! 
              Remember, experiment 626 was all about being curious and trying new things. Coding is the same - don't be afraid to make mistakes! 🌺
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeEditor;