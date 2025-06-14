### bind

Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.

Return a `function` that uses `Function.apply()` to apply the given `context` to `fn`.
Use `Array.concat()` to prepend any additional supplied parameters to the arguments.

```js
const bind = (fn, context, ...args) =>
  function() {
    return fn.apply(context, args.concat(...arguments));
  };
```

```js
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'fred' };
const freddyBound = bind(greet, freddy);
console.log(freddyBound('hi', '!')); // 'hi fred!'
```
