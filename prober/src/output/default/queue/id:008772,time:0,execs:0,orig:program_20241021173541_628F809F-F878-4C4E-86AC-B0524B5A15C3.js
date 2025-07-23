function f0() {
    return f0;
}
const v3 = new BigUint64Array(64);
v3.toSorted(f0);
gc();
