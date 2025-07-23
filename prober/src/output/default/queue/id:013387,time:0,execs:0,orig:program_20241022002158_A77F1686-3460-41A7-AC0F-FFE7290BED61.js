const o2 = {
    "maxByteLength": 536870912,
};
const v4 = new ArrayBuffer(6, o2);
const v6 = new Int8Array(v4);
v6.indexOf();
gc();
