import { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
    # H1 
    ## H2 
    [This is a link](https://www.example.com)

    \`<div></div>\`

    \`\`\`
    // This is a code block:
    function example() {
      console.log("Hello, world!");
    }
    \`\`\`

  - First item in the list
  - Second item in the list
  - Third item in the list

  > This is a blockquote.

  ![Placeholder image](https://via.placeholder.com/150)

  **This text is bold**

  `);

  const newText = (e) => {
    setText(e.target.value);
  }


  // Configuración de marked para habilitar saltos de línea automáticos
  marked.setOptions({
    breaks: true,  // Para permitir saltos de línea
    gfm: true,     // Soporte para GitHub Flavored Markdown
    headerIds: false,  // Evitar IDs automáticos en encabezados
  });

  

  return (
    <div className='App'>
      <div className="container">
        <h1>Enter your text in the text area</h1>
        <textarea id='editor' onChange={newText} value={text}></textarea>
      </div>
      <div className='container'>
        <h1>You can preview your code here</h1>
        <div id="preview" 
          dangerouslySetInnerHTML={{
            __html: marked(text)  // Convertir el markdown a HTML
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
