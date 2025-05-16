import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor() {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState('');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRun = () => {
    try {
      if (language === 'javascript') {
        // Capture console.log outputs
        let consoleOutput = [];
        const originalConsoleLog = console.log;
        console.log = (...args) => {
          consoleOutput.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
          originalConsoleLog(...args);
        };

        // Execute the code
        const result = new Function(code)();
        
        // Restore original console.log
        console.log = originalConsoleLog;

        // Set the output
        if (consoleOutput.length > 0) {
          setOutput(consoleOutput.join('\n'));
        } else {
          setOutput(String(result !== undefined ? result : 'No output'));
        }
      } else if (language === 'html') {
        // For HTML, we'll show it in an iframe
        setOutput(code);
      } else if (language === 'python') {
        // Note: Python execution would require a backend server
        setOutput('Python execution requires a backend server');
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e]">
      <div className="p-4 bg-[#252526] border-b border-[#3c3c3c] flex justify-between items-center">
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="px-4 py-2 text-base bg-[#3c3c3c] text-white border border-[#4c4c4c] rounded cursor-pointer transition-all duration-200 hover:bg-[#4c4c4c] focus:outline-none focus:border-[#007acc] focus:ring-2 focus:ring-[#007acc]/20"
        >
          <option value="javascript">JavaScript</option>
          <option value="html">HTML</option>
          <option value="python">Python</option>
        </select>
        <button
          onClick={handleRun}
          className="px-6 py-2 bg-[#007acc] text-white rounded hover:bg-[#0062a3] transition-colors duration-200"
        >
          Run
        </button>
      </div>
      <div className="flex-1 flex min-h-0">
        <div className="w-1/2 h-full">
          <Editor
            height="100%"
            defaultLanguage={language}
            language={language}
            theme="vs-dark"
            value={code}
            onChange={handleEditorChange}
            options={{
              fontSize: 14,
              minimap: { enabled: true },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on',
              lineNumbers: 'on',
              renderWhitespace: 'selection',
              padding: { top: 10, bottom: 10 }
            }}
          />
        </div>
        <div className="w-1/2 h-full bg-[#1e1e1e] p-4 border-l border-[#3c3c3c] flex flex-col">
          <div className="text-white mb-2 font-semibold">Output:</div>
          <div className="flex-1 min-h-0">
            {language === 'html' ? (
              <iframe
                srcDoc={output}
                className="w-full h-full bg-white rounded"
                title="output"
              />
            ) : (
              <pre className="w-full h-full bg-[#252526] text-white p-4 rounded overflow-auto">
                {output}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
