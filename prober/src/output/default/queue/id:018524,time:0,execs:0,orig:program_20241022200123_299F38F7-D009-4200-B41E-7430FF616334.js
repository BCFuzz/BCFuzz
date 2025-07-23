const o3 = {
    "maxByteLength": 11,
};
const v5 = new SharedArrayBuffer(11, o3);
const v7 = new Uint8Array(v5);
function f8(a9, a10) {
    return a9;
}
function f11() {
    const v12 = new Int16Array(v7);
    return v12;
}
f8[Symbol.species] = f11;
v7.constructor = f8;
v7.subarray(11);
gc();
