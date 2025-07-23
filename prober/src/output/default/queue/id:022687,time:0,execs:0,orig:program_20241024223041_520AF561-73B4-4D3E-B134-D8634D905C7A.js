const v3 = createGlobalObject().AggregateError.prototype;
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function F10(a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
    }
    Reflect.construct(F10, v3);
}
new F4();
gc();
