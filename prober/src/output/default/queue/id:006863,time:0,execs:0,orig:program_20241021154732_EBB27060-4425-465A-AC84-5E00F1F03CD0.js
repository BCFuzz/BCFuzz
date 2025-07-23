const o2 = {
    "maxByteLength": 847477012,
};
const v4 = new ArrayBuffer(15, o2);
const v6 = new DataView(v4);
v6.getFloat32(v6);
gc();
