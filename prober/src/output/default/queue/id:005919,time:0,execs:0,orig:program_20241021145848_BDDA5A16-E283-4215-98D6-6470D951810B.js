const o2 = {
    "maxByteLength": 256,
};
const v4 = new SharedArrayBuffer(5, o2);
v4.grow(256);
const v7 = new DataView(v4);
v7.setInt8(5, 5);
gc();
