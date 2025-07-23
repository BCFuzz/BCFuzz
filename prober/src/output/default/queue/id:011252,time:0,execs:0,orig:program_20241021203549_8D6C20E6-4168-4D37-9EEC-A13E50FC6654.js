const o3 = {
    "maxByteLength": 268435441,
};
const v4 = new SharedArrayBuffer(11, o3);
const v6 = new Uint32Array(v4);
v6.sort();
gc();
