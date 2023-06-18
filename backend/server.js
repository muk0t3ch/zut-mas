const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 7070;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// Define any API routes or other server routes here

// All remaining requests return the React app, so it can handle routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/users.html'));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
