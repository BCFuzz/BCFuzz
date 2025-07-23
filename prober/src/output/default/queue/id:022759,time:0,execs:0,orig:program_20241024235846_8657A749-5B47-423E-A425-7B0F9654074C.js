const o3 = {
    "maxByteLength": 3031,
};
const v5 = new SharedArrayBuffer(3031, o3);
const v6 = new BigInt64Array(v5);
v6["sort"](Array);
gc();
