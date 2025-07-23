const v1 = new Uint16Array();
const o4 = {
    "maxByteLength": 4294967296,
};
const v6 = new SharedArrayBuffer(10, o4);
const v8 = new BigInt64Array(v6);
try { v1.set(v8); } catch (e) {}
gc();
