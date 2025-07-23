const v1 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
function f2(a3, a4) {
    const v6 = new Uint8ClampedArray(a4, a4, a4);
    return v6;
}
f2[Symbol.species] = f2;
v1.constructor = f2;
v1.subarray();
gc();
