const o2 = {
    "maxByteLength": 138,
};
const v4 = new SharedArrayBuffer(12, o2);
const v6 = new Uint8ClampedArray(v4);
try { v6.sort(SharedArrayBuffer); } catch (e) {}
gc();
