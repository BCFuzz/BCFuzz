const v2 = new Int32Array(1073741824);
function f3(a4) {
    a4.byteLength;
    return v2;
}
f3[Symbol.species] = f3;
v2.constructor = f3;
v2.subarray();
gc();
