function f0() {
    return f0;
}
for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const o13 = {
    "maxByteLength": 65537,
};
const v15 = new ArrayBuffer(1175, o13);
const v17 = new BigInt64Array(v15);
v17.toString = f0;
v17.subarray();
gc();
