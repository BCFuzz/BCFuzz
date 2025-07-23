const o2 = {
    "maxByteLength": 416,
};
const v4 = new SharedArrayBuffer(116, o2);
const v6 = new Float64Array(v4);
v6["subarray"]().sort();
gc();
