const o4 = {
    "maxByteLength": 65537,
};
const v6 = new ArrayBuffer(1175, o4);
const v8 = new Int16Array(v6, Uint32Array, 4);
createGlobalObject().Atomics.add(v8);
gc();
