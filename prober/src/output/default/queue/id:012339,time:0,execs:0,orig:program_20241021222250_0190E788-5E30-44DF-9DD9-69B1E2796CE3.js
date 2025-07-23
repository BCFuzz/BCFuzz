const o3 = {
    "maxByteLength": 11,
};
const v4 = new SharedArrayBuffer("o1nV", o3);
const v6 = new Int16Array(v4);
v6.constructor = Int16Array;
v6.subarray();
gc();
