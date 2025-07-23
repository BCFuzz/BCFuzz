const o5 = {
    "maxByteLength": 760,
};
const v7 = new ArrayBuffer(512, o5);
const v8 = new Int8Array(v7, 5);
v7.resize();
v8[342] = 8;
gc();
