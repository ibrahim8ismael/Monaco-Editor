import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

export default function EditorOne() {
  const [fileName, setFileName] = useState('script.js');

  const files = {
    'script.js': {
      name: 'script.js',
      language: 'javascript',
      value: "someJSCodeExample",
    },
    'style.css': {
      name: 'style.css',
      language: 'css',
      value: "someCSSCodeExample",
    },
    'index.html': {
      name: 'index.html',
      language: 'html',
      value: "someHTMLCodeExample",
    },
  };


  const file = files[fileName];

  return (
    <>
      <button disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>
        script.js
      </button>
      <button disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
        style.css
      </button>
      <button disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
        index.html
      </button>
      <Editor
        height="80vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </>
  );
}