const v2 = new Float32Array();
const o5 = {
    "maxByteLength": 16,
};
const v7 = new SharedArrayBuffer(1, o5);
const v9 = new BigInt64Array(v7);
const v10 = v9.sort();
function f11(a12, a13) {
    try { a13.constructor(a13, a13); } catch (e) {}
    a13.byteLength;
    [268435456];
    return a13;
}
v10.constructor = f11;
const v17 = v10.constructor;
v17(v7, v17);
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
v17(v2, v10);
gc();
