const o2 = {
    "maxByteLength": 2414,
};
const v4 = new ArrayBuffer(4, o2);
const v6 = new Float32Array(v4);
const v8 = new BigInt64Array();
try { v8.set(v6); } catch (e) {}
gc();
