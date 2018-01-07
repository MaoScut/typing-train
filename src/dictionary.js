// 小写字母
// const lowerCaseLetter = 'qwertyuiopasdfghjklzxcvbnm';
// 大写字母
// const upperCaseLetter = '';
// const upperCaseLetter = 'QWERTYUIOPASDFGHJKLZXCVBNM';
// 特殊符号
// const symbol = '';
// const symbol = '`~!@#$%^&*()_+-=|:;"<,>.?/[]{}';
// const symbol2 = '\\\'';
// const set = lowerCaseLetter + upperCaseLetter + symbol + symbol2;
// function next() {
//   const len = set.length;
//   const rand = Math.floor(Math.random() * len);
//   return set[rand];
// }
export default class Dictionary {
  constructor(statics) {
    this.str = '';
    Object.keys(statics).forEach((key) => {
      const n = Math.ceil(statics[key] / 1000);
      const arr = new Array(n).fill(key);
      this.str += arr.join('');
    });
  }
  next() {
    const len = this.str.length;
    const rand = Math.floor(Math.random() * len);
    return this.str[rand];
  }
}
