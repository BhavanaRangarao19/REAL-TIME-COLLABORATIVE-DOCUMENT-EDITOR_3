# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

A real-time collaborative document editor built using React, Node.js, Socket.IO, and MongoDB.

**Features**

Real-time Editing: Multiple users can edit the same document simultaneously.

Auto-Sync: Changes are updated instantly for all users.

Save & Retrieve Documents: Users can save their work and reload it later.

Backend with MongoDB: Documents are stored in a database for persistence.

**Tech Stack**

**Frontend**:

React.js

CSS

Socket.IO (Client)

**Backend**:

Node.js

Express.js

Socket.IO (Server)

MongoDB (Mongoose for ORM)

**Installation Guide**

Step 1: Clone the Repository

  git clone https://github.com/your-repo/collaborative-editor.git
  cd collaborative-editor

Step 2: Install Dependencies

Install Server Dependencies:

cd server
npm install

Install Client Dependencies:

cd ../client
npm install

Step 3: Start MongoDB

If running locally, start MongoDB using:

mongod

Or, use MongoDB Atlas (Cloud Database).

Step 4: Configure Environment Variables

Create a .env file in the server folder:

MONGO_URI=mongodb://localhost:27017/editor
PORT=3000

Step 5: Run the Application

Start the Backend Server:

cd server
npm start

Start the Frontend:

cd ../client
npm start

Now, open http://localhost:3000 in your browser.

**Usage**

Open the editor in multiple tabs or devices.

Start typing; changes will sync in real-time.

Click "Save" to store the document in MongoDB.

Reload the page to retrieve the saved document.

**License**

This project is licensed under the MIT License.

**Screenshots**:
![Image](https://github.com/user-attachments/assets/fc921859-5f0d-4974-90c8-834c2ca738fe)
![Image](https://github.com/user-attachments/assets/a6777df9-1a9d-473e-8f9a-30f151275022)
![Image](https://github.com/user-attachments/assets/194b3195-cb01-4a01-91ef-c0a222a31d87)
![Image](https://github.com/user-attachments/assets/3eacd69e-a121-47a4-931a-22bb66457781)
![Image](https://github.com/user-attachments/assets/22674469-abdf-4be7-80c1-09b47228f37e)
