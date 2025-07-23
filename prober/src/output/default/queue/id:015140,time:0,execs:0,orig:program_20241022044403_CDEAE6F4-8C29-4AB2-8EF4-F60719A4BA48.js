const o2 = {
    "maxByteLength": 11,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Float64Array(v4);
v4.transfer();
v6[749075507];
gc();
