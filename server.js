var express = require ('express');

var app = express();

//we can now serve up static pages
app.use(express.static(__dirname));


var app = express();



app.listen(3000);
//
