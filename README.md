# xrg-utils

<p align="center">
  <a href="https://www.npmjs.com/package/xrg-utils">
    <img src="https://img.shields.io/npm/v/xrg-utils?color=blue&logo=npm" alt="NPM Version" />
  </a>
  <a href="https://github.com/Ritesh-K-Upadhyay/xrg-utils/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Ritesh-K-Upadhyay/xrg-utils" alt="License" />
  </a>
</p>

A modern, lightweight, and tree-shakable collection of reusable utility functions for JavaScript and TypeScript, designed to simplify everyday development tasks.

## ✨ Features

-  **Tree-shakable**: Only include the code you use.
-  **Lightweight**: No external dependencies.
-  **TypeScript**: Written in TypeScript with full type support.
-  **Modern**: Uses modern JavaScript features.
-  **Well-documented**: Clear and concise documentation with examples.

## 🚀 Installation

```bash
npm install xrg-utils
```

## 🛠️ Usage

Import the utilities you need from `xrg-utils/utils`:

```typescript
import utils from "xrg-utils/utils";
```

---

### `pipeline`

A powerful data processing utility that allows you to chain operations like filtering, mapping, and sorting.

```typescript
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

---

### `generatePassword`

Generate a random password with a specified length.

```typescript
const password = utils.generatePassword(12); // Generates a 12-character password
```

---

### `getBase64`

Convert a file to a Base64 encoded string.

```typescript
// For files:
const fileBase64 = await utils.getBase64(file);
```

---

### `slug`

Convert a string to a URL-friendly slug.

```typescript
const urlSlug = utils.slug("Some String to Slugify"); // "some-string-to-slugify"
```

---

### `truncate`

Truncate a string to a specified length.

```typescript
const shortText = utils.truncate("Very long text here", 10);
```

---

### `withSearch`

A utility to search an array of strings or objects with a given search term.

```typescript
const searchableData = utils.withSearch({
   array: [
      "apple",
      { name: "banana" }, // object with top-level key
      { data: { id: "strawberry" } }, // object with deep key
      "grapes",
      { name: "orange" },
      { data: { id: "mango" } },
   ],
   searchTerm: "ap",
   key: "name", // try "name" or "" ,"data.id" for primitives
});
```

## 🙌 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to contribute to this project.

## 📄 License

This package is open-source and available under the [MIT License](https://github.com/Ritesh-K-Upadhyay/xrg-utils/blob/main/LICENSE).
