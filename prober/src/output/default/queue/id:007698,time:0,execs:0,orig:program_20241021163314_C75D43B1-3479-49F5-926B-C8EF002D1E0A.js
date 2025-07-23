function f1() {
    return f1;
}
const v3 = new Int8Array(9);
v3.subarray();
v3.sort(f1);
gc();
