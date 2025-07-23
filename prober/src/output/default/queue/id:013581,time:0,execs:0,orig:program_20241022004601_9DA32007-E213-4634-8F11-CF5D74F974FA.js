const o2 = {
    "maxByteLength": 5,
};
const v4 = new SharedArrayBuffer(5, o2);
const v6 = new Float32Array(v4);
v6.lastIndexOf(v6, 5);
gc();
