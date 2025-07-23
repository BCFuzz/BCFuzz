const v1 = new Int8Array();
const o4 = {
    "maxByteLength": 1000,
};
const v6 = new SharedArrayBuffer(7, o4);
const v8 = new Int16Array(v6);
v8.set(v1);
gc();
