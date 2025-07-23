const o2 = {
    "maxByteLength": 268435439,
};
const v4 = new ArrayBuffer(3449, o2);
const v6 = new Float32Array(v4);
const v9 = createGlobalObject().Atomics;
try { v9.load(v6); } catch (e) {}
gc();
