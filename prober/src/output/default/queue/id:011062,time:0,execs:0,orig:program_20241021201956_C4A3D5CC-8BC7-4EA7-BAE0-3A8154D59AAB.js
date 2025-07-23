const o2 = {
    "maxByteLength": 11,
};
const v4 = new SharedArrayBuffer(11, o2);
const v6 = new Int16Array(v4);
function f7(a8, a9) {
    return 11;
}
v6.constructor = f7;
v6.subarray();
gc();
