const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Webpack
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

// Body Parser Middleware
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// Render initial HTML
const renderFullPage = () => {
    return `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>MERN Starter</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        </head>
        <body>
        <div id="app"></div>
        <script src="/app/bundle.js"></script>
        </body>
        </html>
    `;
};

// Routes
const api = require('./routes/api');

app.use('/api', api);
app.use('*', (req, res) => {
    res.end(renderFullPage());
});

const port = 3000;

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
