const o3 = {
    "maxByteLength": 1024,
};
const v5 = new ArrayBuffer(16, o3);
const v7 = new BigUint64Array(v5);
try { Uint32Array.from(v7); } catch (e) {}
gc();
