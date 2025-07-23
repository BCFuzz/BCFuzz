const v3 = createGlobalObject().AggregateError.prototype;
v3[Symbol.toPrimitive] = createGlobalObject;
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
        }
        a14.message = a14;
        try { a15.toString(); } catch (e) {}
    }
    Reflect.construct(F12, [v3,v3]);
}
new F6();
gc();
