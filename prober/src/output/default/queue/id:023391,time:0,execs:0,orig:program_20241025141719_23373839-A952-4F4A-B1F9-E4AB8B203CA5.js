const o2 = {
    "maxByteLength": 1024,
};
const v4 = new ArrayBuffer(16, o2);
const v6 = new BigUint64Array(v4);
try { Float32Array.from(v6); } catch (e) {}
gc();
