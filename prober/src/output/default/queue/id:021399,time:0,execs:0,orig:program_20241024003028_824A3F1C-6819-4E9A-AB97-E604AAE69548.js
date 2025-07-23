const v1 = new Int32Array(Int32Array);
function f2(a3) {
    return f2;
}
f2[Symbol.species] = Int32Array;
v1.constructor = f2;
v1.subarray();
gc();
