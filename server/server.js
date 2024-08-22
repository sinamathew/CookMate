import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;

// Manually recreate __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Route to serve recipes
app.get('/api/recipes', (req, res) => {
  fs.readFile(path.join(__dirname, '../fileStorage/recipe.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read data" });
    }
    res.json(JSON.parse(data)); // Serve recipes as JSON
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
