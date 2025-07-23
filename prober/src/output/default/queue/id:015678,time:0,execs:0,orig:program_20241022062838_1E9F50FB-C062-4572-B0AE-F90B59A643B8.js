const v2 = new Float32Array(64, 64, 64);
const o5 = {
    "maxByteLength": 16,
};
const v7 = new SharedArrayBuffer(1, o5);
const v9 = new BigInt64Array(v7);
const v10 = v9.sort();
function f11(a12, a13) {
    return a13.subarray(a12, 64);
}
v10.constructor = f11;
const t11 = v10.constructor;
t11(v2, v10);
gc();
