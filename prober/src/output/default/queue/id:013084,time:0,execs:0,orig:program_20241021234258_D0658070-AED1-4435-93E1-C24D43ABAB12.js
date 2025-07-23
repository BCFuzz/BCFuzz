function f0() {
    return f0;
}
const o3 = {
    "maxByteLength": 1335,
};
const v5 = new SharedArrayBuffer(64, o3);
const v7 = new Uint32Array(v5);
v7.constructor = f0;
v7.subarray();
gc();
