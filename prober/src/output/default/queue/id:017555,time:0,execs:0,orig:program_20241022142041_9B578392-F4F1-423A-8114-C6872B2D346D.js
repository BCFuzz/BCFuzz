function f2(a3, a4) {
    return -1000000.0;
}
Int32Array.toString = f2;
Int32Array[0] = Int32Array;
const v5 = new Int32Array(Int32Array);
const t6 = createGlobalObject().Float16Array;
new t6(v5);
gc();
