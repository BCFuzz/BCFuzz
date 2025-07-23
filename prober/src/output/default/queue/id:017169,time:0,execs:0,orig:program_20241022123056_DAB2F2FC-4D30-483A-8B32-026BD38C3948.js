const o2 = {
    "maxByteLength": 3031,
};
const v4 = new SharedArrayBuffer(3031, o2);
const v6 = new Float64Array(v4);
v6["sort"](Array);
gc();
