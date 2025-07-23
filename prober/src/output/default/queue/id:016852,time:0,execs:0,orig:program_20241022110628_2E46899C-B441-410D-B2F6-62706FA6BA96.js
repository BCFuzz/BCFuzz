const o2 = {
    "maxByteLength": 118,
};
const v3 = new SharedArrayBuffer(118, o2);
const v5 = new Float32Array(v3);
v5.sort().with();
gc();
