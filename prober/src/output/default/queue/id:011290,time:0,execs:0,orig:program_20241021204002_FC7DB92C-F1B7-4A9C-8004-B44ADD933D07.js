const o2 = {
    "maxByteLength": 512,
};
const v4 = new SharedArrayBuffer(5, o2);
const v6 = new Uint16Array(v4);
v6[8];
gc();
