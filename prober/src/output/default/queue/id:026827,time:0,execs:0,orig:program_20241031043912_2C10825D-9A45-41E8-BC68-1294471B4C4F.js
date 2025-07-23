const o2 = {
    "maxByteLength": 10,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Int32Array(v4);
function f7(a8) {
    return o2;
}
function f9() {
    const v12 = new Uint8ClampedArray(108);
    v12.buffer;
    return v12;
}
f7[Symbol.species] = f9;
v6.constructor = f7;
v6.slice();
gc();
