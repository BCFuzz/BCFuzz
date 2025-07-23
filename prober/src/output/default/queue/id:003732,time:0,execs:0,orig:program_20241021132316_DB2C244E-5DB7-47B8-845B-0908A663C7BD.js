function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v5 = v4.constructor;
const v7 = new BigUint64Array();
v7.set(v7, v5);
gc();
