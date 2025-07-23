const o2 = {
    "maxByteLength": 268435456,
};
const v4 = new SharedArrayBuffer(2500, o2);
const v6 = new Float32Array(v4);
v6.reverse();
gc();
