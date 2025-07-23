const o2 = {
    "maxByteLength": 16,
};
const v4 = new ArrayBuffer(16, o2);
const v6 = new Uint32Array(v4);
try { BigInt64Array.from(v6); } catch (e) {}
gc();
