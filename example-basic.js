'use strict'

/*
  A very basic example of how to use the procedure caller.
  This example defines an 'add' procedure, which is then called with two
  number arguments.
  The returned result is the addition of these numbers. In this case, the output
  will be: 'The result is 11'
 */

const ProcedureCaller = require('./index')

const pc = new ProcedureCaller()

pc.define('add', function (a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new TypeError('both arguments need to be numbers')
  }

  return a + b
})

const result = pc.call('add', 5, 6)

console.log(`The result is ${result}`)
