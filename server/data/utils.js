const fs = require('fs');
const path = require('path');

function readAll(p) {
  return new Promise((resolve, reject) => {
    fs.readFile(p, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// 写入后返回数组
function writeAll(arr, p) {
  return new Promise((resolve, reject) => {
    fs.writeFile(p, JSON.stringify(arr, null, 2), (e) => {
      if (e) reject(e);
      resolve(arr);
    });
  });
}

// 每次发过来什么数据呢？
// 一个obj，key是所有字符，每个key有这些属性
// 平均反应时间，出现了几次
// {
//   "overall": {},
//   "detail": []
// }
const dataPath = path.resolve(__dirname, './data.json');
function saveTrainData(data) {
  return readAll(dataPath)
    .then(str => JSON.parse(str))
    .then((obj) => {
      obj.detail.push(data);
      return writeAll(obj, dataPath)
        .then(() => console.log('ok'));
    });
}

module.exports = {
  saveTrainData,
};
