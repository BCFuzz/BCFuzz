const o3 = {
    "maxByteLength": 268435456,
};
o3.c = o3;
const v5 = new SharedArrayBuffer(10, o3);
v5.slice(Array, Array);
const v8 = new Int8Array(v5);
v8.slice();
gc();
