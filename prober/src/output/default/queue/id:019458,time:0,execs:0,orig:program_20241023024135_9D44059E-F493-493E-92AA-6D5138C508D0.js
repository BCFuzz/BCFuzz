function f0() {
    return f0;
}
const o3 = {
    "maxByteLength": 1723344706,
};
const v5 = new ArrayBuffer(8, o3);
const v7 = new BigInt64Array(v5, o3, f0);
delete v7[0];
gc();
