const o2 = {
    "maxByteLength": 137,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Int32Array(v4);
try { BigInt64Array.from(v6); } catch (e) {}
gc();
