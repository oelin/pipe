# Pipe

Piped composition of JavaScript functions.


## API

```js
import pipe from 'pipe'
```

```js
const f = pipe(x => x + 2)
    .pipe(x => x * 2)
    .pipe(x => x + 4)
    .pipe(x => x + x)

f(1) // returns 20
```
