const o2 = {
    "maxByteLength": 3144,
};
const v4 = new SharedArrayBuffer(10, o2);
const v6 = new Int16Array(v4);
v6[2] = v6;
gc();
