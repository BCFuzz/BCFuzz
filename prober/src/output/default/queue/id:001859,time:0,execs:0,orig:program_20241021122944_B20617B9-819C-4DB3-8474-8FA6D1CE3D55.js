function f0() {
    return f0;
}
const v3 = new Int8Array(1);
v3.toSorted(f0);
gc();
