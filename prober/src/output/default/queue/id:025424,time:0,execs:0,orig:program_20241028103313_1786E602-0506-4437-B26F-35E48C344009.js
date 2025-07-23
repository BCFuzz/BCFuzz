const o3 = {
    "maxByteLength": 150,
};
const v5 = new ArrayBuffer(0, o3);
const v7 = new Uint8Array(v5);
const v8 = new BigUint64Array();
try { v8.set(v7); } catch (e) {}
gc();
