const v3 = new BigUint64Array();
function* f4(a5, a6) {
    yield* v3;
    return 3669;
}
BigUint64Array[Symbol.iterator] = f4;
new BigUint64Array(BigUint64Array);
gc();
