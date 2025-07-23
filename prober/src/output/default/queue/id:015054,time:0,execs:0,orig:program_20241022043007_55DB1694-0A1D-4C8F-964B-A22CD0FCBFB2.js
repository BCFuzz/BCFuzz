const o2 = {
    "maxByteLength": 1335,
};
const v4 = new SharedArrayBuffer(64, o2);
const v6 = new Uint32Array(v4);
v6.fill(v4);
gc();
