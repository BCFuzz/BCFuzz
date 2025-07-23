function f2(a3) {
    return 1288;
}
Int32Array.valueOf = f2;
Int32Array[0] = Int32Array;
const v4 = new Int32Array(Int32Array);
const t6 = createGlobalObject().Float16Array;
new t6(v4);
gc();
