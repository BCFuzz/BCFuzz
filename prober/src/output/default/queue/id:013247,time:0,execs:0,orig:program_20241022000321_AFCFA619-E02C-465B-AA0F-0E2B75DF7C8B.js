const o2 = {
    "maxByteLength": 16,
};
const v4 = new SharedArrayBuffer(1, o2);
const v6 = new BigInt64Array(v4);
const v7 = v6.sort();
try { v7.fill(BigInt64Array); } catch (e) {}
gc();
