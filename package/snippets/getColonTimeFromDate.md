### getColonTimeFromDate

Returns a string of the form `HH:MM:SS` from a `Date` object.

Use `Date.toString()` and `String.slice()` to get the `HH:MM:SS` part of a given `Date` object.

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
```

```js
getColonTimeFromDate(new Date()); // "08:38:00"
```
