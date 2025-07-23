const o3 = {
    "maxByteLength": 1953043059,
};
const v5 = new ArrayBuffer(7, o3);
const v7 = new Uint8Array(v5);
try { BigInt64Array.from(v7); } catch (e) {}
gc();
