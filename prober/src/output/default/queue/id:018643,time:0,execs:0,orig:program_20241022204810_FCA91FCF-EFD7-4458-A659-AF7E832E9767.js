function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this[Symbol.toStringTag] = a8;
}
const v11 = new F3(130, 1692, F3, BigInt64Array);
const v13 = this.constructor;
const v14 = v13.assign(v13);
v14.defineProperties(v14, v11);
gc();
