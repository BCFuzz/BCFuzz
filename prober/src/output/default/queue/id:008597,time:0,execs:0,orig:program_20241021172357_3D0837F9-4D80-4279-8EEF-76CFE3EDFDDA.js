function f0() {
    return f0;
}
const o3 = {
    "maxByteLength": 11,
};
const v5 = new SharedArrayBuffer(11, o3);
const v7 = new Int16Array(v5);
v7.subarray(f0, Int16Array);
gc();
