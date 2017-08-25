# procedure-caller

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A simple, no-nonsense procedure caller.

## Install

```
npm i @art-of-coding/procedure-caller
```

## Example

```js
const ProcedureCaller = require('@art-of-coding/procedure-caller')

// Create a new ProcedureCaller
const pc = new ProcedureCaller()

// Define an 'add' procedure
pc.define('add', function (a, b) {
  return a + b
})

// Call the 'add' procedure
const result = pc.call('add', 5, 6)

// And log the result
console.log(`The result is ${result}`)
```

## API

### `new ProcedureCaller()`

Instantiates a new ProcedureCaller. Currently there are no arguments.

### `pc.define(name, fn, override = false)`

Defines a procedure by the given `name`.

* `name`: The name of the procedure
* `fn`: The procedure function
* `override`: Override if a procedure with this name already exists (default `false`)

### `pc.call(name, ...args)`

Calls the procedure with the given `name` and returns the result.

* `name`: The name of the procedure
* `...args`: Zero, one or more arguments for the procedure

### `pc.delete(name, failSilently = true)`

Deletes the procedure with the given `name`.

* `name`: The name of the procedure
* `failSilently`: Don't throw an error if `name` is not defined

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## License

Copyright 2017 [Art of Coding](http://artofcoding.nl).

This software is licensed under the [MIT License](LICENSE).
