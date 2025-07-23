const o3 = {
    "maxByteLength": 3614,
};
function f4(a5) {
    return 2959;
}
o3.valueOf = f4;
const v7 = new SharedArrayBuffer(3614, o3);
const v9 = new Int32Array(v7);
createGlobalObject().Atomics.wait(v9, v9, o3);
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();
