const o0 = {
};
const o3 = {
    "maxByteLength": 536870912,
};
const v4 = new ArrayBuffer(o0, o3);
const v6 = new BigUint64Array(v4);
try { Int8Array.from(v6); } catch (e) {}
gc();
