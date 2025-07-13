export function generatePassword(length = 12) {
   const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const lowerCase = "abcdefghijklmnopqrstuvwxyz";
   const numbers = "0123456789";
   const symbols = "@#";

   const allChars = upperCase + lowerCase + numbers + symbols;

   let password = "";
   password += upperCase[Math.floor(Math.random() * upperCase.length)];
   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
   password += numbers[Math.floor(Math.random() * numbers.length)];
   password += symbols[Math.floor(Math.random() * symbols.length)];

   for (let i = 4; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
   }

   // Shuffle to prevent predictable first 4 chars
   return password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
}
