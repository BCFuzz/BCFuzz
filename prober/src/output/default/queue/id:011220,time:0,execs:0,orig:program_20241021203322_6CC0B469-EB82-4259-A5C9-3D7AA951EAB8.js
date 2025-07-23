function f0() {
    return f0;
}
const o3 = {
    "maxByteLength": 253,
};
const v5 = new SharedArrayBuffer(1, o3);
const v7 = new BigInt64Array(v5);
v7.sort().set(f0);
gc();
