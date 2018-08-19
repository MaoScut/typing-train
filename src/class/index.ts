
abstract class ActionPayloadObj {

}

export class Action {
    public type: string;
    public payload: ActionPayloadObj;
    constructor(type: string, payload?: ActionPayloadObj) {
        this.type = type;
        this.payload = payload;
    }
}

export interface State {
    before: any,
    current: any,
    dictionary: Dictionary,
    fetchingStatics: boolean,
}

interface StaticData extends ActionPayloadObj {
    [propName: string]: number;
}

// 训练设置
export interface SettingObj extends ActionPayloadObj {
    speed: number,
    fontSize: number,
    time: number,
}


function shuffle(arr: string[]) {
    const len = arr.length;
    for (let i = 0; i < len; i += 1) {
        const index = Math.random() * (len - i);
        const temp = arr[index];
        arr[index] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
}


export class Dictionary {
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