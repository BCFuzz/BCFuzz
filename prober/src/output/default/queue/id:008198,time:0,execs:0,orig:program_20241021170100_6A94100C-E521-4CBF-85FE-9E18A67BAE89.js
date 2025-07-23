const o2 = {
    "maxByteLength": 4294967296,
};
const v4 = new ArrayBuffer(512, o2);
new ArrayBuffer(512, v4);
gc();
