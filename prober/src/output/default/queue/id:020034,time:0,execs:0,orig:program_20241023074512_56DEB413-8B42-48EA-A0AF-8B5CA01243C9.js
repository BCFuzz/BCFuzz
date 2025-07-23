const o2 = {
    "maxByteLength": 4294967296,
};
const v4 = new ArrayBuffer(4, o2);
new DataView(v4);
v4["transfer"]();
gc();
