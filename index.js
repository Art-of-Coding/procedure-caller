'use strict'

/**
 * Class representing a procedure caller.
 * @type {Class}
 */
class ProcedureCaller {
  constructor () {
    this._procedures = new Map()
  }

  /**
   * Defines a procedure by the given `name`.
   * @param  {string}   name             The name of the procedure
   * @param  {Function} fn               The procedure function
   * @param  {Boolean}  [override=false] Override if a procedure with this name already exists
   */
  define (name, fn, override = false) {
    if (!name || typeof name !== 'string') {
      throw new TypeError('name must be a string')
    }

    if (!fn || typeof fn !== 'function') {
      throw new TypeError('fn must be a function')
    }

    if (!override && this._procedures.has(name)) {
      throw new Error(`${name} already defined`)
    }

    this._procedures.set(name, fn)
  }

  /**
   * Calls the procedure with the given `name` and returns the result.
   * @param  {string} name    The name of the procedure
   * @param  {any}    ...args Zero, one or more arguments
   * @return {any}            The result of the procedure
   */
  call (name, ...args) {
    if (!name || typeof name !== 'string') {
      throw new TypeError('name must be a string')
    }

    if (!this._procedures.has(name)) {
      throw new Error(`${name} not defined`)
    }

    const procedure = this._procedures.get(name)

    return procedure.apply(null, args)
  }

  /**
   * Delete the procedure with the given `name`.
   * @param  {string}  name                The name of the procedure
   * @param  {Boolean} [failSilently=true] Don't throw an error if `name` is not defined
   */
  delete (name, failSilently = true) {
    if (!name || typeof name !== 'string') {
      throw new TypeError('name must be a string')
    }

    if (!failSilently && !this._procedures.has(name)) {
      throw new Error(`${name} not defined`)
    }

    this._procedures.delete(name)
  }
}

module.exports = exports = ProcedureCaller
