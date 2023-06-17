import "../lib/filter";

test(`null や undefined が取り除かれた array が帰ってくる`, () => {
  const list = [1, 2, null, 3, 4, undefined, 5, 6];

const actual = list.filterNotNullish()

  expect(actual).toBeInstanceOf(Array<number>);
  expect(actual).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

var list = [1, 9, 2, 8, 3, 7, 4, 6, 5, 1];

console.log(list);

console.log(list.reduce((p, x) => p + x));

console.log(list.find((x) => x == 50));
console.log(list.every((x) => x < 20));

try {
  console.log(list.single((x) => x == 1));
} catch (e) {
  console.log("れいがいだよ！" + e);
}

/*
type Sample = {
  value: number;
};

var test1: Sample = { value: 1 };
var test2: Sample = { value: 2 };

if (test1 == test2) throw new Error("");
*/
