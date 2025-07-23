const o3 = {
    "maxByteLength": 65537,
};
const v5 = new ArrayBuffer(1175, o3);
const v6 = new Int32Array(v5);
createGlobalObject().Atomics.store(v6);
gc();
