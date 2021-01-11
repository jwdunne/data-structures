import * as List from 'src/list';

export interface Stack<T> {
    list: List.List<T>;
}

export const from = <T>(values: T[]): Stack<T> => {
    return create(List.from(values));
}

export const create = <T>(list: List.List<T> = List.Nil): Stack<T> => {
    return { list };
};

/**
 * How do we use the type system to prevent peeking an empty stack?
 * 
 * @param stack 
 */
export const peek = <T>(stack: Stack<T>): T => {
    return List.first(stack.list)
};

/**
 * How do we use the type system to prevent popping an empty stack?
 * 
 * @param stack The stack to pop a value from
 */
export const pop = <T>(stack: Stack<T>): [T, Stack<T>] => {
    return [List.first(stack.list), create(List.rest(stack.list))];
};

export const push = <T>(value: T, stack: Stack<T>): Stack<T> => {
    return create(List.cons(value, stack.list));
};

export const isEmpty = <T>(stack: Stack<T>): boolean => {
    return stack.list === List.Nil;
};