const o2 = {
    "maxByteLength": 5,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Int32Array(v4);
new Float64Array(v6);
gc();
