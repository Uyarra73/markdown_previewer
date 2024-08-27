import { useState } from 'react';
import Markdown from "react-markdown";
import './App.css';

function App() {
  const [text, setText] = useState(`
    # H1
    ## H2

    [This is a link](https://www.example.com)

    \`code\`

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

  return (
    <div className='App'>
      <div className="container">
        <h1>Enter your text in the text area</h1>
        <textarea id='editor' onChange={newText} value={text}></textarea>
      </div>
      <div className='container'>
        <h1>You can preview your code here</h1>
        <div id="preview">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default App;
