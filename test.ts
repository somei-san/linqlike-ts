import "./linq";

var list = [1, 9, 2, 8, 3, 7, 4, 6, 5, 1];

console.log(list);

console.log(list.reduce((p, x) => p + x));

console.log(list.find((x) => x == 50));
console.log(list.every((x) => x < 20));

try {
  console.log(list.only((x) => x == 1));
} catch (e) {
  console.log("れいがいだよ！" + e);
}

class Sample {
  value: number;
}

var test1: Sample;
var test2: Sample;

if (test1 == test2) throw new Error("sada");
