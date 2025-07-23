const o2 = {
    "maxByteLength": 4010739806,
};
const v4 = new SharedArrayBuffer(4096, o2);
const v6 = new BigUint64Array(v4);
function f7() {
    return BigUint64Array;
}
v6.constructor = f7;
v6.subarray();
gc();
