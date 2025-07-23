const o2 = {
    "maxByteLength": 2147483648,
};
const v4 = new ArrayBuffer(64, o2);
const v6 = new Uint16Array(v4);
v6.includes();
gc();
