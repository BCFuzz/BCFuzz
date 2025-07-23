const o2 = {
    "maxByteLength": 11,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Uint32Array(v4);
v4.transfer();
const o8 = {
    ...v6,
};
gc();
