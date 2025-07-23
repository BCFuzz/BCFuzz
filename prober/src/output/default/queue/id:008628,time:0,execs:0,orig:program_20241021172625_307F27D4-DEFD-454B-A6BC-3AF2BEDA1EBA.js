const v1 = new WeakMap();
const o4 = {
    "maxByteLength": 4096,
};
const v6 = new ArrayBuffer(4096, o4);
const v8 = new Int8Array(v6, Int8Array, v1);
v8[3131];
gc();
