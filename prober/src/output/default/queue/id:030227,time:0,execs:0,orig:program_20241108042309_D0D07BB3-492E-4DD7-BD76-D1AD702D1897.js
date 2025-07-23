const o3 = {
    "maxByteLength": 65537,
};
const v5 = new ArrayBuffer(1175, o3);
const v7 = new Uint32Array(v5, o3, 7);
createGlobalObject().Atomics.sub(v7);
gc();
