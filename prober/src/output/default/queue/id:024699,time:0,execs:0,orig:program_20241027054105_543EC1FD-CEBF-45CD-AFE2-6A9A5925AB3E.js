const o4 = {
    "maxByteLength": 4005,
};
const v6 = new ArrayBuffer(4005, o4);
const v8 = new Float64Array(v6);
const v9 = v8.subarray(3, 123);
v9[4] = v9;
gc();
