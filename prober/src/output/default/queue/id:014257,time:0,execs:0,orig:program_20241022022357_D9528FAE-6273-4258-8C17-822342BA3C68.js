const o3 = {
    "maxByteLength": 25,
};
const v5 = new ArrayBuffer(25, o3);
const v7 = new Int16Array(v5);
v7.indexOf(1.0);
gc();
