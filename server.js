const express = require('express');
const app = express();
app.use(express.json());

let visitors = [];

// Check-In route
app.post('/checkin', (req, res) => {
  const { name, personToVisit, company } = req.body;
  const visitor = {
    id: Date.now(),
    name,
    personToVisit,
    company,
    checkInTime: new Date().toISOString(),
    checkOutTime: null
  };
  visitors.push(visitor);
  res.send({ message: 'Checked in successfully', visitor });
});

// Get checked-in visitors
app.get('/checkedin', (req, res) => {
  const checkedInVisitors = visitors.filter(v => v.checkOutTime === null);
  res.send(checkedInVisitors);
});

// Check-Out route
app.post('/checkout/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const visitor = visitors.find(v => v.id === id);
  if (visitor && visitor.checkOutTime === null) {
    visitor.checkOutTime = new Date().toISOString();
    res.send({ message: 'Checked out successfully', visitor });
  } else {
    res.status(404).send({ message: 'Visitor not found or already checked out' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
