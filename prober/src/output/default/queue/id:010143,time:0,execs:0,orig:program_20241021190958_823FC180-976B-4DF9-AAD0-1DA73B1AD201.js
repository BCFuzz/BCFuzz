const o2 = {
    "maxByteLength": 2329388498,
};
const v4 = new ArrayBuffer(7, o2);
function f5() {
    return ArrayBuffer;
}
const v7 = new Float32Array(v4);
v7.valueOf = f5;
v7.subarray(7, 7);
gc();
