const o2 = {
    "maxByteLength": 10,
};
const v4 = new ArrayBuffer(10, o2);
const v6 = new Uint8Array(v4);
v6.reverse();
gc();
