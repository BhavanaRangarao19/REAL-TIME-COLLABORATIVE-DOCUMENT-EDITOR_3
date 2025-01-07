import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Connect to backend

function App() {
  const [content, setContent] = useState('');
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    // Fetch the document on component mount
    fetch('http://localhost:5000/document')
      .then((response) => response.json())
      .then((data) => setEditorContent(data.content));

    // Listen for real-time updates
    socket.on('document', (data) => {
      if (editorContent !== data.content) {
        setEditorContent(data.content);  // Update editor only if the content has changed
      }
    });

    return () => {
      socket.off('document'); // Cleanup on component unmount
    };
  }, [editorContent]);

  const handleChange = (event) => {
    setContent(event.target.value);
    socket.emit('update-document', event.target.value); // Send updates to backend
  };

  const saveDocument = () => {
    fetch('http://localhost:5000/document', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
      .then((response) => response.json())
      .then(() => {
        // After saving, fetch the document again to ensure you get the latest saved content
        fetch('http://localhost:5000/document')
          .then((response) => response.json())
          .then((data) => setEditorContent(data.content));
      });
  };

  return (
    <div className="App">
      <h1>Collaborative Document Editor</h1>
      <textarea
        value={content || editorContent}
        onChange={handleChange}
        rows="20"
        cols="80"
      ></textarea>
      <button onClick={saveDocument}>Save</button>
    </div>
  );
}

export default App;
