const o4 = {
    "maxByteLength": 65537,
};
const v6 = new ArrayBuffer(1175, o4);
const v7 = new Int16Array(v6, o4, 7);
createGlobalObject().Atomics.or(v7);
gc();
