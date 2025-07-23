const o2 = {
    "maxByteLength": 2173319823,
};
const v4 = new ArrayBuffer(10, o2);
const v6 = new Int16Array(v4);
v6.buffer;
gc();
