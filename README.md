# invariant

[![npm (scoped)](https://img.shields.io/npm/v/@nuware/invariant.svg)](https://www.npmjs.com/package/@nuware/invariant)
![NPM](https://img.shields.io/npm/l/@nuware/invariant.svg)
![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/@nuware/invariant.svg)

## Install

```bash
npm install @nuware/invariant --save
```

or

```html
<script defer src="https://unpkg.com/@nuware/invariant@latest/dist/invariant.umd.js"></script>
```

or

```html
<script defer src="https://unpkg.com/@nuware/invariant@latest/dist/invariant.umd.min.js"></script>
```


## Usage

Browser

```javascript
const invariant = window.nuware.invariant
```

Node

```javascript
const {invariant} = require('@nuware/invariant')
```

or

```javascript
import {invariant} from '@nuware/invariant'
```

## API

```javascript
import {
  invariant,
  raiseError
} from '@nuware/invariant'
```

#### ``` invariant :: (*, String message) -> void ```

```javascript
invariant(trueValue, 'if true')

invariant(falseValue, 'if false')
// => Error: Invariant: if false
```

----

#### ``` raiseError :: (String message, String prefix) -> void ```

```javascript
raiseError('some error', 'MyPrefix:')
// => Error: MyPrefix: some error
```

----

## License

MIT License

## Author

Dmitry Dudin <dima@nuware.ru>
