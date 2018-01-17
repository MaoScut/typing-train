const utils = require('./utils');
const path = require('path');

const dataPath = path.resolve(__dirname, './data.json');
function checkLength() {
  return utils.readAll(dataPath).then(data => JSON.parse(data))
    .then((obj) => {
      const arr = obj.detail;
      const len = Object.keys(arr[0]).length;
      arr.forEach((item) => {
        if (Object.keys(item).length !== len) {
          return false;
        }
      });
      return true;
    });
}
checkLength().then(result => console.log(result));
