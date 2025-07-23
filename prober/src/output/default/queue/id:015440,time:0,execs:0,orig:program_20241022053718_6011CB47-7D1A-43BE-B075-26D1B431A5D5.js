function f0() {
    return f0;
}
const o3 = {
    "maxByteLength": 5,
};
const v5 = new ArrayBuffer(5, o3);
const v7 = new Int32Array(v5);
v7.h = f0;
v7.subarray();
gc();
