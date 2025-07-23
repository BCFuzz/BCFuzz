const v2 = new Int8Array(129);
function f3(a4) {
    return v2;
}
f3[Symbol.species] = f3;
const v8 = new Uint32Array(Uint32Array);
const v9 = v8.subarray();
v9.constructor = f3;
v9.slice();
gc();
