const o2 = {
    "maxByteLength": 268435439,
};
const v4 = new SharedArrayBuffer(1000, o2);
const v6 = new BigUint64Array(v4);
try { v6.with(268435439, 1000); } catch (e) {}
gc();
