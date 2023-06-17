import "../lib/filter";

test(`null や undefined が取り除かれた array が帰ってくる`, () => {
  const list = [1, 2, null, 3, 4, undefined, 5, 6];

const actual = list.filterNotNullish()

  expect(actual).toBeInstanceOf(Array<number>);
  expect(actual).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
