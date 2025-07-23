const v2 = new Uint32Array(1000);
const v4 = new Float32Array();
const o7 = {
    "maxByteLength": 16,
};
const v8 = new SharedArrayBuffer(16, o7);
const v10 = new BigInt64Array(v8);
const v11 = v10.sort();
function f12(a13, a14) {
    try { a14.constructor(a14, a14); } catch (e) {}
    a14.byteLength;
    return o7;
}
v11.constructor = f12;
const v17 = v11.constructor;
v17(undefined, v17);
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
v17(v4, v11);
for (const v31 in v2) {
}
gc();
