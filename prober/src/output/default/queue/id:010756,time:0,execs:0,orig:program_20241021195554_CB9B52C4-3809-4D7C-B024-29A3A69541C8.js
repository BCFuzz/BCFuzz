const o2 = {
    "maxByteLength": 1862,
};
const v4 = new ArrayBuffer(1862, o2);
const v7 = new Int16Array();
const t5 = v7.constructor;
const v9 = new t5(v4, v4, ArrayBuffer);
v9.sort(Float64Array);
gc();
