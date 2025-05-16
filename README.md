# Monaco Editor Code Playground
This project is a web-based code editor built with React and Monaco Editor that allows you to write and execute code in multiple languages directly in your browser.

## Features
- Multi-language Support : Write and run code in JavaScript, HTML, and Python
- Real-time Code Execution : Execute your code with a single click
- Syntax Highlighting : Full syntax highlighting for supported languages
- Modern UI : Clean, VS Code-inspired dark theme interface
- Split View : Editor and output panels side by side for immediate feedback

## Languages Supported
- JavaScript : Runs directly in the browser
- HTML : Renders in an iframe for immediate visual feedback
- Python : Executes using Pyodide (WebAssembly-based Python interpreter)
## Getting Started
### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/monaco-editor.git
cd monaco-editor
npm install
```

## Technical Details
This project uses:

- React for the UI framework
- Monaco Editor for the code editing experience
- Pyodide for in-browser Python execution
- Tailwind CSS for styling
## Limitations
- Python execution requires loading the Pyodide WASM module (~10MB), which may take some time on first use
- Complex Python libraries may not be available or may have limited functionality
- Browser security restrictions apply to all executed code