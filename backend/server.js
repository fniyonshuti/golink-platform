const express = require('express');
const app = express();

app.use(express.json());

// API Endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello, this is the backend API!" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`);
});
