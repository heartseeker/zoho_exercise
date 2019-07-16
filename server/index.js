var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var port = process.env.PORT || 8000; 

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, DELETE, GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'x-auth, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

var routes = require('./routes.js');



// backup token in scope
// 1000.d676be7ca4ba681686ffe9e32ff258c8.5dca798b6f615521d83e383c8a520f7e


// ROUTES FOR OUR API
// =============================================================================
app.use('/api', routes);

app.listen(port, () => {
    console.log('running on port http://localhost:' + port);
});


