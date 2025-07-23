const o2 = {
    "maxByteLength": 4096,
};
const v4 = new ArrayBuffer(4096, o2);
v4.resize();
const v7 = new Int8Array(v4);
v7[3131];
gc();
