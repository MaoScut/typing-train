const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');

const config = require('../webpack.config');
const path = require('path');
const Express = require('express');
const serveStatic = require('serve-static');
const requestHandler = require('./requestHandler');

const app = new Express();
const port = 8080;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(serveStatic(path.resolve('./dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sendTrainData', requestHandler.sendTrainData);
app.get('/fetchStaticsData', requestHandler.fetchStaticsData);
app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
