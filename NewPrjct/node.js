var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port =2808;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.set('views','./views');
app.set('view engine','ejs');

const myRoutes = require('./Controller/route');
app.use(myRoutes);


var server=app.listen(port,function()
{
    console.log(`Server listening the port ${port}`);
});