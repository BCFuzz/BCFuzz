const o2 = {
    "maxByteLength": 11,
};
const v4 = new SharedArrayBuffer(11, o2);
const v6 = new Int16Array(v4);
const v7 = v6.subarray(11, 11);
try { v7.set(); } catch (e) {}
gc();
