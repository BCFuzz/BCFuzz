const o2 = {
    "maxByteLength": 15,
};
const v4 = new SharedArrayBuffer(15, o2);
const v6 = new Int16Array(v4);
new Int32Array(v6);
gc();
