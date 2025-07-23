const o3 = {
    "maxByteLength": 105,
};
const v5 = new ArrayBuffer(13, o3);
const v7 = new Float64Array(v5);
v7.indexOf(9007199254740991);
gc();
