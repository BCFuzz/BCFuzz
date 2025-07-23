for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    a16.__proto__ = this;
}
const v17 = new F13(-9007199254740990, 1073741825);
const v18 = v17.constructor;
const v19 = new v18(BigUint64Array, BigUint64Array);
const v20 = new BigUint64Array(v19, v18, 1073741825);
v20.slice(1073741825, -9007199254740990);
gc();
