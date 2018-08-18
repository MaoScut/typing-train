import Dictionary from './Dictionary';
export interface Action {
    type: string,
    payload: any,
}

export interface State {
    before: any,
    current: any,
    dictionary: Dictionary,
    fetchingStatics: boolean,
}