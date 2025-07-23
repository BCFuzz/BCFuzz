const o2 = {
    "maxByteLength": 65537,
};
const v4 = new ArrayBuffer(1175, o2);
const v6 = new Uint32Array(v4);
createGlobalObject().Atomics.exchange(v6);
gc();
