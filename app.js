const express = require('express');
const path = require('path');


//Init app
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('working');
});

// Start the server
const port = 3000;
app.listen(port,  () => {
  console.log('Server is running on port' + port);
});



