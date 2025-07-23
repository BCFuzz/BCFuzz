const o3 = {
    "maxByteLength": 106,
};
const v5 = new SharedArrayBuffer(7, o3);
const v6 = new Int8Array(v5);
createGlobalObject().Atomics.add(v6);
gc();
