const o2 = {
    "maxByteLength": 1036675683,
};
const v4 = new SharedArrayBuffer(10, o2);
const v6 = new BigInt64Array(v4);
const v8 = new Uint8Array();
try { v8.set(v6); } catch (e) {}
gc();
