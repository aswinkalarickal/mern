let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let port = 3000;

let app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'src')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Webpack
let webpack = require('webpack');
let webpackConfig = require('./webpack.config');
let compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'src'
}));

app.use(require('webpack-hot-middleware')(compiler));

// Routes
let index = require('./routes/index');
let tasks = require('./routes/tasks');

app.use('/', index);
app.use('/api', tasks);

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
