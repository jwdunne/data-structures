export interface List<T> {
    value: T;
    rest: List<T>
}

export const Nil: List<null> = {
    value: null,
    rest: this
}

export const cons = <T>(value: T, list: List<T>): List<T> => {
    return { value, rest: list };
};

export const from = <T>(values: T[]): List<T> => {
    const temp = [...values];
    let last, list = Nil;
    while (temp.length > 0) {
        last = temp.pop();
        list = cons(last, list);
    }
    return list;
};

export const first = <T>(list: List<T>): T => {
    return list.value;
};

export const rest = <T>(list: List<T>): List<T> => {
    return list.rest;
};

