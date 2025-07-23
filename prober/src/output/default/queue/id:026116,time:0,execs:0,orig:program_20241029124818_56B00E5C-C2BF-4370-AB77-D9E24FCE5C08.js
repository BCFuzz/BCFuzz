const v2 = new Uint32Array(1000);
const v4 = new Float32Array();
const o7 = {
    "maxByteLength": 16,
};
const v9 = new SharedArrayBuffer(1, o7);
const v11 = new BigInt64Array(v9);
const v12 = v11.sort();
function f13(a14, a15) {
    try { a15.constructor(a15, a15); } catch (e) {}
    a15.byteLength;
    return v4;
}
v12.constructor = f13;
const v18 = v12.constructor;
const v20 = v18(v9, v18);
try { undefined.decodeURI(v18, v11, BigInt64Array, v20); } catch (e) {}
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
v18(v4, v12);
for (const v33 in v2) {
}
gc();
