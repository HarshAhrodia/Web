const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // React app's default URL
}));

const courses = [
  { name: 'JavaScript Basics', duration: '4 weeks' },
  { name: 'React Fundamentals', duration: '6 weeks' },
  { name: 'Node.js Mastery', duration: '8 weeks' },
];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});