const o2 = {
    "maxByteLength": 136,
};
const v4 = new SharedArrayBuffer(2, o2);
const v6 = new Float64Array(v4);
v6.includes();
gc();
