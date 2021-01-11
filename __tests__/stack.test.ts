import * as Stack from 'src/stack';

describe('Stack', () => {
    test('from makes a Stack from an array', () => {
        const stack = Stack.from([1, 2, 3]);
        expect(stack.list).toBeDefined();
    });

    test('peek returns the value at the top of the stack', () => {
        const stack = Stack.from([1, 2, 3]);
        expect(Stack.peek(stack)).toBe(1);
    });

    test('pop returns a tuple containing top of stack and rest of stack', () => {
        const stack = Stack.from([1, 2, 3]);
        const [top, rest] = Stack.pop(stack);
        expect(top).toBe(1);
        expect(Stack.peek(rest)).toBe(2);
    });

    test('push returns a new stack with element pushed on top', () => {
        const stack = Stack.from([1, 2, 3]);
        const extended = Stack.push(0, stack);
        expect(Stack.peek(extended)).toBe(0);
    });

    test('isEmpty returns true if stack is empty', () => {
        const stack = Stack.create();
        expect(Stack.isEmpty(stack)).toBe(true);
    });

    test('isEmpty returns false if stack has elements', () => {
        const stack = Stack.from([1, 2, 3]);
        expect(Stack.isEmpty(stack)).toBe(false);
    });

    test('what happens when popping an empty stack', () => {
        const stack = Stack.create();
        const [value] = Stack.pop(stack);
        expect(value).toBe(null);
    });
});