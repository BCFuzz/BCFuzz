const v1 = new Float32Array(Float32Array);
const o4 = {
    "maxByteLength": 16,
};
const v6 = new SharedArrayBuffer(1, o4);
const v8 = new BigInt64Array(v6);
const v9 = v8.sort();
function f10(a11, a12) {
    try { a12.constructor(a12, a12); } catch (e) {}
    return a12.byteLength;
}
v9.constructor = f10;
const v15 = v9.constructor;
v15(v6, v15);
v15(v1, v9);
gc();
