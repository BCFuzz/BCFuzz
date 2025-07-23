function f1(a2, a3) {
    a2.bind(BigUint64Array, f1, f1, a3);
}
for (let i = 0; i < 50; i++) {
    for (let v5 = 0; v5 < 5; v5++) {
        f1(BigUint64Array);
    }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F7(BigUint64Array, F7);
    f1(f1);
}
gc();
