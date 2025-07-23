function f2() {
    return 128;
}
BigUint64Array[Symbol.toPrimitive] = f2;
const v5 = new BigUint64Array();
const o9 = {
    "maxByteLength": 268435441,
};
const v11 = new ArrayBuffer(3304, o9);
const v12 = new BigUint64Array(v11, Int16Array, v5);
delete v12[BigUint64Array];
gc();
