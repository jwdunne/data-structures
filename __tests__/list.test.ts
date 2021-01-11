import * as List from 'src/list';

describe('List', () => {
    test('from creates a new list from array', () => {
        const list = List.from([1, 2, 3, 4]);
        expect(list.value).toBe(1);
        expect(list.rest.value).toBe(2);
        expect(list.rest.rest.value).toBe(3);
        expect(list.rest.rest.rest.value).toBe(4);
        expect(list.rest.rest.rest.rest).toBe(List.Nil);
    });

    test('cons creates a new list', () => {
        const list = List.cons(1, List.Nil);
        expect(list.value).toBe(1);
        expect(list.rest).toBe(List.Nil);
    });

    test('first returns the first value in a list', () => {
        const list = List.cons(1, List.cons(2, List.Nil));
        expect(List.first(list)).toBe(1);
    });
    
    test('rest returns the last after the first node', () => {
        const list = List.cons(1, List.cons(2, List.Nil));
        expect(List.first(List.rest(list))).toBe(2);
    });

    test('rest returns Nil element if end of list', () => {
        const list = List.cons(1, List.Nil);
        expect(List.rest(list)).toBe(List.Nil);
    });
});