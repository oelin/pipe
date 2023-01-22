# Seq

Sequential composition of JavaScript functions.


## API

```js
import seq from 'seq'
```

```js
const f = seq(x => x + 2)
    .then(x => x * 2)
    .then(x => x + 4)
    .then(x => x + x)

f(1) // returns 20
```
