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
const staticsPath = path.resolve(__dirname, './statics.json');
function saveTrainData(data) {
  return readAll(dataPath)
    .then(str => JSON.parse(str))
    .then((obj) => {
      obj.detail.push(data);
      return writeAll(obj, dataPath)
        .then(() => console.log('ok'));
    });
}

function statics() {
  return readAll(dataPath)
    .then(str => JSON.parse(str))
    .then((obj) => {
      const arr = obj.detail;
      const result = {};
      for (let i = 0; i < arr.length; i += 1) {
        Object.keys(arr[i]).forEach((key) => {
          if (!result[key]) {
            result[key] = [arr[i][key]];
          } else {
            result[key].push(arr[i][key]);
          }
        });
      }
      // 把平均时间和错过次数转化为一个指标，该指标为反应时间
      Object.keys(result).forEach((key) => {
        const tmp = result[key];
        let missTimeSum = 0;
        let averageTimeSum = 0;
        tmp.forEach((o) => {
          missTimeSum += Number(o.missTime);
          averageTimeSum += Number(o.averageTime);
        });
        const r = {
          missTime: missTimeSum / tmp.length,
          averageTime: averageTimeSum / tmp.length,
        };
        const reactTime = r.averageTime + r.missTime;
        result[key] = reactTime;
      });
      return writeAll(result, staticsPath);
    });
}

// statics().then(arr => console.log(arr));

module.exports = {
  saveTrainData,
};
