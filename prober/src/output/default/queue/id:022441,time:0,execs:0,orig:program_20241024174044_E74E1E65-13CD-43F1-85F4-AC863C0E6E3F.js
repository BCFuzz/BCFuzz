function f1(a2, a3, a4, a5) {
    return a4;
}
function f6(a7, a8) {
    return 7;
}
f1[Symbol.toPrimitive] = f6;
const o13 = {
    "maxByteLength": 268435440,
};
const v15 = new ArrayBuffer(237, o13);
const v17 = new BigUint64Array(v15, v15, f1);
v17[2];
gc();
