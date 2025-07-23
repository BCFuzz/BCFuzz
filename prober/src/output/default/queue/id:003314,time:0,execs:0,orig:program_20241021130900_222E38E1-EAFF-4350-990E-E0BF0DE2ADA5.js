const o2 = {
    "maxByteLength": 268435441,
};
const v4 = new SharedArrayBuffer(56, o2);
const v6 = new Uint32Array(v4);
v6.d = v6;
gc();
