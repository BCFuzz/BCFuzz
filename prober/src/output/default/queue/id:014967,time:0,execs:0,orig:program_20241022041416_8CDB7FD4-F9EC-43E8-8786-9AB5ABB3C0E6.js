const o2 = {
    "maxByteLength": 5,
};
const v4 = new ArrayBuffer(4, o2);
const v6 = new Int16Array(v4);
delete v6[10];
gc();
