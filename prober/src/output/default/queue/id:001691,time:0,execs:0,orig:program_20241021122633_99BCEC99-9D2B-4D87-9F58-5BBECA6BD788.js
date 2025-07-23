function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2(F2, F2);
Reflect.construct(BigUint64Array, [v6], Date);
gc();
