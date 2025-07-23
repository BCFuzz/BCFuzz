const o2 = {
    "maxByteLength": 129,
};
const v4 = new ArrayBuffer(3, o2);
const v6 = new Float64Array(v4);
v6.set(v6);
gc();
