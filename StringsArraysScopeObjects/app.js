let text = "Edin Zecevic";

console.log(text);

let result = text.length;

console.log(result);
console.log(text.length);

console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());

console.log(text.charAt(0));

for (let i = 0; i < text.length; i++) {
  console.log(text.charAt(i));
}

console.log(text.charAt(text.length - 1));
console.log(text.indexOf("e"));

console.log(text.startsWith("Edin"));
console.log(text.endsWith("c"));

console.log(text.toLocaleLowerCase().startsWith("edin"));

console.log(text.slice(0, 7));
console.log(text.slice(-5)); //from behind 5 letters places
