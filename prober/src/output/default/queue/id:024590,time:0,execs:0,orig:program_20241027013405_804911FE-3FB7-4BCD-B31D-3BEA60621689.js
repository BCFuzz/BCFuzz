const v2 = new Int8Array();
v2.buffer >>>= 2313;
const o5 = {
    "maxByteLength": 1000,
};
const v7 = new SharedArrayBuffer(7, o5);
const v9 = new Int16Array(v7);
v9.set(v2);
gc();
