const o2 = {
    "maxByteLength": 65535,
};
const v4 = new ArrayBuffer(256, o2);
new Uint16Array(v4);
gc();
