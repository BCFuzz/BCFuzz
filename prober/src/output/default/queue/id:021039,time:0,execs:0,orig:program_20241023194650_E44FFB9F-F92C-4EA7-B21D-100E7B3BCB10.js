const o2 = {
    "maxByteLength": 3,
};
const v4 = new ArrayBuffer(2, o2);
const v6 = new Float64Array(v4);
v6.sort();
gc();
