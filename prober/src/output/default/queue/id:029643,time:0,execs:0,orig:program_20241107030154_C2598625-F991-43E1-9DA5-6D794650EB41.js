const o5 = {
    "maxByteLength": 824,
};
const v7 = new ArrayBuffer(19, o5);
const v8 = new Int32Array(v7, Int16Array, 3);
v7.resize();
v8[256];
gc();
