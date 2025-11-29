// arrayFunctions.test.js
const {
    first,
    last,
    arrayToString,
    arrayJoin,
    arrayJoinEmpty,
    chunk
} = require('./arrayFunctions.js');

describe('Array Functions Tests', () => {
    
    // Test for first function
    describe('first function', () => {
        test('returns first n elements', () => {
            expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
        });

        test('returns empty array for null array', () => {
            expect(first(null, 2)).toEqual([]);
        });

        test('returns empty array for n <= 0', () => {
            expect(first([1, 2, 3], 0)).toEqual([]);
            expect(first([1, 2, 3], -1)).toEqual([]);
        });

        test('returns first element when n is null', () => {
            expect(first([1, 2, 3], null)).toBe(1);
        });
    });

    // Test for last function
    describe('last function', () => {
        test('returns last n elements', () => {
            expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
        });

        test('returns empty array for null array', () => {
            expect(last(null, 2)).toEqual([]);
        });

        test('returns last element when n is null', () => {
            expect(last([1, 2, 3], null)).toBe(3);
        });

        test('returns all elements when n > array length', () => {
            expect(last([1, 2, 3], 5)).toEqual([1, 2, 3]);
        });
    });

    // Test for string concatenation functions
    describe('String concatenation functions', () => {
        const myColor = ["Red", "Green", "White", "Black"];

        test('arrayToString works correctly', () => {
            expect(arrayToString(myColor)).toBe("Red,Green,White,Black");
        });

        test('arrayJoin works correctly', () => {
            expect(arrayJoin(myColor)).toBe("Red,Green,White,Black");
        });

        test('arrayJoinEmpty works correctly', () => {
            expect(arrayJoinEmpty(myColor)).toBe("RedGreenWhiteBlack");
        });
    });

    // Test for chunk function
    describe('chunk function', () => {
        test('divides array into chunks of specified size', () => {
            expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
        });

        test('handles exact division', () => {
            expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
        });

        test('handles chunk size larger than array', () => {
            expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
        });

        test('handles empty array', () => {
            expect(chunk([], 2)).toEqual([]);
        });
    });
});