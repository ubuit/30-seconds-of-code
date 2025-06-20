### rearg

Creates a function that invokes the provided function with its arguments arranged according to the specified indexes.

Use `Array.reduce()` and `Array.indexOf()` to reorder arguments based on `indexes` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.

```js
const rearg = (fn, indexes) => (...args) =>
  fn(
    ...args.reduce(
      (acc, val, i) => ((acc[indexes.indexOf(i)] = val), acc),
      Array.from({ length: indexes.length })
    )
  );
```

```js
var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
rearged('b', 'c', 'a'); // ['a', 'b', 'c']
```
