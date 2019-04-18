export const raiseError = (message, prefix = '') => {
  throw new Error(`${prefix} ${message}`.trim())
}

export const invariant = (condition, message) => {
  if (typeof message !== 'string') {
    throw new Error(`invariant() argument "message" shoud be a string`)
  }

  return void (Boolean(condition) || raiseError(message, 'Invariant:'))
}
