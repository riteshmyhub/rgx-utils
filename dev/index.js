const utils = require("xrg-utils/utils");

const x = utils.withSearch({
   array: [
      "apple", // primitive
      { name: "banana" }, // object with top-level key
      { data: { id: "strawberry" } }, // object with deep key
      "grapes",
      { name: "orange" },
      { data: { id: "mango" } },
   ],
   searchTerm: "pt",
   key: "", // try "name" or "" for primitives
});

console.log(x);
