const o2 = {
    "maxByteLength": 2905779204,
};
const v4 = new ArrayBuffer(424, o2);
const v6 = new Int8Array(v4);
try { new BigInt64Array(v6); } catch (e) {}
gc();
