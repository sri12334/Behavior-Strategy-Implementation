'use strict';

/**
 * Check the total price of the groceries.
 *
 * @param {Array} groceries - The groceries to check the total price along the quantity.
 * @returns {number} total price.
 */

export const getTotalPrice = (groceries) => {
    let total = 0;
    for (let i = 0; i < groceries.length; i++) {
        total += groceries[i].price * groceries[i].quantity;
    }
    return Math.round(total * 100) / 100;
};
