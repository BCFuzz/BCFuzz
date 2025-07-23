const o4 = {
    "maxByteLength": 65537,
};
const v6 = new ArrayBuffer(1175, o4);
const v7 = new Int32Array(v6, o4, 128);
createGlobalObject().Atomics.compareExchange(v7);
gc();
