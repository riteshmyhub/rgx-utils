# xrg-utils

A collection of utility functions for common JavaScript/TypeScript.A modern collection of reusable utility functions for JavaScript and TypeScript, designed to simplify everyday development tasks.

## Installation

```bash
npm install xrg-utils
```

## Available Utilities

##### pipeline

```typescript
import utils from "xrg-utils";

const [op1, op2] = utils.pipeline({
   input: [5, 2, 8, 3, 1, 4],
   filter: (num) => num % 2 === 0,
   map: {
      matched: (num) => num * num,
      unmatched: (num) => -num,
   },
   sort: {
      matched: (a, b) => a - b,
      unmatched: (a, b) => a - b,
   },
});

console.log("op1:", op1); // [4, 16, 64]
console.log("op2:", op2); // [-5, -3, -1]
```

##### generatePassword

```typescript
import utils from "xrg-utils";

utils.generatePassword(12); // Generates a 12-character password
```

##### getBase64

```typescript
import utils from "xrg-utils";

// For files:
const fileBase64 = await utils.getBase64(file);
```

##### slug

```typescript
import utils from "xrg-utils";

const urlSlug = utils.slug("Some String to Slugify"); // "some-string-to-slugify"
```

##### truncate

```typescript
import utils from "xrg-utils";

const shortText = utils.truncate("Very long text here", 10); // "Very long..."\
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to contribute to this project.

## License

This package is open-source and available under the MIT License.
