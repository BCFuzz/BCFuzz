const o2 = {
    "maxByteLength": 12,
};
const v4 = new SharedArrayBuffer(12, o2);
const v6 = new Int32Array(v4);
try { v6.findIndex(SharedArrayBuffer); } catch (e) {}
gc();
