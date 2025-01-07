const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const Document = require('./models/Document');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

mongoose.connect('mongodb://localhost:27017/editor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

// Fetch document
app.get('/document', async (req, res) => {
  const document = await Document.findOne();
  if (!document) {
    const newDoc = new Document({ content: '' });
    await newDoc.save();
    return res.json(newDoc);
  }
  res.json(document);
});

// Save document
app.post('/document', async (req, res) => {
  const { content } = req.body;
  const document = await Document.findOne();
  if (document) {
    document.content = content;
    await document.save();
  } else {
    const newDoc = new Document({ content });
    await newDoc.save();
  }
  res.json({ message: 'Document saved successfully!' });
});

// Real-time collaboration
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('update-document', (content) => {
    // Save the content to the database
    Document.findOneAndUpdate({}, { content }, { new: true }).then((updatedDoc) => {
      // Broadcast the updated content to all clients
      io.emit('document', { content: updatedDoc.content });
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(5000, () => console.log('Server running on port 5000'));
