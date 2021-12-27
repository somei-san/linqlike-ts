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
    only<T>(predicate: (arg: T) => boolean): T;
  }
}

Array.prototype.only = function <T>(predicate: (arg: T) => boolean): T {
  const source = this as T[];

  const matched = source.filter((x) => predicate(x));

  if (matched.length == 0) throw Error("該当する値が一つもありません");

  if (matched.length >= 2) throw Error("該当する値が複数あります");

  return matched[0];
};
