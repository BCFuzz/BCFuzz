const o2 = {
    "maxByteLength": 65537,
};
const v4 = new ArrayBuffer(1175, o2);
const v6 = new BigInt64Array(v4);
createGlobalObject().Atomics.load(v6);
gc();
