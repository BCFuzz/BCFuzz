function f1() {
    return -268435456;
}
Reflect[Symbol.toPrimitive] = f1;
const v7 = new BigUint64Array();
v7.copyWithin(Uint8ClampedArray, Reflect);
gc();
