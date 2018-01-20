const data = require('./data/utils');

function sendTrainData(req, res) {
  data.saveTrainData(req.body).then(() => res.end());
}
function fetchStaticsData(req, res) {
  data.readStaticData().then(str => res.end(str));
}
function staticsData(req, res) {
  data.staticsData().then(str => res.end(str));
}
module.exports = {
  sendTrainData,
  fetchStaticsData,
  staticsData,
};
