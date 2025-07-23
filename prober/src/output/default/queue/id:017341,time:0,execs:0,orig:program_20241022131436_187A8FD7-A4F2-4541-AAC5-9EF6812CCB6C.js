const v1 = new Uint8Array(Uint8Array, Uint8Array);
const o5 = {
    "maxByteLength": 12,
};
const v7 = new ArrayBuffer(5, o5);
const v8 = new Int8Array(v7);
function f9() {
    return v1;
}
f9[Symbol.species] = f9;
v8.constructor = f9;
v8.subarray();
gc();
