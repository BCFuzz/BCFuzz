const o2 = {
    "maxByteLength": 1000,
};
const v4 = new ArrayBuffer(512, o2);
const v6 = new Int32Array(v4);
v6.with();
gc();
