function f0() {
    return f0;
}
const o3 = {
    "maxByteLength": 1780,
};
const v5 = new ArrayBuffer(0, o3);
const v7 = new Uint16Array(v5);
v7.constructor = f0;
v7.fill(v7, 1780, 0).subarray();
gc();
