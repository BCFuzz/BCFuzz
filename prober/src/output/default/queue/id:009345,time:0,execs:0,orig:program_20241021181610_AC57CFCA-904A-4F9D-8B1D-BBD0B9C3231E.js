const o2 = {
    "maxByteLength": 1309,
};
const v4 = new SharedArrayBuffer(1309, o2);
const v6 = new Uint32Array(v4);
v6.set(o2);
gc();
