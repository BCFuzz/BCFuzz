const o2 = {
    "maxByteLength": 536870887,
};
const v4 = new SharedArrayBuffer(129, o2);
const v6 = new DataView(v4);
v6.setInt16();
gc();
