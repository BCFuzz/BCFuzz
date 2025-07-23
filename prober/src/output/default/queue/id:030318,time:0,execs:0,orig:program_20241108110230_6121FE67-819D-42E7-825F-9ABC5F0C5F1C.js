const o3 = {
    "maxByteLength": 20237,
};
const v5 = new SharedArrayBuffer(1175, o3);
const v7 = new BigInt64Array(v5);
const v10 = createGlobalObject().Atomics;
v10.exchange(v7, v10, -256n);
gc();
