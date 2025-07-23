function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        try { a11.set(BigUint64Array, this); } catch (e) {}
    }
    Reflect.construct(F8, [Reflect,Reflect], Int16Array);
}
new F1(F1, F1, BigUint64Array, BigUint64Array);
gc();
