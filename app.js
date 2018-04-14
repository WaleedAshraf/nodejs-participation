let path = require('path');
let express = require('express');
let port = process.env.PORT || 8080;
let app = express();

let staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

let server = app.listen((port) => {
  console.log(`listening on port:${server.address().port}`);
});