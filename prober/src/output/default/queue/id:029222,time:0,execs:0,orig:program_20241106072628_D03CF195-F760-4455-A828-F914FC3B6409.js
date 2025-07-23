const o3 = {
    "maxByteLength": 65537,
};
const v5 = new ArrayBuffer(65537, o3);
const v6 = new Int8Array(v5);
createGlobalObject().Atomics.load(v6);
gc();
