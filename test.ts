var list = [1, 9, 2, 8, 3, 7, 4, 6, 5];

console.log(list);
console.log(list.reduce((p, x) => p + x));

console.log(list.find((x) => x == 50));
console.log(list.every((x) => x < 20));
