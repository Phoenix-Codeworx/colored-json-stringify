# colored-json-stringify

A JSON.stringify replacement that retains colors when logging to the terminal console.

## Installation

You can install the package using npm/yarn/pnpm/bun:

```bash
npm install colored-json-stringify
```

## Usage

```typescript
import { coloredJSONStringify } from 'colored-json-stringify';

const obj = { name: "John", age: 30, married: true, children: null };
console.log(coloredJSONStringify(obj));
```

This will output a colored JSON string in your terminal.

## Features
* Retains colors for different data types when logging to the terminal console
* Supports numbers, strings, booleans, and null values with distinct colors
* Supports nested objects and arrays

## Typescript

This package is fully written in TypeScript and provides type definitions out of the box. You can use it seamlessly in your TypeScript projects

## Testing

This package uses mocha and chai for testing. To run the tests, use the following command:

```bash
npm run build
npm test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Bun Compatibility

This package is compatible with Bun. To run the tests with Bun:
```bash
bun run test:bun
```

## Acknowledgements
This package uses the [chalk](https://www.npmjs.com/package/chalk) library for color handling in the terminal.

