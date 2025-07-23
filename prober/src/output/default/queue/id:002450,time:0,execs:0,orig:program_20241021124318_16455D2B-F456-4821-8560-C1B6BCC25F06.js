function f1(a2, a3, a4) {
    arguments[Symbol.iterator] = BigUint64Array;
    return a2;
}
f1();
gc();
