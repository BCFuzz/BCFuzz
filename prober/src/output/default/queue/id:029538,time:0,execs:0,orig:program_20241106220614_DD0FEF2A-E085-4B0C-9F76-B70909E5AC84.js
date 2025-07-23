const o2 = {
    "maxByteLength": 65537,
};
const v4 = new ArrayBuffer(1175, o2);
const v6 = new BigInt64Array(v4);
const v9 = createGlobalObject().Atomics;
try { v9.sub(v6); } catch (e) {}
gc();
