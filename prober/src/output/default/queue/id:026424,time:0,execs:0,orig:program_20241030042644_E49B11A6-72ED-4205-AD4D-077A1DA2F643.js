const o2 = {
    "maxByteLength": 6,
};
const v4 = new SharedArrayBuffer(6, o2);
const v6 = new BigUint64Array(v4);
const v7 = v6.sort();
try { Uint8Array.from(v7); } catch (e) {}
gc();
