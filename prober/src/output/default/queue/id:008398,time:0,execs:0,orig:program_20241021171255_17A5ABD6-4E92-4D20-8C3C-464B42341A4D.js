const o2 = {
    "maxByteLength": 2580,
};
const v4 = new SharedArrayBuffer(2580, o2);
const v6 = new Uint8Array(v4);
v6.byteLength;
gc();
