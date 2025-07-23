const o2 = {
    "maxByteLength": 11,
};
const v4 = new ArrayBuffer(11, o2);
const v6 = new Uint16Array(v4);
v6.length;
gc();
