function f0(a1, a2, a3) {
    a2--;
    return a2;
}
const v7 = new ArrayBuffer(4096);
const v9 = new Int8Array(v7);
v9.sort(f0);
gc();
