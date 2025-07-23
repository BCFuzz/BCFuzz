const o2 = {
    "maxByteLength": 2147483647,
};
const v4 = new ArrayBuffer(1, o2);
const v6 = new Float32Array(v4);
const v8 = new Uint32Array();
v8.set(v6);
gc();
