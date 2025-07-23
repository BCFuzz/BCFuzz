function f1() {
    return -4;
}
BigInt64Array[Symbol.toPrimitive] = f1;
const v7 = new Int16Array(129);
([...v7,BigInt64Array]).sort();
gc();
