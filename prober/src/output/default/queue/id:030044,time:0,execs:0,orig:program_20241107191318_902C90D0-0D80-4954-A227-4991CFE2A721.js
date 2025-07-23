const o4 = {
    "maxByteLength": 760,
};
const v6 = new ArrayBuffer(512, o4);
const v7 = new Int8Array(v6, 5);
v6.resize();
v7.byteOffset &= 760;
gc();
