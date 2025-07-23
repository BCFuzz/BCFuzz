const o3 = {
    "maxByteLength": 65537,
};
const v5 = new ArrayBuffer(1175, o3);
const v7 = new BigUint64Array(v5);
const v10 = createGlobalObject().Atomics;
v10.exchange(v7, v10, -256n);
gc();
