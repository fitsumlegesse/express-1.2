var express = require ('express');

var app = express();

//we can now serve up static pages
app.use(express.static(__dirname));


app.listen(3000);
//
