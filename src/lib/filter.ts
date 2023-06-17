export {};

declare global {
  interface Array<T> {
    filterNotNullish<T>(): T[];
  }
}

Array.prototype.filterNotNullish = function <T>(): T[] {

  return (this as Array<T | null | undefined>).filter((x) => x != null && x!= undefined) as T[];
};