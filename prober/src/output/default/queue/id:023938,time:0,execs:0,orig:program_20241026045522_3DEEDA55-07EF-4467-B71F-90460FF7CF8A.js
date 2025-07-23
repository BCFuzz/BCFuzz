const v2 = new Uint32Array(1000);
const v4 = new Float32Array(1000, 1000);
const o7 = {
    "maxByteLength": 16,
};
const v9 = new SharedArrayBuffer(1, o7);
const v11 = new BigInt64Array(v9);
const v12 = v11.sort();
function f13(a14, a15) {
    let v16;
    try { v16 = a15.constructor(a15, a15); } catch (e) {}
    a15.byteLength;
    return v16;
}
v12.constructor = f13;
const v18 = v12.constructor;
v18(v9, v18);
v18(v4, v12);
for (const v21 in v2) {
}
gc();
