const o2 = {
    "maxByteLength": 3135,
};
const v4 = new SharedArrayBuffer(3135, o2);
const v6 = new Uint8ClampedArray(v4);
delete v6[2755];
gc();
