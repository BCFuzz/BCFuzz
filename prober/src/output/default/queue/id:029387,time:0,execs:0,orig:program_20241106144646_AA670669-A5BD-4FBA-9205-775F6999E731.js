const o2 = {
    "maxByteLength": 65537,
};
const v4 = new ArrayBuffer(1175, o2);
const v6 = new Int16Array(v4);
createGlobalObject().Atomics.compareExchange(v6);
gc();
