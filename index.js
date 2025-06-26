const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from /public
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.render('index', { name: 'jyncodes' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
