const v0 = [4096,268435456];
const o3 = {
    "maxByteLength": 12,
};
const v5 = new ArrayBuffer(5, o3);
const v7 = new Int32Array(v5);
try { v7.set(v0); } catch (e) {}
gc();
