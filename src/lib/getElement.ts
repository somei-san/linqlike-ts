export {};

declare global {
  interface Array<T> {
    /**
     * 渡された条件に一致する要素が一つの場合その要素を返します。
     * 該当なし or ２つ以上の場合はエラーをスローします
     * @template T
     * @param {(arg: T) => boolean} predicate
     * @return {*}  {T}
     * @memberof Array
     */
    single<T>(predicate: (arg: T) => boolean): T;

    /**
     * 渡された条件に一致する要素が一つの場合その要素を返します。
     * 該当なし or ２つ以上の場合はnullを返します
     * @template T
     * @param {(arg: T) => boolean} predicate
     * @return {*}  {T}
     * @memberof Array
     */
    singleOrNull<T>(predicate: (arg: T) => boolean): T | null;

    /** Returns the first element that satisfies the predicate */
    first(predicate: (element: T) => boolean): T;
    /** Returns the last element that satisfies the predicate */
    last(predicate: (element: T) => boolean): T;
  }
}

Array.prototype.single = function <T>(predicate: (element: T) => boolean): T {
  const source = this as T[];

  const matched = source.filter((x) => predicate(x));

  if (matched.length == 0) throw Error("該当する値が一つもありません");

  if (matched.length >= 2) throw Error("該当する値が複数あります");

  return matched[0];
};

Array.prototype.singleOrNull = function <T>(
  predicate: (element: T) => boolean
): T | null {
  const source = this as T[];

  const matched = source.filter((x) => predicate(x));

  if (matched.length == 1) return matched[0];

  return null;
};

Array.prototype.first = function <T>(predicate: (element: T) => boolean): T {
  for (var i: number = 0; i < this.length; i++) {
    if (predicate(this[i])) return this[i];
  }

  throw new Error("該当するデータが存在しません");
};
Array.prototype.last = function <T>(predicate: (element: T) => boolean): T {
  for (var i: number = this.length; i-- > 0; ) {
    if (predicate(this[i])) return this[i];
  }

  throw new Error("該当するデータが存在しません");
};
