const o2 = {
    "maxByteLength": 1073741824,
};
const v4 = new ArrayBuffer(1024, o2);
const v6 = new Uint32Array(v4, ArrayBuffer, ArrayBuffer);
v6[231] = v6;
gc();
