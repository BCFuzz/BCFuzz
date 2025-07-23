const o3 = {
    "maxByteLength": 5,
};
const v5 = new ArrayBuffer(5, o3);
const v7 = new Int32Array(v5);
try { v7.set(BigInt64Array); } catch (e) {}
gc();
