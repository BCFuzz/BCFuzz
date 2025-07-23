const o2 = {
    "maxByteLength": 1862,
};
const v5 = new ArrayBuffer(1862, o2);
const v6 = new Int16Array(v5);
try { BigUint64Array.from(v6); } catch (e) {}
gc();
