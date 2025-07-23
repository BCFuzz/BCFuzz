function f0() {
    function* f1(a2, a3) {
        return a3;
    }
    const v6 = new BigInt64Array(1024);
    v6.toSorted(f1);
    return 1024;
}
const v10 = new BigInt64Array(16);
v10.toSorted(f0);
gc();
