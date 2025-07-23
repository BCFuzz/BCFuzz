const o2 = {
    "maxByteLength": 5,
};
const v4 = new ArrayBuffer(5, o2);
v4.resize();
const v7 = new Int32Array(v4);
v7[0] = v7;
gc();
