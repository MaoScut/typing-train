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
// const staticsPath = path.resolve(__dirname, './statics.json');
function saveTrainData(data) {
  return readAll(dataPath)
    .then(str => JSON.parse(str))
    .then((obj) => {
      obj.detail.push(data);
      return writeAll(obj, dataPath)
        .then(() => console.log('ok'));
    });
}

// statics.json已经不再用了

// function statics() {
//   return readAll(dataPath)
//     .then(str => JSON.parse(str))
//     .then((obj) => {
//       const arr = obj.detail;
//       const result = {};
//       for (let i = 0; i < arr.length; i += 1) {
//         Object.keys(arr[i]).forEach((key) => {
//           if (!result[key]) {
//             result[key] = [arr[i][key]];
//           } else {
//             result[key].push(arr[i][key]);
//           }
//         });
//       }
//       // 把平均时间和错过次数转化为一个指标，该指标为反应时间
//       Object.keys(result).forEach((key) => {
//         const tmp = result[key];
//         let missTimeSum = 0;
//         let averageTimeSum = 0;
//         tmp.forEach((o) => {
//           missTimeSum += Number(o.missTime);
//           averageTimeSum += Number(o.averageTime);
//         });
//         const r = {
//           missTime: missTimeSum / tmp.length,
//           averageTime: averageTimeSum / tmp.length,
//         };
//         const reactTime = r.averageTime + r.missTime;
//         result[key] = reactTime;
//       });
//       return writeAll(result, staticsPath);
//     });
// }

// 只统计最近20次的数据
function partlyStatics() {
  return readAll(dataPath)
    .then(str => JSON.parse(str))
    .then((obj) => {
      const arr = obj.detail.slice(-20, -1);
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
      return result;
    });
}
// statics().then(arr => console.log(arr));
function readStaticData() {
  return partlyStatics().then(data => JSON.stringify(data));
}

function staticsData() {
  return readAll(dataPath)
    .then(str => JSON.parse(str))
    .then((o) => {
      const arr = o.detail;
      const chars = 'abcdefghijklmnopqrestuvwxyz';
      const len = arr.length;
      const result = {};
      for (let j = 0; j < chars.length; j += 1) {
        result[chars[j]] = [];
        for (let i = 0; i < len; i += 1) {
          if (arr[i][chars[j]]) {
            result[chars[j]].push(arr[i][chars[j]].averageTime);
          } else {
            result[chars[j]].push(0);
          }
        }
        result[chars[j]] = result[chars[j]].slice(-20);
      }
      return result;
    })
    .then(obj => JSON.stringify(obj));
}

module.exports = {
  saveTrainData,
  readStaticData,
  readAll,
  writeAll,
  staticsData,
};
