const o2 = {
    "maxByteLength": 416,
};
const v4 = new SharedArrayBuffer(116, o2);
const v5 = v4.grow;
try { v5.apply(v4); } catch (e) {}
gc();
