const o2 = {
    "maxByteLength": 2000,
};
const v4 = new ArrayBuffer(8, o2);
const v6 = new Uint32Array(v4);
v6.sort();
gc();
