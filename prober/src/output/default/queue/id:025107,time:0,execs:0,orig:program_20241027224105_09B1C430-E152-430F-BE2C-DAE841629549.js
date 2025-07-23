const o5 = {
    "maxByteLength": 4005,
};
const v7 = new ArrayBuffer(4005, o5);
const v9 = new Float64Array(v7);
const t5 = v9.subarray(3, 123);
t5[4] = 0;
gc();
