### mapValues

Creates an object with the same keys as the provided object and values generated by running the provided function for each value.

Use `Object.keys(obj)` to iterate over the object's keys.
Use `Array.reduce()` to create a new object with the same keys and mapped values using `fn`.

```js
const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});
```

```js
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
mapValues(users, u => u.age); // { fred: 40, pebbles: 1 }
```
