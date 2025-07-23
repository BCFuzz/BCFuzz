const o3 = {
    "maxByteLength": 11,
};
const v5 = new ArrayBuffer(5, o3);
const v7 = new Float64Array(v5);
v5.transfer();
v7.length |= 0;
gc();
