const fs = require('fs');
fs.copyFileSync('./manifest.json', './dist/manifest.json');
fs.copyFileSync('./src/styles.css', './dist/styles.css');
