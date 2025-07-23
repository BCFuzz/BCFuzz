const o2 = {
    "maxByteLength": 65535,
};
const v4 = new ArrayBuffer(12, o2);
const v6 = new Uint32Array(v4);
const v7 = v6.subarray();
const v9 = new BigUint64Array(o2, 12, 65535);
try { v9.set(v7); } catch (e) {}
gc();
