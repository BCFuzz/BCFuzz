function f1(a2, a3, a4) {
    eval(a2);
    arguments[Symbol.iterator] = BigUint64Array;
    return BigUint64Array;
}
f1();
gc();
