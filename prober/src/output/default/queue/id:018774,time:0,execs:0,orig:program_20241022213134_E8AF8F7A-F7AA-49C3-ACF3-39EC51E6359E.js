function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.__proto__ = this;
}
const v7 = new F3(-9007199254740990, 1073741825);
const t5 = v7.constructor;
new t5(BigUint64Array, BigUint64Array);
const v10 = new BigUint64Array(v7, 1073741825, 1073741825);
v10.subarray();
gc();
