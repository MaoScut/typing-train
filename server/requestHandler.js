const data = require('./data/utils');

function sendTrainData(req, res) {
  data.saveTrainData(req.body.data).then(() => res.end());
}

module.exports = {
  sendTrainData,
};
