---
title: What is the difference between JavaScript's for...in, for...of and forEach?
shortTitle: JavaScript iteration methods comparison
language: javascript
tags: [array,object,iterator]
cover: lake-loop
excerpt: Learn the differences between the three most commonly used iteration methods in JavaScript, that often confuse beginners and veterans alike.
listed: true
dateModified: 2021-06-12
---

## `for...in`

`for...in` is used to iterate over **all enumerable properties of an object**, including inherited enumerable properties. This iteration statement can be used with arrays, strings or plain objects, but not with `Map` or `Set` objects.

```js
for (let prop in ['a', 'b', 'c'])
  console.log(prop);            // 0, 1, 2 (array indexes)

for (let prop in 'str')
  console.log(prop);            // 0, 1, 2 (string indexes)

for (let prop in {a: 1, b: 2, c: 3})
  console.log(prop);            // a, b, c (object property names)

for (let prop in new Set(['a', 'b', 'a', 'd']))
  console.log(prop);            // undefined (no enumerable properties)
```

@[You might also like](/js/s/eslint-refactor-for-in)

## `for...of`

`for...of` is used to iterate over iterable objects, iterating **over their values instead of their properties**. This iteration statement can be used with arrays, strings, `Map` or `Set` objects, but not with plain objects.

```js
for (let val of ['a', 'b', 'c'])
  console.log(val);            // a, b, c (array values)

for (let val of 'str')
  console.log(val);            // s, t, r (string characters)

for (let val of {a: 1, b: 2, c: 3})
  console.log(prop);           // TypeError (not iterable)

for (let val of new Set(['a', 'b', 'a', 'd']))
  console.log(val);            // a, b, d (Set values)
```

@[You might also like](/js/s/index-for-of-loop)

## `Array.prototype.forEach()`

Finally, `forEach()` is a method of the `Array` prototype, which allows you to iterate **over the elements of an array**. While `Array.prototype.forEach()` only iterates over arrays, it can access both the value and the index of each element while iterating.

```js
['a', 'b', 'c'].forEach(
  val => console.log(val)     // a, b, c (array values)
);

['a', 'b', 'c'].forEach(
  (val, i) => console.log(i)  // 0, 1, 2 (array indexes)
);
```

@[You might also like](/js/s/for-each-right)
