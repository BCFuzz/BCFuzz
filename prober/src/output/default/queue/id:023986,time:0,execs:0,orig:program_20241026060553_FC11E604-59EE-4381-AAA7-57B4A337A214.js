const o2 = {
    "maxByteLength": 4294967296,
};
const v4 = new SharedArrayBuffer(10, o2);
const v6 = new BigInt64Array(v4);
const v8 = new Float64Array();
try { v8.set(v6); } catch (e) {}
gc();
