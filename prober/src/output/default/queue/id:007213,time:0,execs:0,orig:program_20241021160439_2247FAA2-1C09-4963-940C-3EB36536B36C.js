function f0(a1, a2) {
    return a2;
}
const v4 = new Int32Array(Int32Array, f0, Int32Array);
v4.valueOf = f0;
v4.slice();
gc();
