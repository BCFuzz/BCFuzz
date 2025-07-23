function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4, a5) {
    return a5;
}
const o8 = {
    "maxByteLength": 16,
};
const v10 = new ArrayBuffer(1, o8);
const v12 = new BigInt64Array(v10, f3, v2);
v12.sort();
gc();
