let path = require('path');
let express = require('express');
let port = process.env.PORT || 8080;
let app = express();

let staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));
console.log('__dirname:',__dirname);
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/nodejs/TSC.html'));
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});