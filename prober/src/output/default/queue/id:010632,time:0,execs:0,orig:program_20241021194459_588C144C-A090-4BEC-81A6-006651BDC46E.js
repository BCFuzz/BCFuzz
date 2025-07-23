const o2 = {
    "maxByteLength": 10000,
};
const v4 = new SharedArrayBuffer(1024, o2);
const v6 = new Uint32Array(v4);
v6[793] = v6;
gc();
