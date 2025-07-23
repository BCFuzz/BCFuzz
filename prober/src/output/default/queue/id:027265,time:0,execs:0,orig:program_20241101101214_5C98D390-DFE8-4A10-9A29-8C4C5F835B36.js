const v1 = new Float32Array();
function f2(a3, a4) {
    return a3;
}
f2[Symbol.species] = Float32Array;
v1.constructor = f2;
v1.subarray();
gc();
