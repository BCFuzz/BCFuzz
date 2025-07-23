const o2 = {
    "maxByteLength": 2329388498,
};
const v4 = new ArrayBuffer(7, o2);
const v6 = new Float32Array(v4);
function f7(a8) {
    return a8;
}
v6.constructor = f7;
v6.subarray(7);
gc();
