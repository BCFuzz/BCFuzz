const o2 = {
    "maxByteLength": 128,
};
const v4 = new SharedArrayBuffer(128, o2);
const v6 = new Float64Array(v4);
v6.reverse();
gc();
