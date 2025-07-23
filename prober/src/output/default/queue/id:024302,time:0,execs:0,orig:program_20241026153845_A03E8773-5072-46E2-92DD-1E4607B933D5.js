const v2 = new Uint8ClampedArray(4);
const v5 = new Int32Array(129);
function f6(a7) {
    return v5;
}
f6[Symbol.species] = f6;
const v10 = v2.subarray();
v10.constructor = f6;
v10.slice();
gc();
