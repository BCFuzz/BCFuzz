const o2 = {
    "maxByteLength": 512,
};
const v4 = new SharedArrayBuffer(512, o2);
const v6 = new Uint32Array(v4);
v6.copyWithin(512, 512, 512);
gc();
