const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

// Route to serve recipes
app.get('/api/recipes', (req, res) => {
  fs.readFile('../data/recipe.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read data" });
    }
    res.json(JSON.parse(data)); // Serve recipes as JSON
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
