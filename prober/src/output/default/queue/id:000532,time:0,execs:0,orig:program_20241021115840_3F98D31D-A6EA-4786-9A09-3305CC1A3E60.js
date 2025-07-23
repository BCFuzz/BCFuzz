const o2 = {
    "maxByteLength": 2344,
};
const v4 = new ArrayBuffer(512, o2);
new Uint32Array(v4);
gc();
