const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Get all holidays
app.get('/holidays', (req, res) => {
  db.all('SELECT * FROM holidays ORDER BY date', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add a holiday
app.post('/holidays', (req, res) => {
  const { date, name } = req.body;
  if (!date || !name) return res.status(400).json({ error: 'Missing date or name' });

  db.run('INSERT INTO holidays (date, name) VALUES (?, ?)', [date, name], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, date, name });
  });
});

// Delete a holiday
app.delete('/holidays/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM holidays WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Holiday not found' });
    res.json({ success: true });
  });
});

app.get('/', (req, res) => res.send('Holiday Calendar API running!'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});