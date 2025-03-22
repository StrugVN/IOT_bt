const fs = require('fs');
const path = require('path');

// The Vercel serverless function handler
module.exports = (req, res) => {
  if (req.url === '/' || req.url === '/index') {
    // Resolve the path to the table.html file
    const filePath = path.join(__dirname, '../table.html');

    // Read the file asynchronously and serve it
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading table.html');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);  // Send the HTML content
      }
    });
  } else {
    res.statusCode = 404;
    res.end('<h1>Page not found</h1>');
  }
};
