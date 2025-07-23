function f0(a1, a2, a3, a4) {
    return a3.lastIndexOf(a1);
}
const v8 = new BigUint64Array(15);
v8.some(f0);
gc();
