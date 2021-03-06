/**
 * @nuware/invariant
 * https://github.com/nuware/invariant#readme
 *
 * @version 1.0.2
 * @license MIT
 * @copyright Dmitry Dudin <dima@nuware.ru> 2019
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const raiseError = (message, prefix = '') => {
  throw new Error(`${prefix} ${message}`.trim())
};

const invariant = (condition, message) => {
  if (typeof message !== 'string') {
    throw new Error(`invariant() argument "message" shoud be a string`)
  }

  return void (Boolean(condition) || raiseError(message, 'Invariant:'))
};

exports.invariant = invariant;
exports.raiseError = raiseError;
//# sourceMappingURL=invariant.cjs.js.map
