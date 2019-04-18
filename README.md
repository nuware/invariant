# invariant

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
