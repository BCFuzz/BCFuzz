function f1(a2, a3, a4, a5) {
    return a3;
}
const o8 = {
    "maxByteLength": 268435440,
};
const v10 = new ArrayBuffer(237, o8);
const v11 = new BigUint64Array(v10, v10, f1);
v11[7];
gc();
