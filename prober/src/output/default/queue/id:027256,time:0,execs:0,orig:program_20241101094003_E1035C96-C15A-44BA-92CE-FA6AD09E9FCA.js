const o2 = {
    "maxByteLength": 256,
};
const v4 = new SharedArrayBuffer(256, o2);
const v6 = new Int16Array(v4);
const v8 = new BigInt64Array();
const v9 = v8.fill(v8);
try { v9.set(v6); } catch (e) {}
gc();
