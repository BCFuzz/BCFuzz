const o2 = {
    "maxByteLength": 4,
};
const v4 = new ArrayBuffer(4, o2);
const v6 = new BigUint64Array(v4);
try { Int16Array.from(v6); } catch (e) {}
gc();
