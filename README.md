# @rgx/utils

A collection of utility functions for common JavaScript/TypeScript.

## Installation

```bash
npm install @rgx/utils
```


## Available Utilities

##### pipeline
```typescript
import { pipeline } from '@rgx/utils';

const [op1, op2] = pipeline({
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

console.log("op1:", op1);   // [4, 16, 64]
console.log("op2:", op2); // [-5, -3, -1]

```
##### generatePassword
```typescript
import { generatePassword } from '@rgx/utils';

generatePassword(12); // Generates a 12-character password
```
##### getBase64
```typescript
import { getBase64 } from '@rgx/utils';

// For files:
const fileBase64 = await getBase64(file);

```
##### slug
```typescript
import { slug } from '@rgx/utils';

const urlSlug = slug('Some String to Slugify'); // "some-string-to-slugify"

```
##### truncate 
```typescript
import { truncate } from '@rgx/utils';

const shortText = truncate('Very long text here', 10); // "Very long..."
const customEllipsis = truncate('Very long text here', 10, ' >>'); // "Very long >>"

```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to contribute to this project.

## License

This package is open-source and available under the MIT License.