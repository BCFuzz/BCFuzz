function f0() {
    return f0;
}
let v1 = 64;
v1++;
const v4 = new BigUint64Array(v1);
v4.toSorted(f0);
gc();
