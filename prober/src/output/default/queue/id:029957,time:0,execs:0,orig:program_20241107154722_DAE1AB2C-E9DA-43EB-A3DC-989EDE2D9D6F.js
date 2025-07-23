const o2 = {
    "maxByteLength": 65537,
};
const v4 = new ArrayBuffer(1175, o2);
const v6 = new Int8Array(v4, v4, 1175);
createGlobalObject().Atomics.sub(v6);
gc();
