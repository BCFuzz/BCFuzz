const o2 = {
    "maxByteLength": 268435439,
};
const v4 = new ArrayBuffer(3449, o2);
const v6 = new Float32Array(v4);
v4.transfer();
const v10 = createGlobalObject().Atomics;
try { v10.load(v6); } catch (e) {}
gc();
