const o3 = {
    "maxByteLength": 3606,
};
const v5 = new SharedArrayBuffer(2399, o3);
const v7 = new BigInt64Array(v5);
try { v7.reduceRight(Uint32Array); } catch (e) {}
gc();
