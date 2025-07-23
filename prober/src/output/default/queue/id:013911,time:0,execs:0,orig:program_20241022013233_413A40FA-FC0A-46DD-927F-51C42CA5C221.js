const o2 = {
    "maxByteLength": 10,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Int32Array(v4);
v6.slice();
gc();
