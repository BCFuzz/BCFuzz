const o3 = {
    "maxByteLength": 25,
};
const v4 = new ArrayBuffer(7, o3);
const v6 = new Int16Array(v4);
v6.sort();
gc();
