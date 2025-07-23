function f0() {
    return f0;
}
const o3 = {
    "maxByteLength": 4010739806,
};
const v5 = new SharedArrayBuffer(4096, o3);
const v7 = new BigUint64Array(v5);
v7.sort(f0);
gc();
