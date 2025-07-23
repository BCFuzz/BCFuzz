const o3 = {
    "maxByteLength": 65537,
};
const v5 = new ArrayBuffer(1175, o3);
const v6 = new Int32Array(v5);
const v9 = createGlobalObject().Atomics;
try { v9.waitAsync(v6); } catch (e) {}
gc();
