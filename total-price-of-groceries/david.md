# [David Newman](https://edabit.com/challenge/jRSST87NjECBzbwzL)

```js
const getTotalPrice = l => l.reduce((a,c)=>a+((c.price*100).toFixed()*c.quantity),0)/100;
```
## Strategy
The strategy employed in this code involves reducing an array of grocery items (l) to a single value representing the total price. The approach is to iterate over each item in the array, calculate the total price of each item (price multiplied by quantity), and accumulate these values to obtain the overall total price.

## Implementation
- Arrow Function - Implicit Return: The implementation is a concise arrow function that utilizes an implicit return due to its single expression nature.

- Array Reduction: The reduce method is used to iterate over the array and accumulate the total price.

## Possible Refactors
This strategy could also be implemented using alternative approaches such as:

- A traditional 'for' loop to iterate over the array and perform the calculation.
- Utilizing 'map' to create an array of total prices for each item and then summing them up.
- Employing 'forEach' for iteration and accumulation.