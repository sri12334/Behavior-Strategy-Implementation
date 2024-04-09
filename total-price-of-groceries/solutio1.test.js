'use strict';

import { getTotalPrice } from './solution1.js';

describe('getTotalPrice function', () => {
    it('should return 0 when groceries array is empty', () => {
        const groceries = [];
        expect(getTotalPrice(groceries)).toEqual(0);
    });

    it('should return the correct total price when groceries array contains one item', () => {
        const groceries = [{ name: 'Apple', price: 1.25, quantity: 2 }];
        expect(getTotalPrice(groceries)).toEqual(2.50);
    });

    it('should return the correct total price when groceries array contains multiple items', () => {
        const groceries = [
            { name: 'Apple', price: 1.25, quantity: 2 },
            { name: 'Banana', price: 0.75, quantity: 3 },
            { name: 'Orange', price: 0.50, quantity: 4 },
        ];
        expect(getTotalPrice(groceries)).toEqual(7.75);
    });

    it('should return the correct total price when prices have decimal values', () => {
        const groceries = [
            { name: 'Apple', price: 1.35, quantity: 2 },
            { name: 'Banana', price: 0.65, quantity: 3 },
            { name: 'Orange', price: 0.80, quantity: 4 },
        ];
        expect(getTotalPrice(groceries)).toEqual(7.85);
    });

    it('should handle negative prices and quantities', () => {
        const groceries = [
            { name: 'Apple', price: -1.25, quantity: -2 },
            { name: 'Banana', price: 0.75, quantity: 3 },
            { name: 'Orange', price: 0.50, quantity: -4 },
        ];
        expect(getTotalPrice(groceries)).toEqual(2.25);
    });
});
