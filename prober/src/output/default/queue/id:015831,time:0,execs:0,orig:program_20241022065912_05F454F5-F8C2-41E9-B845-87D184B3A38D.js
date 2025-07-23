function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = v2[1];
const v5 = new BigInt64Array(v3);
v5.fill(-2147483647n, v3);
gc();
