### reducedFilter

Filter an array of objects based on a condition while also filtering out unspecified keys.

Use `Array.filter()` to filter the array based on the predicate `fn` so that it returns the objects for which the condition returned a truthy value. 
On the filtered array, use `Array.map()` to return the new object using `Array.reduce()` to filter out the keys which were not supplied as the `keys` argument.

```js
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );
```

```js
const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]
```
