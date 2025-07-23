function f0() {
    return f0;
}
const v3 = new Int8Array(9);
v3.sort(f0);
gc();
