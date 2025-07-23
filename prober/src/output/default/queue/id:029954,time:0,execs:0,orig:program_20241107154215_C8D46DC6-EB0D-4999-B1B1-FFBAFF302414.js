const o3 = {
    "maxByteLength": 65537,
};
const v5 = new ArrayBuffer(1175, o3);
const v7 = new BigInt64Array(v5, BigUint64Array, BigInt64Array);
const v10 = createGlobalObject().Atomics;
try { v10.wait(v7); } catch (e) {}
gc();
