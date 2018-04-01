var /* packages */
    compression =require('compression'),
    express = require('express'),
    path = require('path'),
    app = express();

/**
 * Settings
 */

//gzip
app.use(compression({
    // only compress files for the following content types
    filter: function(req, res) {
        return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
    },
    // zlib option for compression level
    level: 3
}));

app.use(function(req, res, next) {
// routes middleware
    console.log('calling route - ' + req.method + ' ' + req.originalUrl);
    next();
});

//static files directory
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname)));


//for debugging included libs
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

/**
 * Error Handlers
 */

// error handlers
app.use(function (err, req, res, next) {
    console.log('',JSON.stringify(err));
    res.send(JSON.stringify(err));
});


/**
 * Server start
 */
app.set('port', 3000);
var server = app.listen(app.get('port'), function() {
    console.log('Server listening at http://localhost:' + server.address().port);
});