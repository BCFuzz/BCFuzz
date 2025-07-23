const o3 = {
    "maxByteLength": 65537,
};
const v5 = new ArrayBuffer(1175, o3);
const v7 = new Int16Array(v5, Int16Array, 256);
createGlobalObject().Atomics.xor(v7);
gc();
