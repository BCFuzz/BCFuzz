const o2 = {
    "maxByteLength": 11,
};
const v4 = new ArrayBuffer(11, o2);
v4.resize();
const v7 = new Uint16Array(v4);
v7[1] = v7;
gc();
