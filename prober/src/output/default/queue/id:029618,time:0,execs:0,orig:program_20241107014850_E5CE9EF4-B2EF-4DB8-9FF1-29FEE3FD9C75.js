const o4 = {
    "maxByteLength": 11,
};
const v6 = new ArrayBuffer(5, o4);
const v7 = new Uint8ClampedArray(v6);
v6.transfer();
v7.length |= -42630997;
gc();
