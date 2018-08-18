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

function shuffle(arr: string[]) {
    const len = arr.length;
    for (let i = 0; i < len; i += 1) {
      const index = Math.random() * (len - i);
      const temp = arr[index];
      arr[index] = arr[len - i - 1];
      arr[len - i - 1] = temp;
    }
  }
  
  interface StaticData {
    [propName: string]: number;
  }

  export default class Dictionary {
    private str: string;
    constructor(statics: StaticData) {
      this.str = '';
      Object.keys(statics).forEach((key) => {
        const n = Math.ceil(statics[key] / 100);
        const arr = new Array(n).fill(key);
        this.str += arr.join('');
      });
      const tmpArr = this.str.split('');
      shuffle(tmpArr);
      this.str = tmpArr.join('');
    }
    next() {
      const len = this.str.length;
      const rand = Math.floor(Math.random() * len);
      return this.str[rand];
    }
  }
  
  