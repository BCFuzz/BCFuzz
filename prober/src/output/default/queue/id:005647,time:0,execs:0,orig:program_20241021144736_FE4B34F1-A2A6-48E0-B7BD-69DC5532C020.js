const o2 = {
    "maxByteLength": 268435440,
};
const v4 = new ArrayBuffer(8, o2);
const v6 = new BigUint64Array(v4);
function f7(a8) {
    return v6;
}
v6.toString = f7;
gc();
